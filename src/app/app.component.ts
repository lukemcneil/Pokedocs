import { Component, OnInit } from '@angular/core';
import { PokeGetterService } from './poke-getter.service';

interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilites: [];
  forms: [];
  game_indices: [];
  held_items: [];
  location_area_encounters: string;
  moves: [];
  sprites: any;
  species: any;
  stats: [];
  types: [];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private pokeGetterService: PokeGetterService) {}
  selectedPokemon: Pokemon;
  selectedPokemonSprite: any;
  ngOnInit(): void {
    this.updateSelectedPokemonToRandom();
  }
  updateSelectedPokemon(name: string): void {
    this.pokeGetterService.getPokemon(name).subscribe((data: any) => {
      this.selectedPokemon = {
        id: data.id,
        name: data.name,
        base_experience: data.base_experience,
        height: data.height,
        is_default: data.is_default,
        order: data.order,
        weight: data.weight,
        abilites: data.abilites,
        forms: data.forms,
        game_indices: data.game_indices,
        held_items: data.held_items,
        location_area_encounters:
          data.location_area_encounterlocation_area_encounterss,
        moves: data.moves,
        sprites: data.sprites,
        species: data.species,
        stats: data.stats,
        types: data.types
      };
    });
  }
  getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
  }
  updateSelectedPokemonToRandom(): void {
    this.updateSelectedPokemon(this.getRandomInt(1, 808).toString());
  }
}
