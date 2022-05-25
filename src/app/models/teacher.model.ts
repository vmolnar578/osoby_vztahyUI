export class Teacher {
  firstName: string;
  lastName: string;
  id: number;
  dateOfBirth: string;
  gender: string;
  phoneNumber: string;
  lunchId: number;
  image: string;

  constructor(teacher: Teacher) {
    this.firstName = teacher.firstName;
    this.lastName = teacher.lastName;
    this.dateOfBirth = teacher.dateOfBirth;
    this.id = teacher.id;
    this.gender = teacher.gender;
    this.phoneNumber = teacher.phoneNumber;
    this.lunchId = teacher.lunchId;
    this.image = teacher.image;
  }
}
