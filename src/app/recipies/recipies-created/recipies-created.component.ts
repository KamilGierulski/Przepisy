import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipies-created',
  templateUrl: './recipies-created.component.html',
  styleUrls: ['./recipies-created.component.css']
})
export class RecipiesCreatedComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
