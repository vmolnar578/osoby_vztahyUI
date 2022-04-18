export class Teacher {
  firstName: string;
  lastName: string;
  id: number;
  dateOfBirth: Date;
  gender: string;
  phoneNumber: number;
  lunchId: number;

  constructor(teacher: Teacher) {
    this.firstName = teacher.firstName;
    this.lastName = teacher.lastName;
    this.dateOfBirth = teacher.dateOfBirth;
    this.id = teacher.id;
    this.gender = teacher.gender;
    this.phoneNumber = teacher.phoneNumber;
    this.lunchId = teacher.lunchId;
  }
}
