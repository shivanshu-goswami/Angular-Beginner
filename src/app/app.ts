import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('angular-beginner');
  // name="shivanshu"
  // age=20

  // updateName(){
  //   this.name="Ansh"
  // }
  // getCount(a:number,b:number){
  //   return a+b;
  // }
  callMe(){
    alert("hey there, caught you")
  }

  count=0;
  counter(action:string){
    if(action==="plus"){
      this.count++;
    }else{
      this.count--;
    }
  }

}
