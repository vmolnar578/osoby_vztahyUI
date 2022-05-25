export class Parent {
  firstName: string;
  lastName: string;
  id: number;
  dateOfBirth: string;
  gender: string;
  phoneNumber: string;
  image: string;
  childId: number;

  constructor(parent: Parent) {
    this.firstName = parent.firstName;
    this.lastName = parent.lastName;
    this.dateOfBirth = parent.dateOfBirth;
    this.id = parent.id;
    this.gender = parent.gender;
    this.phoneNumber = parent.phoneNumber;
    this.image = parent.image;
    this.childId = parent.childId;
  }
}
