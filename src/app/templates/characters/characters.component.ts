import { CharacterService } from './../../services/character.service';
import { Character } from 'src/app/common/classes/character';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  
  arrCharacters: Character[];
  numCurrentPage: number = 0;
  constructor(private characterService: CharacterService) { }

  getCharacters(page: number): void {
    this.characterService.getCharactersPaginated(page).subscribe(response => {
      this.arrCharacters = [...response.results]
    });
  }
  onScroll() {
    console.log('llegue al final')
  }
  ngOnInit() {
    this.getCharacters(this.numCurrentPage);
  }

}
