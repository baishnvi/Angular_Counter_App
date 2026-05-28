import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { ProfileComponent } from '../profile/profile';

@Component({
  selector: 'app-root',
  imports: [Login,Signup,ProfileComponent,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

 handleEvent(event: any) {
  console.log('Event Type:', event.type);

  // Popup notification
  alert(`Event Triggered: ${event.type}`);

  }

  name=""
  displayName="";
  email="";
  getName(event:Event){
    this.name=(event.target as HTMLInputElement).value
  }
  showName(){
    this.displayName=this.name;
  }
  setName(){
    this.name="Baishnvi"
  }
   getEmail(val:string){
    console.log(val);
    this.email=val;
   }
   setEmail(){
    this.email="default@test.com"
   }
}