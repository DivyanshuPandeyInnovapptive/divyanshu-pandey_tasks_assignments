import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './store.state';

export const featureStateFlight = createFeatureSelector<AppState>('app');
export const featureStateBooking = createFeatureSelector<AppState>('app');

export const selectFlightCollection = createSelector(
  featureStateFlight,
  (state: AppState) => {
    console.log('flights:', state);
    return state.flights;
  }
);

export const selectBookingCollection = createSelector(
  featureStateBooking,
  (state: AppState) => {
    console.log('bookings: ', state);
    return state.bookings;
  }
);
