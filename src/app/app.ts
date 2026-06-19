import { Component, signal, effect, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { ProfileComponent } from '../profile/profile';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Login, Signup,NgIf,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault,ProfileComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  show= true;
  
  block=0
  updateBlock(){
    this.block++;
  }

  students= ["ruhi","goswami","singh","vinod"];

  studentsData=[
    {
      name:'radhika',
      age:33,
      email:'radhika@example.com'
    },
    {
      name:'sneha',
      age:22,
      email:'sneha@email.com'
    }
  ]

  color="black";
  changeColor(color:string){
    this.color=color
  }
}