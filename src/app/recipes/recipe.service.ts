import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";


@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  constructor(private slService: ShoppingListService) {

  }

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is test content',
      'https://www.tatvera.com.tr/wp-content/uploads/2021/10/Patlican-Kebabi.jpg', [new Ingredient('Patlican', 3), new Ingredient('Kofte', 5)]
    ),
    new Recipe(
      'Test Recipe',
      'This is test content2',
      'https://www.tatvera.com.tr/wp-content/uploads/2021/10/Patlican-Kebabi.jpg', [new Ingredient('Patlican', 3), new Ingredient('Kofte', 5)]
    ),
    new Recipe(
      'Test Recipe',
      'This is test content3',
      'https://www.tatvera.com.tr/wp-content/uploads/2021/10/Patlican-Kebabi.jpg', [new Ingredient('Patlican', 3), new Ingredient('Kofte', 5)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
