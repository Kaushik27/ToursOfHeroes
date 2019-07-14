import { Component, OnInit } from '@angular/core';

import { Hero } from '../heroes/hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // heroes = HEROES;
  heroes: Hero[];
  // just tellng the type selectedHero, not mandatory
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
    console.log("inside constructor", heroService);
  }

  ngOnInit() {
    this.getHeroes();
    console.log("inside ngOnInit");
  }

  // again just tellng the type selectedHero, not mandatory
  // will work with just hero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
