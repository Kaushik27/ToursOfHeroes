import { Component, OnInit } from '@angular/core';

import { Hero } from '../heroes/hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
  heroes = HEROES;
  // just tellng the type selectedHero, not mandatory
  selectedHero: Hero;
 
  constructor() { 
    console.log("initialization inside constructor");
  }
 
  ngOnInit() {
  }

 // again just tellng the type selectedHero, not mandatory
//  will work with just hero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
