import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
  
  @ViewChild(ChildComponent,{static: false}) child : ChildComponent;

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    console.log(this.child.states)
  }

}