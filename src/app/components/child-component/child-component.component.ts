import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {
    @Input() amount: number;
    @Output() amountOutput = new EventEmitter<number>();


    constructor() { }

  ngOnInit() {
    console.log(this.amount);
  }
  plusMethodChild() {
      this.amountOutput.emit(++this.amount);
  }
  minusMethodChild() {
      this.amountOutput.emit(--this.amount);
  }
}
