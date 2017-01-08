import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe: Recipe = new Recipe("Dummy", "Dummy", "http://vignette1.wikia.nocookie.net/harvestmoondscute/images/a/a4/Cow.jpg/revision/latest?cb=20120526004550");
  
  constructor() { }

  ngOnInit() {
  }

}
