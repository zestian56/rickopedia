import { CharacterService } from './../../services/character.service';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/common/classes/character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  arrCharacters: Character[] = [];
  numTotalCharas: number = 492;
  blIsLoading: boolean = false;
  constructor(private characterService: CharacterService) { }
  ngOnInit() {
    const randomIds = [this.getRandomId(), this.getRandomId(), this.getRandomId()]
    this.getCharacters(randomIds);
  }
  getCharacters(ids: string[]): void {
    this.blIsLoading = true;
    this.characterService.getCharactersArray(ids).subscribe(response => {
      this.arrCharacters = response;
      this.blIsLoading = false;
    });
  }
  getRandomId(): string {
    return Math.round((Math.random() * 492) + 1).toString();
  }

}
