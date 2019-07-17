import { Component, OnInit, Input } from '@angular/core';
// The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent
import { ActivatedRoute } from '@angular/router';
// The location is an Angular service for interacting with the browser
import { Location } from '@angular/common';
import { HeroService }  from '../hero.service';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
   this.heroService.updateHero(this.hero)
     .subscribe(() => this.goBack());
 }
}
