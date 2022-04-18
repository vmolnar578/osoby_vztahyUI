export class Student {
  id: number;
  grade: number;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  lunchId: number;

  constructor(student: Student) {
    this.id = student.id;
    this.firstName = student.firstName;
    this.lastName = student.lastName;
    this.dateOfBirth = student.dateOfBirth;
    this.gender = student.gender;
    this.grade = student.grade;
    this.lunchId = student.lunchId;
  }
}
