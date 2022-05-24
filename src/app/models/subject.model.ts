export class Subject {
  id: number;
  grade: number;
  title: string;

  constructor(subject: Subject) {
    this.id = subject.id;
    this.grade = subject.grade;
    this.title = subject.title;
  }
}
