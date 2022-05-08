import {
  Component,
  ContentChild,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
