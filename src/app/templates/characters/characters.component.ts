import { CharacterService } from './../../services/character.service';
import { Character } from 'src/app/common/classes/character';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
/**
  Nombre: CharactersComponent
  Descripción: Componente que funciona como página de personajes, y se encarga de mostrar todos los personajes en el endpoint
  Fecha creación: 04/11/2018
 */
export class CharactersComponent implements OnInit {
  /**
  Nombre: arrCharacters
  Tipo: Arreglo de objetos de la clase Character
  Descripción: Utilizado para almacenar e imprimir todos los personajes en el DOM
 */
  arrCharacters: Character[] = [];
  /**
 Nombre: numCurrentPage
 Tipo: numero
 Descripción: Utilizado para determinar la página a cargar
*/
  numCurrentPage: number = 0;
  /**
 Nombre: blCompleted
 Tipo: Boolean
 Descripción: Utilizado para determinar si ya se obtuvo todos los personajes
*/
  blCompleted: boolean = false;
  /**
Nombre: numTotalCharas
Tipo: Número
Descripción: Número de total de personajes en el endPoint. Extraido de la documentación del api.
*/
  numTotalCharas: number = 492;
  /**
  Nombre: blIsLoading
  Tipo: Booleano
  Descripción: Utilizado para determinar el estado de la petición a realizar.
 */
  blIsLoading: boolean = false;
  /**
   * constructor del component
   * @param characterService  servicio de personajes
   */
  constructor(private characterService: CharacterService) { }
  /**
   * getCharacters
   * Método que obtiene los personajes
   * @param page página a cargar
   */
  getCharacters(page: number): void {
    this.blIsLoading = true;
    this.characterService.getCharactersPaginated(page).subscribe(response => {
      this.arrCharacters = this.arrCharacters.concat(response.results)
      this.blIsLoading = false;
    });
  }
  /**
   * onScroll
   * Método que se ejecuta cuando el usuario llega al final de la página
   */
  onScroll() {
    if (this.arrCharacters.length <= this.numTotalCharas) {
      this.numCurrentPage++;
      this.getCharacters(this.numCurrentPage);
    } else {
      this.blCompleted = true;
    }
  }
  /**
  *  ngOnInit
  *  Metódo del ciclo de vida del componente ejecutado al iniciar
  */
  ngOnInit() {
    this.getCharacters(this.numCurrentPage);
  }

}
