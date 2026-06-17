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
 task="";
 taskList:{id:number,task:string}[]=[];
 
 addTask(){
  this.taskList.push({id:this.taskList.length+1,task:this.task})
  this.task=''
  console.log(this.taskList);

 }

 deleteTask(taskId: number){
  this.taskList=this.taskList.filter((item)=>item.id!=taskId);
 }
}