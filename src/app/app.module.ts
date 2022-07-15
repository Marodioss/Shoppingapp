import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ListComponent } from './recipes/list/list.component';
import { ItemComponent } from './recipes/item/item.component';
import { DetailsComponent } from './recipes/details/details.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { EditComponent } from './shopping/edit/edit.component';
import { ShoppingListComponent } from './shopping/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ListComponent,
    ItemComponent,
    DetailsComponent,
    ShoppingComponent,
    EditComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
