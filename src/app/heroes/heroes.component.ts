import { Component, OnInit } from '@angular/core';

import { Hero } from '../heroes/hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';

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

  // constructor(private heroService: HeroService) {
  //   console.log("inside constructor", heroService);
  // }

  constructor(private heroService: HeroService) { }
  

  ngOnInit() {
    this.getHeroes();
    console.log("inside ngOnInit");
  }

  // again just tellng the type selectedHero, not mandatory
  // will work with just hero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //     .subscribe(heroes => this.heroes = heroes);
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
