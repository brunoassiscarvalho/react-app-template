
import axios, { AxiosRequestConfig, AxiosRequestHeaders, Method } from 'axios';
import { tokenName, urlApi } from '../utils/Constants';

import HttpException  from './HttpException';
axios.defaults.baseURL = urlApi;
axios.defaults.timeout = 10000;

export default class Service {

  protected async requestBasic(method: Method, url: string, data?: any): Promise<any> {
    const headers: any = {};
    return this.executeRequest(url, this.objectRequest(method, data, headers));
  }

  protected async sendRequest(method: Method, url: string, params?: any): Promise<any> {
    if (params?.password && params?.email) {
      return this.requestAuthentication(method, url, params.email, params.password);
    }
    if (sessionStorage.getItem(tokenName)) {
      return this.requestSecure(method, url, params);
    }
    return this.requestBasic(method, url, params);
  }

  private objectRequest(
    method: Method,
    data: any,
    headers: AxiosRequestHeaders
  ): AxiosRequestConfig {
    const values: AxiosRequestConfig = {
      method,
      headers
    };
    if (method.toUpperCase() === 'GET') return { ...values, ...(!!data && { params: data }) };
    return { ...values, ...(!!data && { data }) };
  }

  private async requestSecure(method: Method, url: string, data?: any): Promise<any> {
    return this.requestServer(method, url, data, 'Bearer');
  }

  private async requestAuthentication(
    method: Method,
    url: string,
    email: string,
    password: string
  ): Promise<any> {
    sessionStorage.setItem(tokenName, btoa(`${email}:${password}`));
    return this.requestServer(method, url, null, 'Basic');
  }

  private async requestServer(
    method: Method,
    url: string,
    data?: any,
    tokenType: string = 'Bearer'
  ): Promise<any> {
    const headers: any = {
      Authorization: `${tokenType} ${sessionStorage.getItem(tokenName)}`
    };
    return this.executeRequest(url, this.objectRequest(method, data, headers));
  }

 

  private async executeRequest(url: string, data: AxiosRequestConfig): Promise<any> {
    try {
      const resp = await axios(url, data);
      return resp.data;
    } catch (error: any) {
      if (error.response?.status === 401) {
        localStorage.clear();
        window.location.assign(window.location.origin);
      } else if (error.response?.status === 404) {
        throw new Error('Serviço não localizado');
      } else {
        throw new HttpException(
          error?.response?.data?.message || 'Não foi possivel prosseguir com a solicitação',
          error?.response?.data?.info
        );
      }
    }
  }
}
