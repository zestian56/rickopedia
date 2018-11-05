import { CharacterService } from './../../services/character.service';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/common/classes/character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
/**
  Nombre: HomeComponent
  Descripción: Componente que funciona como página de inicio, y despliega 3 personajes aleatiros
  Fecha creación: 04/11/2018
 */
export class HomeComponent implements OnInit {
  /**
  Nombre: arrCharacters
  Tipo: Arreglo de objetos de la clase Character
  Descripción: Utilizado para almacenar e imprimir los 3 personajes aleatorios en el DOM
 */
  arrCharacters: Character[] = [];
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
   * Coonstructor del component
   * @param characterService Servicio de personajes
   */
  constructor(private characterService: CharacterService) { }
  /**
  *  ngOnInit
  *  Metódo del ciclo de vida del componente ejecutado al iniciar
  */
  ngOnInit() {
    const randomIds = [this.getRandomId(), this.getRandomId(), this.getRandomId()]
    this.getCharacters(randomIds);
  }
  /**
   * getCharacters
   * Método que obtiene los personajes
   * @param ids arreglo de ids para hacer fetch
   */
  getCharacters(ids: string[]): void {
    this.blIsLoading = true;
    this.characterService.getCharactersArray(ids).subscribe(response => {
      this.arrCharacters = response;
      this.blIsLoading = false;
    }, err => this.blIsLoading = false);
  }
  /**
   * getRandomId
   * Método que obtiene una id aleatoria del total de personajes
   */
  getRandomId(): string {
    return Math.round((Math.random() * this.numTotalCharas) + 1).toString();
  }

}
