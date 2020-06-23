import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor() { }

  private _recipes: Recipe[] = [];

  addNewRecipes(newRecipe: Recipe ){
    this._recipes.push(newRecipe);
  }

  getRecipes() {
    return this._recipes;
  }
}
