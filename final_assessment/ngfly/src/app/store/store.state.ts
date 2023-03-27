import { Flight, Booking } from '../API.service';

export interface AppState {
  flights: Flight[];
  bookings: Booking[];
}
