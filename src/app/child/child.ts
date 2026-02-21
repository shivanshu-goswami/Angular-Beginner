import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() name:string | undefined
  @Output() messageEvent=new EventEmitter<string>()
  sendMessage(){
    this.messageEvent.emit('Hello Parent')
  }

}
