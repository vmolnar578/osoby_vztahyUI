export class Student {
  id: number;
  grade: number;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  lunchId: number;
  image: string;
  parent1Id: number;
  parent2Id: number;
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
    this.parent1Id = student.parent1Id;
    this.parent2Id = student.parent2Id;
    this.teacherId = student.teacherId;
  }
}
