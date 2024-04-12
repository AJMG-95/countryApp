// Generated by https://quicktype.io

export interface Country {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: Status;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: Region;
  subregion?: string;
  languages: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: { [key: string]: number };
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side: Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  XOF?: TartuGecko;
  ALL?: TartuGecko;
  IQD?: TartuGecko;
  ETB?: TartuGecko;
  USD?: TartuGecko;
  CHF?: TartuGecko;
  GIP?: TartuGecko;
  EUR?: TartuGecko;
  XPF?: TartuGecko;
  STN?: TartuGecko;
  QAR?: TartuGecko;
  NOK?: TartuGecko;
  SZL?: TartuGecko;
  ZAR?: TartuGecko;
  CDF?: TartuGecko;
  DOP?: TartuGecko;
  FJD?: TartuGecko;
  SRD?: TartuGecko;
  IDR?: TartuGecko;
  CZK?: TartuGecko;
  SDG?: BAM;
  SYP?: TartuGecko;
  PLN?: TartuGecko;
  NPR?: TartuGecko;
  ERN?: TartuGecko;
  ZMW?: TartuGecko;
  LSL?: TartuGecko;
  XCD?: TartuGecko;
  BIF?: TartuGecko;
  BAM?: BAM;
  LRD?: TartuGecko;
  MNT?: TartuGecko;
  XAF?: TartuGecko;
  THB?: TartuGecko;
  GBP?: TartuGecko;
  SHP?: TartuGecko;
  SSP?: TartuGecko;
  HKD?: TartuGecko;
  CKD?: TartuGecko;
  NZD?: TartuGecko;
  DZD?: TartuGecko;
  BRL?: TartuGecko;
  HTG?: TartuGecko;
  RON?: TartuGecko;
  CUC?: TartuGecko;
  CUP?: TartuGecko;
  PAB?: TartuGecko;
  PEN?: TartuGecko;
  BDT?: TartuGecko;
  ILS?: TartuGecko;
  AWG?: TartuGecko;
  KPW?: TartuGecko;
  BND?: TartuGecko;
  SGD?: TartuGecko;
  GMD?: TartuGecko;
  DKK?: TartuGecko;
  FOK?: TartuGecko;
  YER?: TartuGecko;
  UGX?: TartuGecko;
  UZS?: TartuGecko;
  MAD?: TartuGecko;
  MRU?: TartuGecko;
  PKR?: TartuGecko;
  AUD?: TartuGecko;
  CRC?: TartuGecko;
  FKP?: TartuGecko;
  GHS?: TartuGecko;
  TTD?: TartuGecko;
  IMP?: TartuGecko;
  RSD?: TartuGecko;
  BWP?: TartuGecko;
  TWD?: TartuGecko;
  VUV?: TartuGecko;
  WST?: TartuGecko;
  CAD?: TartuGecko;
  IRR?: TartuGecko;
  ARS?: TartuGecko;
  TRY?: TartuGecko;
  TJS?: TartuGecko;
  SAR?: TartuGecko;
  HNL?: TartuGecko;
  MGA?: TartuGecko;
  KWD?: TartuGecko;
  SCR?: TartuGecko;
  ISK?: TartuGecko;
  KID?: TartuGecko;
  JOD?: TartuGecko;
  RWF?: TartuGecko;
  BGN?: TartuGecko;
  MYR?: TartuGecko;
  AFN?: TartuGecko;
  ZWL?: TartuGecko;
  AOA?: TartuGecko;
  KZT?: TartuGecko;
  CVE?: TartuGecko;
  PHP?: TartuGecko;
  LAK?: TartuGecko;
  COP?: TartuGecko;
  LKR?: TartuGecko;
  VES?: TartuGecko;
  KES?: TartuGecko;
  NIO?: TartuGecko;
  EGP?: TartuGecko;
  BHD?: TartuGecko;
  PYG?: TartuGecko;
  GNF?: TartuGecko;
  TZS?: TartuGecko;
  ANG?: TartuGecko;
  MDL?: TartuGecko;
  VND?: TartuGecko;
  BSD?: TartuGecko;
  HUF?: TartuGecko;
  BMD?: TartuGecko;
  CLP?: TartuGecko;
  SOS?: TartuGecko;
  OMR?: TartuGecko;
  SBD?: TartuGecko;
  BZD?: TartuGecko;
  GTQ?: TartuGecko;
  AED?: TartuGecko;
  JEP?: TartuGecko;
  AZN?: TartuGecko;
  TMT?: TartuGecko;
  MZN?: TartuGecko;
  NGN?: TartuGecko;
  MVR?: TartuGecko;
  TOP?: TartuGecko;
  MMK?: TartuGecko;
  AMD?: TartuGecko;
  TVD?: TartuGecko;
}

export interface TartuGecko {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Saturday = "saturday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}
