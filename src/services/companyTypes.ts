import { AxiosRequestConfig } from "axios";
import { Data, Type_Res, Type_Req ,Company_ById,Delete_Company_Type } from "../model/companyType";
import ApiService from "../utils/api-services";

class CompanyTypeService extends ApiService {
  constructor(config?: AxiosRequestConfig) {
    super({ baseURL: `${process.env.REACT_APP_BASE_URL}`, ...config });
  }


  public getAllType = async (page:number,search:string,config: any): Promise<any>  => {

    const result: Type_Res = await this.get(`admin/company-type?page=${page}&search=${search}`, config);
    if (result.status) {
    
      return result;
    } else {
      throw new Error(result.message);
    }
  };
  public getAllTypeWithOutPationation = async (config: any): Promise<any>  => {

    const result: Type_Res = await this.get(`admin/company-type`, config);
    if (result.status) {
    
      return result;
    } else {
      throw new Error(result.message);
    }
  };
  public getTypeById = async ( id:number,config: any): Promise<Data> => {

    const result: Company_ById = await this.get(`admin/company-type/${id}`, config);
    if (result.status) {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  };


  public addNewType = async (data : {data:Type_Req , config: any}): Promise<Data> => {

    const result: Company_ById = await this.post("admin/company-type",data.data, data.config);
    if (result.status) {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  };
  public updateType = async (data : {data:Type_Req,id:number , config: any}): Promise<Data> => {

    const result: Company_ById = await this.post(`admin/company-type/${data.id}`,data.data, data.config);
    if (result.status) {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  };

  public deleteType = async ( data:{id:number,config: any}): Promise<string> => {

    const result: Delete_Company_Type = await this.delete(`admin/company-type/${data.id}`, data.config);
    if (result.status) {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  };
}

export const companyTypeServices = new CompanyTypeService();
