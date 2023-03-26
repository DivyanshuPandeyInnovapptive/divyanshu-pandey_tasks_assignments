/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateFlight: OnCreateFlightSubscription;
  onUpdateFlight: OnUpdateFlightSubscription;
  onDeleteFlight: OnDeleteFlightSubscription;
  onCreateBooking: OnCreateBookingSubscription;
  onUpdateBooking: OnUpdateBookingSubscription;
  onDeleteBooking: OnDeleteBookingSubscription;
};

export type CreateFlightInput = {
  id?: string | null;
  code: string;
  name: string;
  company: string;
  duration: number;
  origin: string;
  destination: string;
  price: number;
  total_seats: number;
  available_seats: number;
};

export type ModelFlightConditionInput = {
  code?: ModelStringInput | null;
  name?: ModelStringInput | null;
  company?: ModelStringInput | null;
  duration?: ModelIntInput | null;
  origin?: ModelStringInput | null;
  destination?: ModelStringInput | null;
  price?: ModelIntInput | null;
  total_seats?: ModelIntInput | null;
  available_seats?: ModelIntInput | null;
  and?: Array<ModelFlightConditionInput | null> | null;
  or?: Array<ModelFlightConditionInput | null> | null;
  not?: ModelFlightConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Flight = {
  __typename: "Flight";
  id: string;
  code: string;
  name: string;
  company: string;
  duration: number;
  origin: string;
  destination: string;
  price: number;
  total_seats: number;
  available_seats: number;
  bookings?: ModelBookingConnection | null;
  createdAt: string;
  updatedAt: string;
  username?: string | null;
};

export type ModelBookingConnection = {
  __typename: "ModelBookingConnection";
  items: Array<Booking | null>;
  nextToken?: string | null;
};

export type Booking = {
  __typename: "Booking";
  id: string;
  departure_time: string;
  seats: string;
  flight?: Flight | null;
  createdAt: string;
  updatedAt: string;
  flightBookingsId?: string | null;
  username?: string | null;
};

export type UpdateFlightInput = {
  id: string;
  code?: string | null;
  name?: string | null;
  company?: string | null;
  duration?: number | null;
  origin?: string | null;
  destination?: string | null;
  price?: number | null;
  total_seats?: number | null;
  available_seats?: number | null;
};

export type DeleteFlightInput = {
  id: string;
};

export type CreateBookingInput = {
  id?: string | null;
  departure_time: string;
  seats: string;
  flightBookingsId?: string | null;
};

export type ModelBookingConditionInput = {
  departure_time?: ModelStringInput | null;
  seats?: ModelStringInput | null;
  and?: Array<ModelBookingConditionInput | null> | null;
  or?: Array<ModelBookingConditionInput | null> | null;
  not?: ModelBookingConditionInput | null;
  flightBookingsId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateBookingInput = {
  id: string;
  departure_time?: string | null;
  seats?: string | null;
  flightBookingsId?: string | null;
};

export type DeleteBookingInput = {
  id: string;
};

export type ModelFlightFilterInput = {
  id?: ModelIDInput | null;
  code?: ModelStringInput | null;
  name?: ModelStringInput | null;
  company?: ModelStringInput | null;
  duration?: ModelIntInput | null;
  origin?: ModelStringInput | null;
  destination?: ModelStringInput | null;
  price?: ModelIntInput | null;
  total_seats?: ModelIntInput | null;
  available_seats?: ModelIntInput | null;
  and?: Array<ModelFlightFilterInput | null> | null;
  or?: Array<ModelFlightFilterInput | null> | null;
  not?: ModelFlightFilterInput | null;
};

export type ModelFlightConnection = {
  __typename: "ModelFlightConnection";
  items: Array<Flight | null>;
  nextToken?: string | null;
};

export type SearchableFlightFilterInput = {
  id?: SearchableIDFilterInput | null;
  code?: SearchableStringFilterInput | null;
  name?: SearchableStringFilterInput | null;
  company?: SearchableStringFilterInput | null;
  duration?: SearchableIntFilterInput | null;
  origin?: SearchableStringFilterInput | null;
  destination?: SearchableStringFilterInput | null;
  price?: SearchableIntFilterInput | null;
  total_seats?: SearchableIntFilterInput | null;
  available_seats?: SearchableIntFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableFlightFilterInput | null> | null;
  or?: Array<SearchableFlightFilterInput | null> | null;
  not?: SearchableFlightFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableIntFilterInput = {
  ne?: number | null;
  gt?: number | null;
  lt?: number | null;
  gte?: number | null;
  lte?: number | null;
  eq?: number | null;
  range?: Array<number | null> | null;
};

export type SearchableFlightSortInput = {
  field?: SearchableFlightSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableFlightSortableFields {
  id = "id",
  code = "code",
  name = "name",
  company = "company",
  duration = "duration",
  origin = "origin",
  destination = "destination",
  price = "price",
  total_seats = "total_seats",
  available_seats = "available_seats",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}

export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc"
}

export type SearchableFlightAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableFlightAggregateField;
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum"
}

export enum SearchableFlightAggregateField {
  id = "id",
  code = "code",
  name = "name",
  company = "company",
  duration = "duration",
  origin = "origin",
  destination = "destination",
  price = "price",
  total_seats = "total_seats",
  available_seats = "available_seats",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}

export type SearchableFlightConnection = {
  __typename: "SearchableFlightConnection";
  items: Array<Flight | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult";
  name: string;
  result?: SearchableAggregateGenericResult | null;
};

export type SearchableAggregateGenericResult =
  | SearchableAggregateScalarResult
  | SearchableAggregateBucketResult;

export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult";
  value: number;
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult";
  buckets?: Array<SearchableAggregateBucketResultItem | null> | null;
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem";
  key: string;
  doc_count: number;
};

export type ModelBookingFilterInput = {
  id?: ModelIDInput | null;
  departure_time?: ModelStringInput | null;
  seats?: ModelStringInput | null;
  and?: Array<ModelBookingFilterInput | null> | null;
  or?: Array<ModelBookingFilterInput | null> | null;
  not?: ModelBookingFilterInput | null;
  flightBookingsId?: ModelIDInput | null;
};

export type ModelSubscriptionFlightFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  code?: ModelSubscriptionStringInput | null;
  name?: ModelSubscriptionStringInput | null;
  company?: ModelSubscriptionStringInput | null;
  duration?: ModelSubscriptionIntInput | null;
  origin?: ModelSubscriptionStringInput | null;
  destination?: ModelSubscriptionStringInput | null;
  price?: ModelSubscriptionIntInput | null;
  total_seats?: ModelSubscriptionIntInput | null;
  available_seats?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionFlightFilterInput | null> | null;
  or?: Array<ModelSubscriptionFlightFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionBookingFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  departure_time?: ModelSubscriptionStringInput | null;
  seats?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionBookingFilterInput | null> | null;
  or?: Array<ModelSubscriptionBookingFilterInput | null> | null;
};

