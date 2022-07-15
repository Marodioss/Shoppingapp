import { Component, OnInit } from '@angular/core';
import { IngredinetModule } from '../shared/ingredinet.module';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients : IngredinetModule[] =[
    new IngredinetModule('Apples', 5),
    new IngredinetModule('Tomatoes', 10),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
