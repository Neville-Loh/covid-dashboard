export interface GlobalData{
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
}
export interface CountryData{
  Country: String;
  CountryCode: String;
  Slug: String;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number
  TotalDeaths: number
  NewRecovered: number;
  TotalRecovered: number;
  Date: String;
}
export interface IState{
  Global: GlobalData;
  Countries: CountryData[];
}
