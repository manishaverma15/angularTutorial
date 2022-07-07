import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
  
export class HeroService {
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  
  getHero(id: number): Observable<Hero> {
    const hero: Hero = HEROES.find(t => id === t.id)!;
    this.messageService.add(`Fetched Hero: Hero fetched by id: ${id}`);
    return of(hero);
  }
}
