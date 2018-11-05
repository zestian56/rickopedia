import { Character } from 'src/app/common/classes/character';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { ServiceResponse } from '../common/interfaces/service-response';

@Injectable({
  providedIn: 'root'
})
/**
  Nombre: CharacterService
  Descripción: Servicio que se encarga de realizar todas las peticiones a la api de rick y morty
  Fecha creación: 04/11/2018
 */
export class CharacterService {
  /**
    Nombre: strBasestrUrl
    Tipo: Cadena
   Descripción: Utilizado para determinar la url base del endpoint
  */
  strBasestrUrl: String = "https://rickandmortyapi.com/api/";
  /**
   * Constructor del servicio
   * @param http Modulo http de angular
   */
  constructor(private http: HttpClient) { }
  /**
   * getCharacters
   * Método que se encarga de obtener todos los personajes 
   */
  getCharacters(): Observable<Object> {
    const strUrl = this.strBasestrUrl + 'character';
    return this.http.get(strUrl);
  }
  /**
 * getCharacter
 * Método que se encarga de obtener un personaje por id
 * @param id id del personaje
 */
  getCharacter(id: string): Observable<Character> {
    const strUrl = `${this.strBasestrUrl}character/${id} `;
    return this.http.get<Character>(strUrl)
  }

  /**
    * getCharactersArray
   * Método que se encarga de obtener un arreglo de personajes con ids enviadas
   * @param charactersId ids para obtener personajes
   */
  getCharactersArray(charactersId: string[]): Observable<Character[]> {
    const strUrl = `${this.strBasestrUrl}character/[${charactersId.toString()}] `;
    return this.http.get<Character[]>(strUrl)
  }
  /**
   * getCharactersPaginated
   * Método que se encarga de obtener 20 personajes de la página proporcionada
   * @param pageNumber Número de pagina aobtener
   */
  getCharactersPaginated(pageNumber: number): Observable<ServiceResponse> {
    const strUrl = `${this.strBasestrUrl}character?page=${pageNumber + 1} `;
    return this.http.get<ServiceResponse>(strUrl);
  }
}
