import { Character } from 'src/app/common/classes/character';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { ServiceResponse } from '../common/interfaces/service-response';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  strBasestrUrl: String = "https://rickandmortyapi.com/api/";

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Object> {
    const strUrl = this.strBasestrUrl + 'character';
    return this.http.get(strUrl);
  }
  getCharacter(id: string): Observable<Character> {
    const strUrl = `${this.strBasestrUrl}character/${id} `;
    return this.http.get<Character>(strUrl)
  }
  getCharactersArray(charactersId: string[]): Observable<Character[]> {
    const strUrl = `${this.strBasestrUrl}character/[${charactersId.toString()}] `;
    return this.http.get<Character[]>(strUrl)
  }
  getCharactersPaginated(pageNumber: number): Observable<ServiceResponse> {
    const strUrl = `${this.strBasestrUrl}character?page=${pageNumber + 1} `;
    return this.http.get<ServiceResponse>(strUrl);
  }
}
