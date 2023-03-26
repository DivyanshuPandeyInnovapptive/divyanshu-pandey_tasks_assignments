import { Component } from '@angular/core';
import { Amplify, Auth } from 'aws-amplify';
import {
  APIService,
  CreateBookingInput,
  Flight,
  SearchableFlightFilterInput,
} from 'src/app/API.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  flights: Array<Flight> = [];
  flightsDeparture: any = {};
  flightsArrival: any = {};
  noOfSeats: number = 1;
  origin: string = '';
  destination: string = '';
  departureDate: string = '';

  onSeatChange(count: number) {
    if (count < 1) this.noOfSeats = 1;
  }

  showToast(suc: boolean) {
    let toast = document.querySelector('.success-toast');
    if (toast) {
      if (!suc) {
        toast.innerHTML = 'Not Enough Available Seats';
        toast.classList.add('bg-[red]');
        toast.classList.add('text-white');
      }
      toast.classList.add('active');
    }

    setTimeout(() => {
      if (toast) {
        toast.classList.remove('active');
        if (!suc) {
          toast.classList.remove('bg-[red]');
          toast.classList.remove('text-white');
        }
      }
    }, 1000);

    setTimeout(() => {
      if (toast) {
        toast.innerHTML = 'Flight booked successfully.';
      }
    }, 2000);
  }

  updateFlight(flight: Flight) {
    // this.appService.public_query$.next(true);
    // this.apiService.UpdateFlight({
    //   id: flight.id,
    //   available_seats: this.noOfSeats,
    // });
    // this.appService.public_query$.next(false);
  }

  createBooking(flight: Flight) {
    if (this.noOfSeats <= flight.available_seats) {
      let input: CreateBookingInput = {
        seats: this.noOfSeats.toString(),
        flightBookingsId: flight.id,
        departure_time: this.flightsDeparture[flight.id],
      };
      this.apiService
        .CreateBooking(input)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
      this.updateFlight(flight);
      this.showToast(true);
    } else {
      this.showToast(false);
    }
  }

  setDepartureDate(dateValue: string) {
    this.departureDate = dateValue;
    this.setFlightsDeparture();
  }

  setFlightsDeparture() {
    for (let flight of this.flights) {
      let d = new Date(this.departureDate);
      let t = Number(flight.code.slice(-3));
      d.setHours(t / 60);
      d.setMinutes(t % 60);
      this.flightsDeparture[flight.id] = d;
      d = new Date(this.departureDate);
      t += flight.duration;
      d.setHours(t / 60);
      d.setMinutes(t % 60);
      this.flightsArrival[flight.id] = d;
    }
  }

  searchFlights() {
    this.appService.public_query$.next(true);
    let andFilter: Array<SearchableFlightFilterInput | null> = [
      {
        available_seats: { gte: this.noOfSeats },
      },
    ];
    if (this.origin !== '' && andFilter[0] !== null)
      andFilter[0].origin = { matchPhrasePrefix: this.origin.toLowerCase() };
    if (this.destination !== '' && andFilter[0] !== null)
      andFilter[0].destination = {
        matchPhrasePrefix: this.destination.toLowerCase(),
      };

    let searchQuery: SearchableFlightFilterInput = {
      and: andFilter,
    };

    this.apiService
      .SearchFlights(searchQuery)
      .then((event) => {
        this.flights = event.items as Flight[];
      })
      .catch((e) => {
        console.log(e);
        this.flights = e.data.searchFlights.items as Flight[];
      })
      .finally(() => {
        this.setFlightsDeparture();
      });
    this.appService.public_query$.next(false);
  }

  ngOnInit() {
    this.searchFlights();
  }

  constructor(private appService: AppService, private apiService: APIService) {
    Auth.currentAuthenticatedUser().then((user) => {
      if (user) this.appService.authenticated$.next(true);
    });
  }
}
