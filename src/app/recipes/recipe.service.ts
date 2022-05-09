import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

type NewType = Recipe;

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is test content',
      'https://www.tatvera.com.tr/wp-content/uploads/2021/10/Patlican-Kebabi.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'This is test content2',
      'https://www.tatvera.com.tr/wp-content/uploads/2021/10/Patlican-Kebabi.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'This is test content3',
      'https://www.tatvera.com.tr/wp-content/uploads/2021/10/Patlican-Kebabi.jpg'
    ),
  ];

  getRecipes(){
    return this.recipes.slice();
  }

}
