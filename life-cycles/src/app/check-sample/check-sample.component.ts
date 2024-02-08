import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css'
})
export class CheckSampleComponent implements OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy {

  quantity: number = 0;

  constructor() {

  }
  ngOnDestroy(): void {
    console.log("That's all folks!");

  }

  add() {
    this.quantity += 1;
  }

  subtract() {
    this.quantity -= 1;
  }


  ngOnInit(): void {
    console.log('ANIBAL - OnInit');
  }
  ngDoCheck(): void {
    console.log('ANIBAL - DoCheck');
  }

  // Checked -> Content -> View

  // Após alguma alteração no conteúdo, verifica-o:
  ngAfterContentChecked(): void {
    console.log('ANIBAL - AfterContentChecked');
  }

  // Quando o primeiro conteúdo é iniciado:
  ngAfterContentInit(): void {
    console.log('ANIBAL - AfterContentInit');
  }
  // Após alteração da view, verifica-a:
  ngAfterViewChecked(): void {
    console.log('ANIBAL - AfterViewChecked');
  }
  // Após inicialização da view:
  ngAfterViewInit(): void {
    console.log('ANIBAL - AfterViewInit');
  }

}
