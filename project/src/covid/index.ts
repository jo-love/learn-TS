export interface CountryInfo {
  Country: string;
  CountryCode: string;
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: any;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

interface GlobalInfo {
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}
export interface CovidSummaryResponse {
  Countries: CountryInfo[];
  Date: string;
  Global: GlobalInfo;
  Message: string;
}

export interface CountrySummaryInfo {
  Cases: number;
  City: string;
  CityCode: string;
  Country: string;
  CountryCode: string;
  Date: string;
  Lat: string;
  Lon: string;
  Province: string;
  Status: string;
}

//객체 안에 속성이 배열형태가 아니고 바로 배열로 들어오기 떄문에 interface보다는 type이 적절함
export type CountrySummaryResponse = CountrySummaryInfo[];
