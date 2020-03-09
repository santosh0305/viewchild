import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  @ViewChild('child') childComponent : ElementRef;

  constructor() { }

  ngOnInit() {
    this.childComponent.nativeElement.value = "test";
  }

}