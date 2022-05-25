export class Student {
  id: number;
  grade: number;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  lunchId: number;
  image: string;
  parentOneId: number;
  parentTwoId: number;
  teacherId: number;

  constructor(student: Student) {
    this.id = student.id;
    this.firstName = student.firstName;
    this.lastName = student.lastName;
    this.dateOfBirth = student.dateOfBirth;
    this.gender = student.gender;
    this.grade = student.grade;
    this.lunchId = student.lunchId;
    this.image = student.image;
    this.parentOneId = student.parentOneId;
    this.parentTwoId = student.parentTwoId;
    this.teacherId = student.teacherId;
  }
}
