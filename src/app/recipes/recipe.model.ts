import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  indexOf(r: Recipe) {
    throw new Error('Method not implemented.');
  }
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
