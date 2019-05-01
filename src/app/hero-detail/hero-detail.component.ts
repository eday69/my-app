import { Component, OnInit, Input, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from '../hero.service';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  template: `
  <a (click)='toggleInfo()' class="module">
    <div id="hero{{ hero.id }}">
      <img class="{{ imageClass }}" src="assets/{{ hero.image }}" />
      <div class="heroInfo" *ngIf="!showImage">
        <h2>{{ hero.name | uppercase}}</h2>
        <span class="heroPlanet">Planet: {{ hero.planet }}</span><br/>
        <span class="heroDescription">{{ hero.description }}</span>
      </div>
    </div>
  </a>
  `,
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  @Input() showImage: boolean;
  @Input() imageClass: string;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.imageClass = this.getImageClass(this.showImage);
    console.log('Ini', this.imageClass);
  }

  getImageClass(imageFlag): string {
    return (imageFlag ? "imageShow": "imageHide")
  }

  toggleInfo(): void {
    console.log('Toggled', this.imageClass);
    this.showImage = !this.showImage;
    this.imageClass = this.getImageClass(this.showImage);
    console.log('Toggled', this.imageClass);
  }
  // getHero(): void {
  //   // const id = +this.route.snapshot.paramMap.get('id');
  //   const id = this.hero.id;
  //   this.heroService.getHero(id)
  //     .subscribe(hero => this.hero = hero)
  // }

}
