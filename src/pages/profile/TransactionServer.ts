import Requesthandler from '../../services/Requesthandler';



export default class TransactionService extends Requesthandler {
  private baseUrl = '/info';

  async getErro() {
    const res = await this.sendSecureRequest('GET', this.baseUrl+"/erro");
    return res;
  }

  async getInfo() {
    const res = await this.sendSecureRequest('GET', this.baseUrl);
    return res;
  }

}
