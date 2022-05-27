import Service from '../../services/Service';

import {IUserRegister} from '../../interfaces/User';

export default class UserService extends Service {
  private baseUrl = '/user';

  async createUser(params: IUserRegister) {
    console.log({ params });
    const res = await this.sendRequest('POST', this.baseUrl, params);
    return res;
  }
}
