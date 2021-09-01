import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { Heroes } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  
  public heroes = Heroes;

  constructor() { }

  ngOnInit(): void {
  }

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

}
