export class Parent {
  firstName: string;
  lastName: string;
  id: number;
  dateOfBirth: Date;
  gender: string;
  phoneNumber: number;

  constructor(parent: Parent) {
    this.firstName = parent.firstName;
    this.lastName = parent.lastName;
    this.dateOfBirth = parent.dateOfBirth;
    this.id = parent.id;
    this.gender = parent.gender;
    this.phoneNumber = parent.phoneNumber;
  }
}