export type CreateFlightMutation = {
  __typename: "Flight";
  id: string;
  code: string;
  name: string;
  company: string;
  duration: number;
  origin: string;
  destination: string;
  price: number;
  total_seats: number;
  available_seats: number;
  bookings?: {
    __typename: "ModelBookingConnection";
    items: Array<{
      __typename: "Booking";
      id: string;
      departure_time: string;
      seats: string;
      createdAt: string;
      updatedAt: string;
      flightBookingsId?: string | null;
      username?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  username?: string | null;
};

export type UpdateFlightMutation = {
  __typename: "Flight";
  id: string;
  code: string;
  name: string;
  company: string;
  duration: number;
  origin: string;
  destination: string;
  price: number;
  total_seats: number;
  available_seats: number;
  bookings?: {
    __typename: "ModelBookingConnection";
    items: Array<{
      __typename: "Booking";
      id: string;
      departure_time: string;
      seats: string;
      createdAt: string;
      updatedAt: string;
      flightBookingsId?: string | null;
      username?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  username?: string | null;
};

export type DeleteFlightMutation = {
  __typename: "Flight";
  id: string;
  code: string;
  name: string;
  company: string;
  duration: number;
  origin: string;
  destination: string;
  price: number;
  total_seats: number;
  available_seats: number;
  bookings?: {
    __typename: "ModelBookingConnection";
    items: Array<{
      __typename: "Booking";
      id: string;
      departure_time: string;
      seats: string;
      createdAt: string;
      updatedAt: string;
      flightBookingsId?: string | null;
      username?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  username?: string | null;
};

export type CreateBookingMutation = {
  __typename: "Booking";
  id: string;
  departure_time: string;
  seats: string;
  flight?: {
    __typename: "Flight";
    id: string;
    code: string;
    name: string;
    company: string;
    duration: number;
    origin: string;
    destination: string;
    price: number;
    total_seats: number;
    available_seats: number;
    bookings?: {
      __typename: "ModelBookingConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    username?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  flightBookingsId?: string | null;
  username?: string | null;
};

export type UpdateBookingMutation = {
  __typename: "Booking";
  id: string;
  departure_time: string;
  seats: string;
  flight?: {
    __typename: "Flight";
    id: string;
    code: string;
    name: string;
    company: string;
    duration: number;
    origin: string;
    destination: string;
    price: number;
    total_seats: number;
    available_seats: number;
    bookings?: {
      __typename: "ModelBookingConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    username?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  flightBookingsId?: string | null;
  username?: string | null;
};

export type DeleteBookingMutation = {
  __typename: "Booking";
  id: string;
  departure_time: string;
  seats: string;
  flight?: {
    __typename: "Flight";
    id: string;
    code: string;
    name: string;
    company: string;
    duration: number;
    origin: string;
    destination: string;
    price: number;
    total_seats: number;
    available_seats: number;
    bookings?: {
      __typename: "ModelBookingConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    username?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  flightBookingsId?: string | null;
  username?: string | null;
};

export type GetFlightQuery = {
  __typename: "Flight";
  id: string;
  code: string;
  name: string;
  company: string;
  duration: number;
  origin: string;
  destination: string;
  price: number;
  total_seats: number;
  available_seats: number;
  bookings?: {
    __typename: "ModelBookingConnection";
    items: Array<{
      __typename: "Booking";
      id: string;
      departure_time: string;
      seats: string;
      createdAt: string;
      updatedAt: string;
      flightBookingsId?: string | null;
      username?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  username?: string | null;
};

export type ListFlightsQuery = {
  __typename: "ModelFlightConnection";
  items: Array<{
    __typename: "Flight";
    id: string;
    code: string;
    name: string;
    company: string;
    duration: number;
    origin: string;
    destination: string;
    price: number;
    total_seats: number;
    available_seats: number;
    bookings?: {
      __typename: "ModelBookingConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    username?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type SearchFlightsQuery = {
  __typename: "SearchableFlightConnection";
  items: Array<{
    __typename: "Flight";
    id: string;
    code: string;
    name: string;
    company: string;
    duration: number;
    origin: string;
    destination: string;
    price: number;
    total_seats: number;
    available_seats: number;
    bookings?: {
      __typename: "ModelBookingConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    username?: string | null;
  } | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<{
    __typename: "SearchableAggregateResult";
    name: string;
    result:
      | (
          | {
              __typename: "SearchableAggregateScalarResult";
              value: number;
            }
          | {
              __typename: "SearchableAggregateBucketResult";
              buckets?: Array<{
                __typename: string;
                key: string;
                doc_count: number;
              } | null> | null;
            }
        )
      | null;
  } | null>;
};

export type GetBookingQuery = {
  __typename: "Booking";
  id: string;
  departure_time: string;
  seats: string;
  flight?: {
    __typename: "Flight";
    id: string;
    code: string;
    name: string;
    company: string;
    duration: number;
    origin: string;
    destination: string;
    price: number;
    total_seats: number;
    available_seats: number;
    bookings?: {
      __typename: "ModelBookingConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    username?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  flightBookingsId?: string | null;
  username?: string | null;
};

export type ListBookingsQuery = {
  __typename: "ModelBookingConnection";
  items: Array<{
    __typename: "Booking";
    id: string;
    departure_time: string;
    seats: string;
    flight?: {
      __typename: "Flight";
      id: string;
      code: string;
      name: string;
      company: string;
      duration: number;
      origin: string;
      destination: string;
      price: number;
      total_seats: number;
      available_seats: number;
      createdAt: string;
      updatedAt: string;
      username?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    flightBookingsId?: string | null;
    username?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateFlightSubscription = {
  __typename: "Flight";
  id: string;
  code: string;
  name: string;
  company: string;
  duration: number;
  origin: string;
  destination: string;
  price: number;
  total_seats: number;
  available_seats: number;
  bookings?: {
    __typename: "ModelBookingConnection";
    items: Array<{
      __typename: "Booking";
      id: string;
      departure_time: string;
      seats: string;
      createdAt: string;
      updatedAt: string;
      flightBookingsId?: string | null;
      username?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  username?: string | null;
};

export type OnUpdateFlightSubscription = {
  __typename: "Flight";
  id: string;
  code: string;
  name: string;
  company: string;
  duration: number;
  origin: string;
  destination: string;
  price: number;
  total_seats: number;
  available_seats: number;
  bookings?: {
    __typename: "ModelBookingConnection";
    items: Array<{
      __typename: "Booking";
      id: string;
      departure_time: string;
      seats: string;
      createdAt: string;
      updatedAt: string;
      flightBookingsId?: string | null;
      username?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  username?: string | null;
};

export type OnDeleteFlightSubscription = {
  __typename: "Flight";
  id: string;
  code: string;
  name: string;
  company: string;
  duration: number;
  origin: string;
  destination: string;
  price: number;
  total_seats: number;
  available_seats: number;
  bookings?: {
    __typename: "ModelBookingConnection";
    items: Array<{
      __typename: "Booking";
      id: string;
      departure_time: string;
      seats: string;
      createdAt: string;
      updatedAt: string;
      flightBookingsId?: string | null;
      username?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  username?: string | null;
};

export type OnCreateBookingSubscription = {
  __typename: "Booking";
  id: string;
  departure_time: string;
  seats: string;
  flight?: {
    __typename: "Flight";
    id: string;
    code: string;
    name: string;
    company: string;
    duration: number;
    origin: string;
    destination: string;
    price: number;
    total_seats: number;
    available_seats: number;
    bookings?: {
      __typename: "ModelBookingConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    username?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  flightBookingsId?: string | null;
  username?: string | null;
};

export type OnUpdateBookingSubscription = {
  __typename: "Booking";
  id: string;
  departure_time: string;
  seats: string;
  flight?: {
    __typename: "Flight";
    id: string;
    code: string;
    name: string;
    company: string;
    duration: number;
    origin: string;
    destination: string;
    price: number;
    total_seats: number;
    available_seats: number;
    bookings?: {
      __typename: "ModelBookingConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    username?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  flightBookingsId?: string | null;
  username?: string | null;
};

export type OnDeleteBookingSubscription = {
  __typename: "Booking";
  id: string;
  departure_time: string;
  seats: string;
  flight?: {
    __typename: "Flight";
    id: string;
    code: string;
    name: string;
    company: string;
    duration: number;
    origin: string;
    destination: string;
    price: number;
    total_seats: number;
    available_seats: number;
    bookings?: {
      __typename: "ModelBookingConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    username?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  flightBookingsId?: string | null;
  username?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateFlight(
    input: CreateFlightInput,
    condition?: ModelFlightConditionInput
  ): Promise<CreateFlightMutation> {
    const statement = `mutation CreateFlight($input: CreateFlightInput!, $condition: ModelFlightConditionInput) {
        createFlight(input: $input, condition: $condition) {
          __typename
          id
          code
          name
          company
          duration
          origin
          destination
          price
          total_seats
          available_seats
          bookings {
            __typename
            items {
              __typename
              id
              departure_time
              seats
              createdAt
              updatedAt
              flightBookingsId
              username
            }
            nextToken
          }
          createdAt
          updatedAt
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFlightMutation>response.data.createFlight;
  }
  async UpdateFlight(
    input: UpdateFlightInput,
    condition?: ModelFlightConditionInput
  ): Promise<UpdateFlightMutation> {
    const statement = `mutation UpdateFlight($input: UpdateFlightInput!, $condition: ModelFlightConditionInput) {
        updateFlight(input: $input, condition: $condition) {
          __typename
          id
          code
          name
          company
          duration
          origin
          destination
          price
          total_seats
          available_seats
          bookings {
            __typename
            items {
              __typename
              id
              departure_time
              seats
              createdAt
              updatedAt
              flightBookingsId
              username
            }
            nextToken
          }
          createdAt
          updatedAt
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFlightMutation>response.data.updateFlight;
  }
  async DeleteFlight(
    input: DeleteFlightInput,
    condition?: ModelFlightConditionInput
  ): Promise<DeleteFlightMutation> {
    const statement = `mutation DeleteFlight($input: DeleteFlightInput!, $condition: ModelFlightConditionInput) {
        deleteFlight(input: $input, condition: $condition) {
          __typename
          id
          code
          name
          company
          duration
          origin
          destination
          price
          total_seats
          available_seats
          bookings {
            __typename
            items {
              __typename
              id
              departure_time
              seats
              createdAt
              updatedAt
              flightBookingsId
              username
            }
            nextToken
          }
          createdAt
          updatedAt
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFlightMutation>response.data.deleteFlight;
  }
  async CreateBooking(
    input: CreateBookingInput,
    condition?: ModelBookingConditionInput
  ): Promise<CreateBookingMutation> {
    const statement = `mutation CreateBooking($input: CreateBookingInput!, $condition: ModelBookingConditionInput) {
        createBooking(input: $input, condition: $condition) {
          __typename
          id
          departure_time
          seats
          flight {
            __typename
            id
            code
            name
            company
            duration
            origin
            destination
            price
            total_seats
            available_seats
            bookings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            username
          }
          createdAt
          updatedAt
          flightBookingsId
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBookingMutation>response.data.createBooking;
  }
  async UpdateBooking(
    input: UpdateBookingInput,
    condition?: ModelBookingConditionInput
  ): Promise<UpdateBookingMutation> {
    const statement = `mutation UpdateBooking($input: UpdateBookingInput!, $condition: ModelBookingConditionInput) {
        updateBooking(input: $input, condition: $condition) {
          __typename
          id
          departure_time
          seats
          flight {
            __typename
            id
            code
            name
            company
            duration
            origin
            destination
            price
            total_seats
            available_seats
            bookings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            username
          }
          createdAt
          updatedAt
          flightBookingsId
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBookingMutation>response.data.updateBooking;
  }
  async DeleteBooking(
    input: DeleteBookingInput,
    condition?: ModelBookingConditionInput
  ): Promise<DeleteBookingMutation> {
    const statement = `mutation DeleteBooking($input: DeleteBookingInput!, $condition: ModelBookingConditionInput) {
        deleteBooking(input: $input, condition: $condition) {
          __typename
          id
          departure_time
          seats
          flight {
            __typename
            id
            code
            name
            company
            duration
            origin
            destination
            price
            total_seats
            available_seats
            bookings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            username
          }
          createdAt
          updatedAt
          flightBookingsId
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBookingMutation>response.data.deleteBooking;
  }
  async GetFlight(id: string): Promise<GetFlightQuery> {
    const statement = `query GetFlight($id: ID!) {
        getFlight(id: $id) {
          __typename
          id
          code
          name
          company
          duration
          origin
          destination
          price
          total_seats
          available_seats
          bookings {
            __typename
            items {
              __typename
              id
              departure_time
              seats
              createdAt
              updatedAt
              flightBookingsId
              username
            }
            nextToken
          }
          createdAt
          updatedAt
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFlightQuery>response.data.getFlight;
  }
  async ListFlights(
    filter?: ModelFlightFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFlightsQuery> {
    const statement = `query ListFlights($filter: ModelFlightFilterInput, $limit: Int, $nextToken: String) {
        listFlights(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            code
            name
            company
            duration
            origin
            destination
            price
            total_seats
            available_seats
            bookings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            username
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFlightsQuery>response.data.listFlights;
  }
  async SearchFlights(
    filter?: SearchableFlightFilterInput,
    sort?: Array<SearchableFlightSortInput | null>,
    limit?: number,
    nextToken?: string,
    from?: number,
    aggregates?: Array<SearchableFlightAggregationInput | null>
  ): Promise<SearchFlightsQuery> {
    const statement = `query SearchFlights($filter: SearchableFlightFilterInput, $sort: [SearchableFlightSortInput], $limit: Int, $nextToken: String, $from: Int, $aggregates: [SearchableFlightAggregationInput]) {
        searchFlights(
          filter: $filter
          sort: $sort
          limit: $limit
          nextToken: $nextToken
          from: $from
          aggregates: $aggregates
        ) {
          __typename
          items {
            __typename
            id
            code
            name
            company
            duration
            origin
            destination
            price
            total_seats
            available_seats
            bookings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            username
          }
          nextToken
          total
          aggregateItems {
            __typename
            name
            result {
              __typename
              ... on SearchableAggregateScalarResult {
                value
              }
              ... on SearchableAggregateBucketResult {
                buckets {
                  __typename
                  key
                  doc_count
                }
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (from) {
      gqlAPIServiceArguments.from = from;
    }
    if (aggregates) {
      gqlAPIServiceArguments.aggregates = aggregates;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchFlightsQuery>response.data.searchFlights;
  }
  async GetBooking(id: string): Promise<GetBookingQuery> {
    const statement = `query GetBooking($id: ID!) {
        getBooking(id: $id) {
          __typename
          id
          departure_time
          seats
          flight {
            __typename
            id
            code
            name
            company
            duration
            origin
            destination
            price
            total_seats
            available_seats
            bookings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            username
          }
          createdAt
          updatedAt
          flightBookingsId
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBookingQuery>response.data.getBooking;
  }
  async ListBookings(
    filter?: ModelBookingFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBookingsQuery> {
    const statement = `query ListBookings($filter: ModelBookingFilterInput, $limit: Int, $nextToken: String) {
        listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            departure_time
            seats
            flight {
              __typename
              id
              code
              name
              company
              duration
              origin
              destination
              price
              total_seats
              available_seats
              createdAt
              updatedAt
              username
            }
            createdAt
            updatedAt
            flightBookingsId
            username
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBookingsQuery>response.data.listBookings;
  }
  OnCreateFlightListener(
    filter?: ModelSubscriptionFlightFilterInput,
    username?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFlight">>
  > {
    const statement = `subscription OnCreateFlight($filter: ModelSubscriptionFlightFilterInput, $username: String) {
        onCreateFlight(filter: $filter, username: $username) {
          __typename
          id
          code
          name
          company
          duration
          origin
          destination
          price
          total_seats
          available_seats
          bookings {
            __typename
            items {
              __typename
              id
              departure_time
              seats
              createdAt
              updatedAt
              flightBookingsId
              username
            }
            nextToken
          }
          createdAt
          updatedAt
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (username) {
      gqlAPIServiceArguments.username = username;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFlight">>
    >;
  }

  OnUpdateFlightListener(
    filter?: ModelSubscriptionFlightFilterInput,
    username?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFlight">>
  > {
    const statement = `subscription OnUpdateFlight($filter: ModelSubscriptionFlightFilterInput, $username: String) {
        onUpdateFlight(filter: $filter, username: $username) {
          __typename
          id
          code
          name
          company
          duration
          origin
          destination
          price
          total_seats
          available_seats
          bookings {
            __typename
            items {
              __typename
              id
              departure_time
              seats
              createdAt
              updatedAt
              flightBookingsId
              username
            }
            nextToken
          }
          createdAt
          updatedAt
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (username) {
      gqlAPIServiceArguments.username = username;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFlight">>
    >;
  }

  OnDeleteFlightListener(
    filter?: ModelSubscriptionFlightFilterInput,
    username?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFlight">>
  > {
    const statement = `subscription OnDeleteFlight($filter: ModelSubscriptionFlightFilterInput, $username: String) {
        onDeleteFlight(filter: $filter, username: $username) {
          __typename
          id
          code
          name
          company
          duration
          origin
          destination
          price
          total_seats
          available_seats
          bookings {
            __typename
            items {
              __typename
              id
              departure_time
              seats
              createdAt
              updatedAt
              flightBookingsId
              username
            }
            nextToken
          }
          createdAt
          updatedAt
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (username) {
      gqlAPIServiceArguments.username = username;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFlight">>
    >;
  }

  OnCreateBookingListener(
    filter?: ModelSubscriptionBookingFilterInput,
    username?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBooking">>
  > {
    const statement = `subscription OnCreateBooking($filter: ModelSubscriptionBookingFilterInput, $username: String) {
        onCreateBooking(filter: $filter, username: $username) {
          __typename
          id
          departure_time
          seats
          flight {
            __typename
            id
            code
            name
            company
            duration
            origin
            destination
            price
            total_seats
            available_seats
            bookings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            username
          }
          createdAt
          updatedAt
          flightBookingsId
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (username) {
      gqlAPIServiceArguments.username = username;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBooking">>
    >;
  }

  OnUpdateBookingListener(
    filter?: ModelSubscriptionBookingFilterInput,
    username?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBooking">>
  > {
    const statement = `subscription OnUpdateBooking($filter: ModelSubscriptionBookingFilterInput, $username: String) {
        onUpdateBooking(filter: $filter, username: $username) {
          __typename
          id
          departure_time
          seats
          flight {
            __typename
            id
            code
            name
            company
            duration
            origin
            destination
            price
            total_seats
            available_seats
            bookings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            username
          }
          createdAt
          updatedAt
          flightBookingsId
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (username) {
      gqlAPIServiceArguments.username = username;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBooking">>
    >;
  }

  OnDeleteBookingListener(
    filter?: ModelSubscriptionBookingFilterInput,
    username?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBooking">>
  > {
    const statement = `subscription OnDeleteBooking($filter: ModelSubscriptionBookingFilterInput, $username: String) {
        onDeleteBooking(filter: $filter, username: $username) {
          __typename
          id
          departure_time
          seats
          flight {
            __typename
            id
            code
            name
            company
            duration
            origin
            destination
            price
            total_seats
            available_seats
            bookings {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            username
          }
          createdAt
          updatedAt
          flightBookingsId
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (username) {
      gqlAPIServiceArguments.username = username;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBooking">>
    >;
  }
}
