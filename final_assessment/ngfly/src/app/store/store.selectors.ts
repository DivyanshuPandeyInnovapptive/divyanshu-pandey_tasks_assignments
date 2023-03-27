import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './store.state';

export const featureStateFlight = createFeatureSelector<AppState>('flight');
export const featureStateBooking = createFeatureSelector<AppState>('booking');

export const selectFlightCollection = createSelector(
  featureStateFlight,
  (state: AppState) => {
    console.log('flight:', state);
    return state.flights;
  }
);

export const selectBookingCollection = createSelector(
  featureStateBooking,
  (state: AppState) => {
    console.log('booking: ', state);
    return state.bookings;
  }
);
