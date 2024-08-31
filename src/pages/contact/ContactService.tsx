import { IContact } from '@mern-monorepo/monorepo-interface';
import Requesthandler from '../../services/Requesthandler';



export default class ContactService extends Requesthandler {
  private baseUrl = '/v1/contact';

  async getContacts(): Promise<IContact[]> {
    const res = await this.sendRequest('GET', this.baseUrl);
    return res;
  }

  async getContactById(id:string): Promise<IContact>  {
    const res = await this.sendRequest('GET', `${this.baseUrl}/${id}`);
    return res;
  }


  async createContact(data:any) {
    const res = await this.sendRequest('POST', this.baseUrl, data);
    return res;
  }


  async updateContact(data:any) {
    const res = await this.sendRequest('PUT', this.baseUrl, data);
    return res;
  }
  

  async deleteContact(data:any) {
    const res = await this.sendRequest('DELETE', this.baseUrl, data);
    return res;
  }
}
