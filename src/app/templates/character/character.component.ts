import { Character } from 'src/app/common/classes/character';
import { CharacterService } from './../../services/character.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
/**
  Nombre: CharacterComponent
  Descripción: Componente que funciona como página del personaje, y se encarga de mostrar más información sobre el mismo
  Fecha creación: 04/11/2018
 */
export class CharacterComponent implements OnInit {
  /**
     Nombre: character
     Tipo: Objeto de la clase Character
    Descripción: Utilizado para almacenar el personaje e imprimir sus datos en el DOM
   */
  strCharacterId: string;
  /**
  Nombre: character
  Tipo: Objeto de la clase Character
  Descripción: Utilizado para almacenar el personaje e imprimir sus datos en el DOM
 */
  character: Character;
  /**
  Nombre: blIsLoading
  Tipo: Booleano
  Descripción: Utilizado para determinar el estado de la petición a realizar.
 */
  blIsLoading: boolean = false;
  /**
   * constructor del component
   * @param characterService  Servicio de personaje
   * @param route ruta actual 
   */
  constructor(private characterService: CharacterService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.strCharacterId = params['id'];
    });
  }
  /**
   * getCharacter
   * Método que obtiene el personaje
   * @param id identificación del personaje
   */
  getCharacter(id: string): void {
    this.blIsLoading = true;
    this.characterService.getCharacter(id).subscribe(response => {
      this.character = response;
      this.blIsLoading = false;
    },err => this.blIsLoading= false);
  }
  /**
  *  ngOnInit
  *  Metódo del ciclo de vida del componente ejecutado al iniciar
  */
  ngOnInit() {
    this.getCharacter(this.strCharacterId);
  }

}
