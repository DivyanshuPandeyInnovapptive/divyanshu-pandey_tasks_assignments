import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Auth } from 'aws-amplify';
import { Observable } from 'rxjs';
import { APIService, Booking, Flight } from 'src/app/API.service';
import { AppService } from 'src/app/app.service';
import { DELETE_BOOKING, FETCH_BOOKING } from 'src/app/store/store.actions';
import { selectBookingCollection } from 'src/app/store/store.selectors';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css'],
})
export class MybookingsComponent {
  bookings: Array<Booking> = [];
  bookings$: Observable<Booking[]> = this.store.select(selectBookingCollection);
  upcoming_bookings: Array<Booking> = [];
  past_bookings: Array<Booking> = [];
  bookingFlights: any = {};

  arrivalTime(date: string, duration: number) {
    let d = new Date(date);
    let t = d.getHours() * 60 + d.getMinutes() + duration;
    d.setHours(t / 60);
    d.setMinutes(t % 60);
    return String(d);
  }

  getFlight(id: string) {
    this.appService.public_query$.next(true);
    this.apiService
      .GetFlight(id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        let flight = error.data.getFlight as Flight;
        this.bookingFlights[id] = flight;
      });
    this.appService.public_query$.next(false);
  }

  filterBookings(bookings: any) {
    let d = new Date();
    this.upcoming_bookings = [];
    this.past_bookings = [];
    for (let booking of bookings) {
      // if (booking.flightBookingsId)
      //   console.log(this.bookingFlights[booking.flightBookingsId]);
      if (new Date(booking.departure_time) < d)
        this.past_bookings.push(booking);
      else this.upcoming_bookings.push(booking);
    }
  }

  deleteBooking(booking: Booking) {
    this.apiService
      .DeleteBooking({ id: booking.id })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        this.bookings = this.bookings.filter(
          (booking) => booking.id !== err.data.deleteBooking.id
        );
        this.store.dispatch(DELETE_BOOKING({ booking: booking }));
      });
  }

  getBookings() {
    this.apiService
      .ListBookings()
      .then((event) => {
        console.log(event);
      })
      .catch((err) => {
        this.bookings = err.data.listBookings.items as Booking[];
        this.store.dispatch(FETCH_BOOKING({ bookings: this.bookings }));
        for (let booking of err.data.listBookings.items) {
          this.getFlight(booking.flightBookingsId);
        }
        // console.log(this.bookings);
        // console.error(err);
      });
  }

  constructor(
    private appService: AppService,
    private apiService: APIService,
    private store: Store
  ) {
    this.getBookings();
    this.bookings$.subscribe((data) => {
      this.filterBookings(data);
    });
    Auth.currentAuthenticatedUser().then((user) => {
      if (user) this.appService.authenticated$.next(true);
    });
  }
}
