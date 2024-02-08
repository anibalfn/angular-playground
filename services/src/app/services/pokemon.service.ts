import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonData } from '../models/pokemon.data'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiURL: string = ''
  private pokeData: PokemonData | any

  constructor(
    private http: HttpClient
  ) {
    this.apiURL = environment.pokeApi;
  }

  getPokemon(pokemonName: string):Observable<PokemonData> {
    this.pokeData = this.http.get<PokemonData>(`${this.apiURL}${pokemonName}`)

    return this.pokeData;
    console.log(this.pokeData);

  }
}
