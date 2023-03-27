import { createAction, props } from '@ngrx/store';
import { Booking, Flight } from '../API.service';

export const FETCH_FLIGHT = createAction(
  'FETCH_FLIGHT',
  props<{ flights: Flight[] }>()
);

export const FETCH_BOOKING = createAction(
  'FETCH_BOOKING',
  props<{ bookings: Booking[] }>()
);

export const ADD_BOOKING = createAction(
  'ADD_BOOKING',
  props<{ booking: Booking }>()
);

export const DELETE_BOOKING = createAction(
  'DELETE_BOOKING',
  props<{ booking: Booking }>()
);
