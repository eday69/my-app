import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

var heroPointer = 0;
var heroPerRow = 0;
var heroPerCol = 0;
var allHeroes: Hero[] = [];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  heroesTop: Hero[] = [];
  heroesRight: Hero[] = [];
  heroesBottom: Hero[] = [];
  heroesLeft: Hero[] = [];
  badass: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        allHeroes = heroes
      },
      (err) => console.error(err),
      () => this.processHeroes()
      );
    }

  processHeroes(): void {
    var numHeroes = allHeroes.length;
    heroPerRow = Math.round(numHeroes / 4) + 1;
    heroPerCol = Math.round(numHeroes / 4) - 1;

    this.badass = allHeroes.slice(0, 1)

    var heroStart = 1;
    heroPointer = heroPerRow;
    this.heroesTop = allHeroes.slice(heroStart, heroPointer)
    heroStart = heroPointer;

    heroPointer = heroPerRow + heroPerCol;
    this.heroesRight = allHeroes.slice(heroStart, heroPointer)
    heroStart = heroPointer;

    heroPointer = heroStart + heroPerCol;
    this.heroesLeft = allHeroes.slice(heroStart, heroPointer)
    heroStart = heroPointer;

    heroPointer = heroStart + heroPerRow;
    this.heroesBottom = allHeroes.slice(heroStart)
  }
}