import { AxiosRequestConfig } from "axios";
import { Data, Countries_Res, Countries_Req ,CountriesId,Delete_Countries } from "../model/countries";
import ApiService from "../utils/api-services";
import {Slug_Res , Slug_Data} from '../model/countrySlugs'
class CountriesService extends ApiService {
  constructor(config?: AxiosRequestConfig) {
    super({ baseURL: `${process.env.REACT_APP_BASE_URL}`, ...config });
  }


  public getAllCountries = async (page:number,search:string,config: any): Promise<any>  => {

    const result: Countries_Res = await this.get(`admin/countries?page=${page}&search=${search}`, config);
    if (result.status) {
    
      return result;
    } else {
      throw new Error(result.message);
    }
  };
  public getAllCountriesWithOutPationation = async (config: any): Promise<any>  => {

    const result: Countries_Res = await this.get(`admin/countries`, config);
    if (result.status) {
    
      return result;
    } else {
      throw new Error(result.message);
    }
  };
  
  public getAllSlugsCountries = async (): Promise<Slug_Data[]>  => {

    const result: Slug_Res = await this.get(`https://countriesnow.space/api/v0.1/countries`);
    if (!result.error) {
      return result.data;
    } else {
      throw new Error(result.msg);
    }
  };
  
  public getCountriesById = async ( id:number,config: any): Promise<Data> => {

    const result: CountriesId = await this.get(`admin/countries/${id}`, config);
    if (result.status) {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  };


  public addNewCountry = async (data : {data:Countries_Req , config: any}): Promise<Data> => {

    const result: CountriesId = await this.post("admin/countries",data.data, data.config);
    if (result.status) {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  };
  public updateCountry = async (data : {data:Countries_Req,id:number , config: any}): Promise<Data> => {

    const result: CountriesId = await this.post(`admin/countries/${data.id}`,data.data, data.config);
    if (result.status) {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  };

  public deleteCountry = async ( data:{id:number,config: any}): Promise<string> => {

    const result: Delete_Countries = await this.delete(`admin/countries/${data.id}`, data.config);
    if (result.status) {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  };
}

export const countriesServices = new CountriesService();
