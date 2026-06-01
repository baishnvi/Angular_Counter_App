import { Component, signal, effect, computed } from '@angular/core';
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

  // ---------------- BASIC SIGNALS ----------------
  count = signal(10);

  updateValue() {
    this.count.set(this.count() + 1);
  }

  // ---------------- COMPUTED SIGNALS ----------------
  t = signal(10);
  y = signal(20);

  z = computed(() => this.t() + this.y());

  showValue() {
    console.log(this.z());
    this.t.set(1200);
    console.log(this.z());
  }

  updateT() {
    this.t.set(200);
  }

  // ---------------- EFFECT DEMO ----------------
  userName = signal('juhi');

  displayHeading = signal(false);

  constructor() {
    effect(() => {
      if (this.count() === 2) {
        this.displayHeading.set(true);

        setTimeout(() => {
          this.displayHeading.set(false);
        }, 2000);
      } else {
        this.displayHeading.set(false);
      }

      console.log('Count changed:', this.count());
    });
  }

  toggleValue() {
    this.count.set(this.count() + 1);
  }

 users=['anu','rima','siya','ram','rohan']
 // users=[]
}