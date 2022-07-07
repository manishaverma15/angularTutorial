import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = 'Before LogIn you firstly you have to Regiater';

  constructor(private userService: UserService, private route: Router, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.userService.logIn(this.email, this.password)) {
      this.route.navigate(['/dashboard']);
    }
    else {
      this.messageService.add(this.errorMessage);
    }

  }
}
