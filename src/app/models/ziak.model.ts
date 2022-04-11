export class Ziak {
  id: number;
  grade: number;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;

  constructor(ziak: Ziak) {
    this.id = ziak.id;
    this.firstName = ziak.firstName;
    this.lastName = ziak.lastName;
    this.dateOfBirth = ziak.dateOfBirth;
    this.gender = ziak.gender;
    this.grade = ziak.grade;
  }
}
