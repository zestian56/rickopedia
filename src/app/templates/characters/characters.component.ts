import { CharacterService } from './../../services/character.service';
import { Character } from 'src/app/common/classes/character';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  arrCharacters: Character[] = [];
  numCurrentPage: number = 0;
  blCompleted: boolean = false;
  numTotalCharas: number = 492;
  constructor(private characterService: CharacterService) { }

  getCharacters(page: number): void {
    this.characterService.getCharactersPaginated(page).subscribe(response => {
      this.arrCharacters = this.arrCharacters.concat(response.results)
    });
  }
  onScroll() {
    console.log(this.arrCharacters.length)
    if (this.arrCharacters.length <= this.numTotalCharas) {
      this.numCurrentPage++;
      this.getCharacters(this.numCurrentPage);
    } else {
      this.blCompleted = true;
    }
  }
  ngOnInit() {
    this.getCharacters(this.numCurrentPage);
  }

}
