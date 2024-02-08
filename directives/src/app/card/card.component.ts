import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  products: string[] = [];
  menuType: string = "sudo";

  constructor() {
    this.products = [
      "mouse",
      "keyboard",
      "cable",
      "ssd",
    ]
  }

  ngOnInit(): void {

  }
  add() {
    this.products.push("Led")
  }

  remove(index: number) {
    this.products.splice(index, 1)
  }

}
