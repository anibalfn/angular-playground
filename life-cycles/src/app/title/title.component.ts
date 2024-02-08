import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() myName: string = '';
  constructor() {
    console.log(`Constructor ${this.myName}`);

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`OnChanges ${this.myName}`);
  }
  ngOnInit(): void {
    console.log(`OnInit ${this.myName}`);
    this.myName = `Hello, ${this.myName}!`

  }

}
