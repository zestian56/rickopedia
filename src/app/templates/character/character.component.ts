import { Character } from 'src/app/common/classes/character';
import { CharacterService } from './../../services/character.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  strCharacterId: string;
  character: Character;
  blIsLoading: boolean = false;
  constructor(private characterService: CharacterService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.strCharacterId = params['id'];
    });
  }
  getCharacter(id: string): void {
    this.blIsLoading = true;
    this.characterService.getCharacter(id).subscribe(response => {
      this.character = response;
      this.blIsLoading = false;
    });
  }
  ngOnInit() {
    this.getCharacter(this.strCharacterId);
  }

}
