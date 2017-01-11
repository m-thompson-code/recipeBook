import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipe: Recipe = new Recipe("Dummy", "Dummy", "http://vignette1.wikia.nocookie.net/harvestmoondscute/images/a/a4/Cow.jpg/revision/latest?cb=20120526004550", []);
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
