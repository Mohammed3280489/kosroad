import { AxiosRequestConfig } from "axios";
import {Login_Req , Login_Res ,User_Data} from '../model/user';
import ApiService from "../utils/api-services";


class LoginService extends ApiService {
  constructor(config?: AxiosRequestConfig) {
    super({ baseURL: `${process.env.REACT_APP_BASE_URL}`, ...config });
  }
  
  public  login = async (body:Login_Req):Promise<User_Data> => {
        const result:Login_Res =  await this.post('admin/login',body);
         if (result.status) {
            return result.data
         }else {
            throw new Error ( result.message);
         }
         
         
  } 
  
}


 

export const loginService = new LoginService();
