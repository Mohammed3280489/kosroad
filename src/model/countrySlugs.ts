export interface Slug_Data {
    iso2:string,
    iso3:String,
    country:string,
    cities:string[]
}
export interface Slug_Res {
  error :string,
  msg :string,
  data:Slug_Data[]
}