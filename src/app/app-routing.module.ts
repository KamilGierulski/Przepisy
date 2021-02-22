import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipiesComponent } from "./recipies/recipies.component";
import { RecipiesCreatedComponent } from "./recipies/recipies-created/recipies-created.component";
import {MainviewComponent} from "./mainview/mainview.component"

const routes: Routes = [
  {
    path: "",
    component: MainviewComponent,
  },
  {
    path: "glowna",
    component: MainviewComponent,
  },
  {
    path: "przepisy",
    component: RecipiesComponent,
  },
  { path: "inneprzepisy", component: RecipiesCreatedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
