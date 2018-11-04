import { CharacterService } from './../../services/character.service';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/common/classes/character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    const randomIds = [this.getRandomId(), this.getRandomId(), this.getRandomId()]
    this.getCharacters(randomIds);
  }
  getCharacters(ids: string[]): void {
    this.characterService.getCharactersArray(ids).subscribe(response => {
      this.characters = response;
    });
  }
  getRandomId(): string {
    return Math.round((Math.random() * 182) + 1).toString();
  }

}
