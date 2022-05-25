export class Request {
  username: string;
  passwordHash: string;

  constructor(request: Request) {
    this.username = request.username;
    this.passwordHash = request.passwordHash;
  }
}
