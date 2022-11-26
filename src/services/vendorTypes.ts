import { AxiosRequestConfig } from "axios";
import { DataVendor, Type_Res, Type_Req ,Delete_Vendor_Type ,Vendor_ById} from "../model/vendorType";
import ApiService from "../utils/api-services";

class VendorTypeService extends ApiService {
  constructor(config?: AxiosRequestConfig) {
    super({ baseURL: `${process.env.REACT_APP_BASE_URL}`, ...config });
  }


  public getAllType = async (page:number, search:string,config: any): Promise<Type_Res> => {

    const result: Type_Res = await this.get(`admin/vendor-types?page=${page}&search=${search}`, config);
    if (result.status) {
      
      return result;
    } else {
      throw new Error(result.message);
    }
  };
  public getAllTypeWithOutPationation = async (config: any): Promise<Type_Res> => {

    const result: Type_Res = await this.get(`admin/vendor-types`, config);
    if (result.status) {
      
      return result;
    } else {
      throw new Error(result.message);
    }
  };
  
  public getTypeById = async ( id:number,config: any): Promise<DataVendor> => {

    const result: Vendor_ById = await this.get(`admin/vendor-types/${id}`, config);
    if (result.status) {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  };
  public updateType = async (data : {data:Type_Req,id:number , config: any}): Promise<DataVendor> => {

    const result: Vendor_ById = await this.post(`admin/vendor-types/${data.id}`,data.data, data.config);
    if (result.status) {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  };

  public addNewType = async (data : {data:Type_Req , config: any}): Promise<DataVendor> => {

    const result: Vendor_ById = await this.post("admin/vendor-types",data.data, data.config);
    if (result.status) {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  };

  public deleteType = async ( data:{id:number,config: any}): Promise<string> => {

    const result: Delete_Vendor_Type = await this.delete(`admin/vendor-types/${data.id}`, data.config);
    if (result.status) {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  };
}

export const vendorTypeServices = new VendorTypeService();
