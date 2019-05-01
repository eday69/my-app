import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { 
        id: 1, 
        name: 'Thanos', 
        planet: 'Titan',
        description: 'Using the power of the Infinity Stones, Thanos believes he can ultimately save the universe by wiping out half of its population.',
        image: 'avengers-thanos_5_orig.jpg'
      },
      { 
        id: 11, 
        name: 'Thor', 
        planet: 'Asgard',
        description: 'Thor Odinson wields the power of the ancient Asgardians to fight evil throughout the Nine Realms and beyond',
        image: 'avengers-thor_10_orig.jpg'
      },
      { 
        id: 12, 
        name: 'Groot', 
        planet: 'Floral Colossus',
        description: 'This tree-like being branched out of his comfort zone to help the Guardians of the Galaxy keep the people of the universe safe',
        image: 'avengers-groot_orig.jpg' },
      { 
        id: 13, 
        name: 'Rocket', 
        planet: 'Galacian Wall',
        description: 'Ain’t no thing like Rocket, ‘cept Rocket. He lives for the simple things, including collecting valuable bounty alongside his friend and partner, Groot. Quick to train a weapon on anyone who offends him, he’s far more formidable than he appears',
        image: 'avengers-rocket_5_orig.jpg' 
      },
      { 
        id: 14, 
        name: 'Spider Man', 
        planet: 'Earth',
        description: 'With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man',
        image: 'avengers-spider-man_3_orig.jpg'
      },
      { 
        id: 15, 
        name: 'Black Widow', 
        planet: 'Earth',
        description: 'Trusted by some and feared by most, the Black Widow strives to make up for the bad she had done in the past by helping the world, even if that means getting her hands dirty in the process',
        image: 'avengers-black-widow_5_orig.jpg' 
      },
      { 
        id: 16, 
        name: 'Star Lord', 
        planet: 'Ego/Earth',
        description: 'Would-be thief Peter Quill journeys through space as Star-Lord, the leader of the Guardians of the Galaxy',
        image: 'avengers-star-lord_1_orig.jpg'
      },
      { 
        id: 17, 
        name: 'Captain America', 
        planet: 'Earth',
        description: 'America’s World War II Super-Soldier continues his fight in the present as an Avenger and untiring sentinel of liberty',
        image: 'avengers-captain-america_13_orig.jpg' 
      },
      { 
        id: 18, 
        name: 'Hulk', 
        planet: 'Earth',
        description: 'Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk',
        image: 'avengers-hulk_6_orig.jpg' 
      },
      { 
        id: 19, 
        name: 'Iron Man', 
        planet: 'Earth',
        description: 'Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.', 
        image: 'avengers-iron-man_14_orig.jpg' 
      },

      { 
        id: 20, 
        name: 'Ant Man', 
        planet: 'Earth',
        description: 'Ex-con Scott Lang uses high-tech equipment to shrink down to insect-size and fight injustice as Ant-Man',
        image: 'antman.jpeg' 
      },
      { 
        id: 21, 
        name: 'Captain Marvel', 
        planet: 'Hala',
        description: 'Near death, Carol Danvers was transformed into a powerful warrior for the Kree. Now, returning to Earth years later, she must remember her past in order to to prevent a full invasion by shapeshifting aliens, the Skrulls',
        image: 'marvel.jpg' 
      },
      { 
        id: 22, 
        name: 'Loki', 
        planet: 'Jotunheim',
        description: 'Loki, Prince of Asgard, Odinson, rightful heir of Jotunheim, and God of Mischief, is burdened with glorious purpose. His desire to be a king drives him to sow chaos in Asgard. In his lust for power, he extends his reach to Earth',
        image: 'loki.jpg' 
      },
      { 
        id: 23, 
        name: 'Hawkeye', 
        planet: 'Earth',
        description: 'An expert marksman and fighter, Clint Barton puts his talents to good use by working for S.H.I.E.L.D. as a special agent. The archer known as Hawkeye also boasts a strong moral compass that at times leads him astray from his direct orders',
        image: 'hawkeye.jpeg' 
      },
      { 
        id: 24, 
        name: 'Dr Strange', 
        planet: 'Earth',
        description: 'Once a highly successful, yet notably egotistical, surgeon, Doctor Stephen Strange endured a terrible accident that led him to evolve in ways he could have never foreseen',
        image: 'strange.png' 
      },
      { 
        id: 25, 
        name: 'Bucky', 
        planet: 'Earth',
        description: 'James Buchanan “Bucky” Barnes enlists to fight in World War II, but eventually literally falls in battle. Unfortunately, the evil Arnim Zola recovers him and erases his memory, turning him into a highly-trained assassin called the Winter Soldier',
        image: 'bucky.jpg' 
      },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}