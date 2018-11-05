import { Character } from "../classes/character";

export interface ServiceResponse {
  info: Info;
  results: Character[];
}

export class Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}