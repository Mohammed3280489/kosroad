import axios, { AxiosInstance, AxiosRequestConfig } from "axios";


export default class ApiProvider {

  private api: AxiosInstance;
  public constructor(config: any) {
    this.api = axios.create(config);
    this.api.interceptors.request.use((param: AxiosRequestConfig) => ({
      ...param,
      headers: {
        ...param.headers,
         
      },
    }));
  }

  public async request<T>(config: any): Promise<T | any> {
    try {
   
      const response = await this.api.request<any>(config);

      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }
}
