import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heros';
import { RegisterResponseInterface } from './registerResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentId:  number = 1;

  constructor() { }

  logIn(email: string, password: string): boolean {
    const user: Hero | undefined = HEROES.find(user => email === user.email && password === user.password);
    if (!user) {
      return false;
    }
    return true;
 }

  register(name: string, email: string, password: string): RegisterResponseInterface  {
    const registerUser: Hero | undefined = HEROES.find(registerUser => email === registerUser.email );
    if(registerUser) {
      return {
        success: false,
        error: 'email already taken'
      }
    }
    
    if(password.length < 3 ) {
      return {
        success: false,
        error: 'password is too short'
      }
    }
    
    HEROES.push({id: ++this.currentId , name: name, email: email, password: password});

    return {
      success: true
    }
  }

}
