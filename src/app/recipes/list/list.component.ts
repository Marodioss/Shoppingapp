import { Component, OnInit } from '@angular/core';
import { RecipeModule } from '../recipe.module';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  recipe : RecipeModule[] = [
    new RecipeModule('Tacos', 'Tacos are great', 'https://www.thewholesomedish.com/wp-content/uploads/2019/06/THE-BEST-CLASSIC-TACOS-600X900.jpg'),
  ] ;
  constructor() { }

  ngOnInit(): void {
  }

}
