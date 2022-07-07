import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heros';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private messageService: MessageService) { }

  logIn(email: string, password: string): boolean {
    const user: Hero | undefined = HEROES.find(user => email === user.email && password === user.password);
    if (!user) {
      return false;
    }
    return true;
 }

  // register() {

  // }

}
