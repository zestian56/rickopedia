import { Character } from './../../common/classes/character';
import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-character-summary',
  templateUrl: './character-summary.component.html',
  styleUrls: ['./character-summary.component.scss']
})
/**
  Nombre: CharacterSummaryComponent
  Descripción: Componente que funciona para mostrar la imagén del personaje y enviar a la página del mismo si se da click
  Fecha creación: 04/11/2018
 */
export class CharacterSummaryComponent  {
  /**
    Nombre: character
    Tipo: Objeto de la clase Character
   Descripción: Utilizado para recibir el personaje e imprimir sus imagén
  */
  @Input() character: Character;
}
