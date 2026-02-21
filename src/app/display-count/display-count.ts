import { Component } from '@angular/core';
import { Counter } from '../store/counter';

@Component({
  selector: 'app-display-count',
  imports: [],
  templateUrl: './display-count.html',
  styleUrl: './display-count.css',
})
export class DisplayCount {
  // this will be auto injected by counter global component as you can see @Injectable in counter file
  constructor(public state:Counter){

  }
}
