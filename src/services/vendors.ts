import { AxiosRequestConfig } from "axios";
import { Data ,Vendor_By_Id, Vendor_Req ,Vendor_Res} from "../model/vendor";
import ApiService from "../utils/api-services";

class VendorService extends ApiService {
  constructor(config?: AxiosRequestConfig) {
    super({ baseURL: `${process.env.REACT_APP_BASE_URL}`, ...config });
  }


  public getAllVendor = async (page:number, search:string,config: any): Promise<Vendor_Res> => {

    const result: Vendor_Res = await this.get(`admin/vendors?page=${page}&search=${search}`, config);
    if (result.status) {
      
      return result;
    } else {
      throw new Error(result.message);
    }
  };
  public getVendorById = async ( id:number,config: any): Promise<Data> => {

    const result: Vendor_By_Id = await this.get(`admin/vendors/${id}`, config);
    if (result.status) {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  };

  public updateVendor = async (data : {data:Vendor_Req,id:number , config: any}): Promise<Data> => {

    const result: Vendor_By_Id = await this.post(`admin/vendors/${data.id}`,data.data, data.config);
    if (result.status) {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  };

  public addNewVendor = async (data : {data:Vendor_Req , config: any}): Promise<Data> => {

    const result: Vendor_By_Id = await this.post("admin/vendors",data.data, data.config);
    if (result.status) {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  };

  public deleteVendor = async ( data:{id:number,config: any}): Promise<string> => {

    const result: Vendor_Res = await this.delete(`admin/vendors/${data.id}`, data.config);
    if (result.status) {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  };
}

export const vendorServices = new VendorService();
