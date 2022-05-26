export default interface IUser {
  name: string;
  email: string;
};

export interface IUserLogged extends IUser {
  token: string;
}
