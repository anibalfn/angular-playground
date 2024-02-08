import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonData } from '../../models/pokemon.data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  // Similar ao constructor nessa ocasião
  pokemon: PokemonData = {
    id: 0,
    name: '',
    sprites: {
      front_default: ''
    },
    types: [{
      slot: 0,
      type: {
        name: '',
        url: ''
      }
    }]
  }
  name: string = "Bulbasaur"
  pokeTypes: string[] = ['Fire', 'Poison']
  constructor(
    private service: PokemonService
  ) {

  }
  ngOnInit(): void {
    this.getPokemon('bulbasaur');
  }

  getPokemon(searchName: string) {
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }

        },
        error: (err) => console.log('NOT FOUND')
      }
    )


  }

}
