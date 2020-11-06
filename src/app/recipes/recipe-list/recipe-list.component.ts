import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFF6mLtbqmtNg8RW-Wg12ncNb4FN5ZWBAKOw&usqp=CAU'),
    new Recipe('Second Test Recipe ', 'Second test description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFF6mLtbqmtNg8RW-Wg12ncNb4FN5ZWBAKOw&usqp=CAU')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    console.log('a');
    this.recipeWasSelected.emit(recipe);
  }

}
