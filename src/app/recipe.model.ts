export class Recipe {
  public name: string;
  public description: string;
  public steps: string;
  public ingredients: string;

  constructor(
    name: string,
    description: string,
    steps: string,
    ingredients: string
  ) {
    this.name = name;
    this.description = description;
    this.steps = steps;
    this.ingredients = ingredients;
  }
}
