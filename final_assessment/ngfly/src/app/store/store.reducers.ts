import { createReducer, on } from '@ngrx/store';
import {
  FETCH_FLIGHT,
  FETCH_BOOKING,
  ADD_BOOKING,
  DELETE_BOOKING,
} from './store.actions';
import { AppState } from './store.state';

export const initialFlightState: AppState = {
  flights: [],
  bookings: [],
};

export const STORE_REDUCER = createReducer(
  initialFlightState,
  on(FETCH_FLIGHT, (state, { flights }) => {
    return { ...state, flights: flights };
  }),
  on(FETCH_BOOKING, (state, { bookings }) => {
    return { ...state, bookings: bookings };
  }),

  on(ADD_BOOKING, (state, { booking }) => {
    return { ...state, bookings: [...state.bookings, booking] };
  }),
  on(DELETE_BOOKING, (state, { booking }) => {
    return {
      ...state,
      bookings: state.bookings.filter((b) => b.id != booking.id),
    };
  })
);
