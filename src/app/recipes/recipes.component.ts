import { Component, OnInit } from '@angular/core';
import { RecipeModule } from './recipe.module';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
