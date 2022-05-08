import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Watermelon', 25),
    new Ingredient('Red Chilli Pepper', 55),
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ing: Ingredient){
    this.ingredients.push(ing);
  }

}
