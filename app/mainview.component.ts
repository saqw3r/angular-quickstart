import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'mainview',
  styleUrls: ['../heroes.css'] ,
  templateUrl: 'mainview.template.html',
  providers: [HeroService]
})

export class MainViewComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
	  this.selectedHero = hero;
	}
}