import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { computeMsgId } from '@angular/compiler';
import { FormsModule } from '@angular/forms';
import { Child } from './child/child';
import { DisplayCount } from './display-count/display-count';
import { ControlCount } from './control-count/control-count';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Profile,FormsModule,Child,DisplayCount,ControlCount],
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
      //this will decrease only if counter is greater than 0
      this.count>0 && this.count--;
    }
    //this.showUserName()
  }

  showUserName(){
    alert("Hey User It's Me")
  }

  handleEvent(eventName:string){
    console.log(eventName);
  }

  //data:any=20
  updateData(val:number){
    //using const and val cause they are declared inside so they are variables of funtion
    //but 'data' is a property of a class thats why not assigned any type
    const num=20
    let age=10
    //this.data=val;
    console.log(this.sum(10,20));
  }
  sum(a:number,b:number):number{
    return a+b;
  }
  HandleEvent(event:PointerEvent | Event | MouseEvent){ //event alone would also work for Mouseenter
    console.log(event);
  }

  btnDisabled=true
  inputReadOnly=false;
  url="https://imgs.search.brave.com/84pnJaO0dfcQdvtkMqxPKJgAArnNZ3sTn4pebU4xIKk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93ZWJ0/YWxpcy5ubC93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wNC93/YXQtaXMtdXJsLmpw/Zw"
  toggle(){
    this.btnDisabled=!this.btnDisabled
  }
 // Data=0;
  Count=signal(0);
  // constructor(){
  //   effect(()=>{
  //     console.log("this is data ",this.data);
  //     console.log("this is count",this.Count())
  //     if(this.Count()==10){
  //       this.Count.set(0);
  //     }
  //   })
  // }
  UpdateData(){
   // this.Data++;
  }
  UpdateCount(){
    this.Count.set(this.Count()+1);
  }

  height=signal(100);
  width=signal(20);
  area=computed(()=>this.height()*this.width())
  // constructor(){
  //   effect(()=>{
  //     console.log("area is : ",this.area())
  //   })
  // }
  updateHeight(){
    this.height.set(this.height()+10)
  }
  

  speed=signal(0);
  fruit=signal('apple');
  color="black"

   constructor(){
    effect(()=>{
      if(this.speed()> 0 && this.speed()<80){
        this.color="green"
      }
      if(this.speed()>=80 && this.speed()<100){
        this.color="yellow"
      }
      if(this.speed()>=100 && this.speed()<120){
        this.color="red"
      }
      console.log("speed : ",this.speed())
    })
    effect(()=>{
      console.log(this.fruit());
    })
  }

  increaseSpeed(){
    this.speed.set(this.speed()+10);
  }
  changeFruit(){
    this.fruit.set('banana')
  }

  data:WritableSignal<string>=signal<string>("anil");
  users:WritableSignal<string[]>=signal(['anil','sidhu','peter'])
  Speed:Signal<number> = computed<number>(()=>90);

  handleData(){
    this.data.set('sidhu');
    this.users.update((item)=>[...item,'bruce']);
    console.log(this.users())
  }
  name:WritableSignal<string>=signal<string>('')
  resetValue(){
    this.name.set("Anil Sidhu")
  }
  setValue(val:string){
    this.name.set(val);
  }
  
  isLogin=signal(false)
  show=signal(true)
  status=signal('error')
  handleLogin(value:boolean){
    this.isLogin.set(value)
  }
  handleStatus(event:Event){
    let target=event.target as HTMLSelectElement
    this.status.set(target.value); //this target.value comes from options value property
  }

  Users=signal(["Anil","Sam","Peter","Bruce"]);
  UsersDetail=signal([
    {id:1,name:"Anil",surname:"sidhu",email:"anil@test.com"},
    {id:2,name:"Sam",surname:"singh",email:"sam@test.com"},
    {id:3,name:"Peter",surname:"parker",email:"peter@test.com"},
    {id:4,name:"Bruce",surname:"wayen",email:"bruce@test.com"}
  ])

  Status=signal("loading")
  HandleStatus(event:Event){
    const target=event.target as HTMLSelectElement
    this.Status.set(target.value)
  }
  Name=signal('shivanshu')
  age=20
  UserData=signal({
    name:"shivanshu",
    age:22,
    email:"shivanshu@test.com"
  })
  UpdateUserData(key:string,val:string){
    this.UserData.update((item)=>({...item,[key]:val}))
  }
  userName=signal("shivanshu")
  userData=signal({
    college:"DTU",
    email:"example@test"
  })
  get uName(){
    return this.userName();
  }
  set uName(val:string){
    this.userName.set(val)
  }
  get userCollege(){
    return this.userData().college
  }
  set userCollege(val:string){
    this.userData.update((item)=>({...item,college:val}))
  }

  username=signal('shivanshu')
  userArray=signal(["shivanshu","loknath","sarthak","vansh"])
  messageFromChild=signal('')
  onchildEvent(msg:string){
    this.messageFromChild.set
  }

}