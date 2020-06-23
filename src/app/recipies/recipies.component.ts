import { Component, OnInit, Input, EventEmitter } from "@angular/core";
import { NgForm, FormGroup } from "@angular/forms";
import { RecipeService } from "../recipe.service";
import { Recipe } from "../recipe.model";
@Component({
  selector: "app-recipies",
  templateUrl: "./recipies.component.html",
  styleUrls: ["./recipies.component.css"],
})
export class RecipiesComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {

    if (form.valid) {
      const recipes = new Recipe(
        form.value["name"],
        form.value["description"],
        form.value["steps"],
        form.value["ingredients"]
      );

      this.recipeService.addNewRecipes(recipes);

      form.reset();
    }
  }
}
