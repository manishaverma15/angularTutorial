import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';
import { RegisterResponseInterface } from '../registerResponse';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = ''

  constructor(private userService: UserService, private route: Router, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onSubmitRegisteration() {
    const response: RegisterResponseInterface = this.userService.register(this.name, this.email, this.password)
    if(!response.success) {
      this.messageService.add(response.error as string);
    } else {
      this.route.navigate(['/login']);
    }
  }
}
