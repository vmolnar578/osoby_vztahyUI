export class Request {
  userName: string;
  userPassword: string;

  constructor(request: Request) {
    this.userName = request.userName;
    this.userPassword = request.userPassword;
  }
}
