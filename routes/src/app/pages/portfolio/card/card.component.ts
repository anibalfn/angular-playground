import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

// Decorator
export class CardComponent {
  constructor(
    private activeRoute: ActivatedRoute,
    private browser: Router) {
    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    )

    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )

    // ngOnInit(): void {
    //   setInterval(() => {
    //   this.browser.navigate(['/'])
    // }, 5000)
  }

}

