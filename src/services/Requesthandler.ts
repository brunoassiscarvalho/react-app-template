import axios, { AxiosRequestConfig, AxiosRequestHeaders, Method } from 'axios';
import { getToken } from '../utils/Api';
import { urlApi } from '../utils/Constants';
import errorHandler from './ErrorHandler';

axios.defaults.baseURL = urlApi;
// axios.defaults.timeout = 10000;
export default class Service {
  public async requestBasic(method: Method, url: string, data?: any) {
    const headers: any = {};
    return await this.executeRequest(url, this.objectRequest(method, data, headers));
  }

  public async sendSecureRequest(method: Method, url: string, params?: any): Promise<any> {
    if (params?.password && params?.email) {
      const { email, password, ...rest } = params;
      return await this.requestAuthentication(method, url, email, password, rest);
    } else if (getToken()) {
      return await this.requestSecure(method, url, params);
    } else {
      return await this.requestBasic(method, url, params);
    }
  }
  private objectRequest(method: Method, data: any, headers: AxiosRequestHeaders): AxiosRequestConfig {
    const values: AxiosRequestConfig = {
      method: method,
      headers,
    };
    if (method.toUpperCase() === 'GET') return { ...values, ...(!!data && { params: data }) };
    return { ...values, ...(!!data && { data: data }) };
  }
  private async requestSecure(method: Method, url: string, data?: any) {
    return await this.requestServer(method, url, data, 'Bearer');
  }

  private async requestAuthentication(method: Method, url: string, email: string, password: string, data: any) {
    const XFactor = window.btoa(`${email}:${password}`);
    const token = `Bearer ${getToken()}`;
    const headers: any = {
      'x-factor': `Basic ${XFactor}`,
      ...(token && { Authorization: token }),
    };
    return await this.executeRequest(url, this.objectRequest(method, data, headers));
  }
  private async requestServer(method: Method, url: string, data?: any, tokenType = 'Bearer') {
    const headers: any = {
      Authorization: `${tokenType} ${getToken()}`,
    };
    return await this.executeRequest(url, this.objectRequest(method, data, headers));
  }

  private async executeRequest(url: string, data: AxiosRequestConfig): Promise<any> {
    try {
      const resp = await axios(url, data);
      return resp.data;
    } catch (error: any) {
      errorHandler(error);
    }
  }
}
