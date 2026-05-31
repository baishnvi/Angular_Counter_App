import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { ProfileComponent } from '../profile/profile';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Login, Signup, ProfileComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  display = true;
  toggleDiv = true;

  hide() {
    this.display = false;
  }

  show() {
    this.display = true;
  }

  toggle() {
    this.display = !this.display;
  }

  toggleTwo() {
    this.toggleDiv = !this.toggleDiv;
  }
  color=2
  handleColor(val:number){
    this.color=val
  }
  handleInput(event:Event){
    console.log(parseInt((event.target as HTMLInputElement).value));
    this.color=parseInt((event.target as HTMLInputElement).value)
  }

  users=["ankit","baishnvi","pankaj","kritika"];
  students=[
    {name:"ankit", age:20, email:"ankit@etest.com"},
    {name:"baishnvi", age:22, email:"baishnvi@etest.com"},
    {name:"pankaj", age:21, email:"pankaj@etest.com"},
    {name:"kritika", age:19, email:"kritika@etest.com"},
  ]
  getName(name:string){
    alert(name);
  }
}