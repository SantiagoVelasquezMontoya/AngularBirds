export interface IBirdModel {
  id?: number;
  commonName: string;
  scientificName: string;
  countriesId?: number[] | null;
}
