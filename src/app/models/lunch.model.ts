export class Lunch {
  id: number;
  mainMeal: string;
  image: string;

  constructor(lunch: Lunch) {
    this.id = lunch.id;
    this.mainMeal = lunch.mainMeal;
    this.image = lunch.image;
  }
}
