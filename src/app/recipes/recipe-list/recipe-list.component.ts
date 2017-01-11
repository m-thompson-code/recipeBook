import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'View tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', []),
    new Recipe('Summer Salad', 'Okayish', 'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg', [])
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipe: Recipe = new Recipe("Dummy", "Dummy", "http://vignette1.wikia.nocookie.net/harvestmoondscute/images/a/a4/Cow.jpg/revision/latest?cb=20120526004550", []);
  
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
      this.recipeSelected.emit(recipe);
  }
}
