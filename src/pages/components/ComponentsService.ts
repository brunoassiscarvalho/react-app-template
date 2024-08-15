import Requesthandler from '../../services/Requesthandler';

import { IComponents } from '@codeless-app/interfaces';



export default class ComponentService extends Requesthandler {
  private baseUrl = '/v1/component';

  async getComponent(): Promise<IComponents>  {
    const res = await this.sendRequest('GET', this.baseUrl);
    return res;
  }

  async getComponentById(id:string) {
    const res = await this.sendRequest('GET', `${this.baseUrl}/${id}`);
    return res;
  }


  async createComponent(data:any) {
    const res = await this.sendRequest('POST', this.baseUrl, data);
    return res;
  }


  async updateComponent(data:any) {
    const res = await this.sendRequest('PUT', this.baseUrl, data);
    return res;
  }
  
}
