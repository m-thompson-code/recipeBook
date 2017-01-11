//import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient';

//@Injectable()
export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }
  
  getItems() {
    return this.items;
  }
  
  addItems(items: Ingredient[]) {
    // Uses the default push (Array) for every element of items to this.items
    Array.prototype.push.apply(this.items, items);
    //console.log(this.items);
    //console.log(items);
  }
}
