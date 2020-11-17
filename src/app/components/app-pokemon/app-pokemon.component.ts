import { Generation } from './../../models/generation.model';
import { ApiPokemonService } from './../../services/api-pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './app-pokemon.component.html',
  styleUrls: ['./app-pokemon.component.css']
})
export class AppPokemonComponent implements OnInit {

  generationNumber: { id: number, generation: string }[] = [
    { "id": 1, "generation": "ReadKantoy" },
    { "id": 2, "generation": "Johto" },
    { "id": 3, "generation": "Hoenn" },
    { "id": 4, "generation": "Sinnoh" },
    { "id": 5, "generation": "Unova" },
    { "id": 6, "generation": "Kalos" },
    { "id": 7, "generation": "Alola" },
    { "id": 8, "generation": "Galar" },
];

  generation = new Generation();
  erro: any;

  constructor(private apiPokemonService: ApiPokemonService) { }
  ngOnInit(): void {
  }

  getter(number){
    this.apiPokemonService.getGames(number).subscribe((data : Generation) => {
      this.generation = data;
    }, (error: any) => {
      this.erro = error;
      alert(error);

    })
  }

}
