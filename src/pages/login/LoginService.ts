import Service from '../../services/Service';


interface ILoginService {
  email: string;
  password: string;
}

export default class LoginService extends Service {
  async login(params: ILoginService) {
    console.log({params});
    const res = await this.sendRequest('POST', '/login', params);
    return res;
  }
}