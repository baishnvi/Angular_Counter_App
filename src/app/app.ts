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
  count = 0
  handleCounter(val:string){
    if(val =='minus'){
      this.count = this.count - 1
    }else if(val == 'plus'){
      this.count = this.count+1
    }
    else{
      this.count=0
    }
  }
}

