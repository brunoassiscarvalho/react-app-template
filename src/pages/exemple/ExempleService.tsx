import Requesthandler from '../../services/Requesthandler';



export default class ExempleService extends Requesthandler {
  private baseUrl = '/v1/exemple';

  async getExemple() {
    const res = await this.sendRequest('GET', this.baseUrl);
    return res;
  }

  async getExempleById(id:string) {
    const res = await this.sendRequest('GET', `${this.baseUrl}/${id}`);
    return res;
  }


  async createExemple(data:any) {
    const res = await this.sendRequest('POST', this.baseUrl, data);
    return res;
  }


  async updateExemple(data:any) {
    const res = await this.sendRequest('PUT', this.baseUrl, data);
    return res;
  }
  
}
