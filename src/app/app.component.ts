import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[RecipeService]
})
export class AppComponent {
  title = 'Przepisy';
  router: string;
  constructor(private _router: Router){

    this.router = _router.url;
}

}
