import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { FormsModule } from '@angular/forms';
import { RecipiesCreatedComponent } from './recipies/recipies-created/recipies-created.component';
import { MainviewComponent } from './mainview/mainview.component';
@NgModule({
  declarations: [
    AppComponent,
    RecipiesComponent,
    RecipiesCreatedComponent,
    MainviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
