import { AxiosRequestConfig } from "axios";
import {MemberShip_Res , MemberShip_Req ,Data , MemberShip_By_Id} from "../model/memberShip";
import ApiService from "../utils/api-services";

class MemberShipService extends ApiService {
  constructor(config?: AxiosRequestConfig) {
    super({ baseURL: `${process.env.REACT_APP_BASE_URL}`, ...config });
  }


  public getAllMemberShip = async (page:number,search:string,config: any): Promise<MemberShip_Res> => {

    const result: MemberShip_Res = await this.get(`admin/membership?page=${page}&search=${search}`, config);
    if (result.status) {
      return result;
    } else {
      throw new Error(result.message);
    }
  };

  public getMemberShipById = async ( id:number,config: any): Promise<Data> => {

    const result: MemberShip_By_Id = await this.get(`admin/membership/${id}`, config);
    if (result.status) {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  };

  public addNewMemberShip = async (data : {data:MemberShip_Req , config: any}): Promise<Data> => {

    const result: MemberShip_By_Id = await this.post("admin/membership",data.data, data.config);
    if (result.status) {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  };

  public updateMemberShip = async (data : {data:MemberShip_Req,id:number , config: any}): Promise<Data> => {

    const result: MemberShip_By_Id = await this.post(`admin/membership/${data.id}`,data.data, data.config);
    if (result.status) {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  };

  public deleteMemberShip = async (data:{id:number,config: any}): Promise<string> => {

    const result: MemberShip_Res = await this.delete(`admin/membership/${data.id}`, data.config);
    if (result.status) {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  };
 
}

export const memberShipServices = new MemberShipService();
