
export interface IUserBasic {
  name: string;
  email: string;
}

export interface IUserLogged extends IUserBasic {
  token: string;
}

export interface IUserSecurity {
  email: string;
  password: string;
}

export interface IUserRegister extends IUserBasic, IUserSecurity {
  cep: number;
  phone: number;  
}

