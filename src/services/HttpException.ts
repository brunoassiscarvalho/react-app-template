export default class HttpException extends Error {
  message: string;

  info: any;

  constructor(message: string, info?: any) {
    super(message);
    this.message = message;
    this.info = info;
  }
}
