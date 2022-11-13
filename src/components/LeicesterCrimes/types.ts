// @todo for the further development of the application it is necessary to rewrite the types
export interface LeicesterCrimesType {
  category: LeicesterCrimesTypeCategory;
  location_type: LocationType;
  location: Location;
  context: string;
  outcome_status: OutcomeStatus | null;
  persistent_id: string;
  id: number;
  location_subtype: LocationSubtype;
  month: Month;
}

export enum LeicesterCrimesTypeCategory {
  AntiSocialBehaviour = "anti-social-behaviour",
  BicycleTheft = "bicycle-theft",
  Burglary = "burglary",
  CriminalDamageArson = "criminal-damage-arson",
  Drugs = "drugs",
  OtherCrime = "other-crime",
  OtherTheft = "other-theft",
  PossessionOfWeapons = "possession-of-weapons",
  PublicOrder = "public-order",
  Robbery = "robbery",
  Shoplifting = "shoplifting",
  TheftFromThePerson = "theft-from-the-person",
  VehicleCrime = "vehicle-crime",
  ViolentCrime = "violent-crime",
}

export interface Location {
  latitude: string;
  street: Street;
  longitude: string;
}

export interface Street {
  id: number;
  name: string;
}

export enum LocationSubtype {
  Empty = "",
  Station = "STATION",
}

export enum LocationType {
  Btp = "BTP",
  Force = "Force",
}

export enum Month {
  The201910 = "2019-10",
  The201911 = "2019-11",
  The201912 = "2019-12",
  The202001 = "2020-01",
  The202002 = "2020-02",
  The202003 = "2020-03",
  The202004 = "2020-04",
  The202005 = "2020-05",
  The202006 = "2020-06",
  The202007 = "2020-07",
  The202008 = "2020-08",
  The202009 = "2020-09",
  The202010 = "2020-10",
  The202011 = "2020-11",
  The202012 = "2020-12",
  The202101 = "2021-01",
  The202104 = "2021-04",
  The202105 = "2021-05",
  The202106 = "2021-06",
  The202108 = "2021-08",
  The202110 = "2021-10",
}

export interface OutcomeStatus {
  category: OutcomeStatusCategory;
  date: Month;
}

export enum OutcomeStatusCategory {
  ActionToBeTakenByAnotherOrganisation = "Action to be taken by another organisation",
  CourtResultUnavailable = "Court result unavailable",
  FormalActionIsNotInThePublicInterest = "Formal action is not in the public interest",
  FurtherInvestigationIsNotInThePublicInterest = "Further investigation is not in the public interest",
  InvestigationCompleteNoSuspectIdentified = "Investigation complete; no suspect identified",
  LocalResolution = "Local resolution",
  OffenderGivenACaution = "Offender given a caution",
  StatusUpdateUnavailable = "Status update unavailable",
  UnableToProsecuteSuspect = "Unable to prosecute suspect",
}
