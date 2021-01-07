import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  charactersArray: Character[] = [];

  constructor() {
    this.charactersArray.push(new Character('Pedro', 34, Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)));
    this.charactersArray.push(new Character('Juan', 22, Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)));
    this.charactersArray.push(new Character('Roberto', 28, Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)));
  }

  public getAllCharacters(): Character[] {
    return this.charactersArray;
  }
}
