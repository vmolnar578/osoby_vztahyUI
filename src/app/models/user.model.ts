export class User {
  userName: string;
  id: number;

  constructor(user: User) {
    this.id = user.id;
    this.userName = user.userName;
  }
}
