import axios, { AxiosRequestConfig, AxiosRequestHeaders, Method } from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_MY_SERVICE || '';
// axios.defaults.timeout = 10000;
export default class Service {
  private tokenName = process.env.REACT_APP_STORAGE || '';

  async sendRequest(method: Method, url: string, params?: any): Promise<any> {
    if (params?.password && params?.email) {
      const { email, password, ...rest } = params;
      return await this.requestAuthentication(method, url, email, password, rest);
    } else if (sessionStorage.getItem(this.tokenName)) {
      return await this.requestSecure(method, url, params);
    } else {
      return await this.requestBasic(method, url, params);
    }
  }
  private objectRequest(method: Method, data: any, headers: AxiosRequestHeaders): AxiosRequestConfig {
    const values: AxiosRequestConfig = {
      method: method,
      headers
    };
    if (method.toUpperCase() === 'GET')
      return { ...values, ...(!!data && { params: data }) };
    return { ...values, ...(!!data && { data: data }) };
  }
  private async requestSecure(method: Method, url: string, data?: any) {
    return await this.requestServer(method, url, data, 'Bearer');
  }

  private async requestAuthentication(method: Method, url: string, email: string, password: string, data: any) {
    const XFactor = window.btoa(`${email}:${password}`);
    const token = `Bearer ${sessionStorage.getItem(this.tokenName)}`;
    const headers: any = { 'x-factor': `Basic ${XFactor}`, ...(token && { Authorization: token }) };
    return await this.executeRequest(url, this.objectRequest(method, data, headers));
  }
  private async requestServer(
    method: Method,
    url: string,
    data?: any,
    tokenType = 'Bearer'
  ) {
    const headers: any = { Authorization: `${tokenType} ${sessionStorage.getItem(this.tokenName)}` };
    return await this.executeRequest(url, this.objectRequest(method, data, headers));
  }
  public async requestBasic(method: Method, url: string, data?: any) {
    const headers: any = {};
    return await this.executeRequest(url, this.objectRequest(method, data, headers));
  }
  private async executeRequest(url: string, data: AxiosRequestConfig): Promise<any> {
    try {
      const resp = await axios(url, data);
      return resp.data;
    } catch (error: any) {
      if (error.response?.status === 401) {
        localStorage.clear();
        window.location.assign(window.location.origin);
        throw new Error('Não autorizado!');
      } else if (error.response?.status === 404) {
        throw new Error('Serviço não localizado');
      }
      else {
        throw new Error(error?.response?.data || 'Não foi possivel prosseguir com a solicitação');
      }
    }
  }
}
