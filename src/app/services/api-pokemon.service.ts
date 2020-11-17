import { HttpClient } from '@Angular/common/http';
import { Generation } from './../models/generation.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {

  constructor(private http: HttpClient) { }
  public getGames(generationNumber): Observable<any>{
    return this.http.get('https://pokeapi.co/api/v2/generation/'+generationNumber);

  }
}
