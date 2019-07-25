import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeGetterService {
  constructor(private http: HttpClient) {}

  getPokemon(name: string): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + name);
  }

  getSprite(url: string): Observable<any> {
    return this.http.get(url);
  }
}
