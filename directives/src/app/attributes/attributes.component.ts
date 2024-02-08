import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrl: './attributes.component.css'
})

// decorator
export class AttributesComponent implements OnInit {
  cssStyle: string = "disable"
  backColor: string = 'red'
  fontColor: string = 'white'
  item: string = ''
  list: string[] = ['']
  isEnabled: boolean = true
  constructor() {

  }
  addList() {
    this.list.push(this.item)

  }

  ngOnInit(): void {

  }

  change() {
    if (this.cssStyle === 'disable') {
      this.cssStyle = 'enable';
    } else {
      this.cssStyle = 'disable'
    }
  }
}
