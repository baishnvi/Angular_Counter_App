import { Component, signal, effect, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { ProfileComponent } from '../profile/profile';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Login, Signup,FormsModule ,ProfileComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
bgColor = "pink"
fontSize="30"
headingSizeSmall="30px"

zoom=true

updateHeadingSize(){
  this.zoom=!this.zoom
}
}