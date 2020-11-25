import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Character } from './models/character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  charactersArray: Character[] = [];
  characterSelected: Character = null;
  isCreatingNewChar: boolean = false;

  // Se llama al inicializar el componente
  ngOnInit(): void {
    this.charactersArray.push(new Character('Pedro', 34, Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)));
    this.charactersArray.push(new Character('Juan', 22, Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)));
    this.charactersArray.push(new Character('Roberto', 28, Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)));

    // Cargamos el personaje que tengamos guardado previamente en memoria del navegador
    let character = localStorage.getItem('character');
    this.characterSelected = JSON.parse(character);
  }

  // Función que se ejecuta al hacer click en un personaje de la lista
  selectCharacter(character: Character): void {

    // Quitamos la interfaz de crear un personaje
    this.isCreatingNewChar = false;

    // Guardamos en una variable de la clase el personaje seleccionado
    this.characterSelected = character;

    // Guardamos en el local storage del navegador el personaje seleccionado
    localStorage.setItem('character', JSON.stringify(character));
  }

  // Función para actualizar el personaje
  updateCharacter(character: Character): void {

    // Ponemos el valor en null para que desaparezcan los detalles
    this.characterSelected = null;

    // Buscamos un personaje con el mismo nombre y lo actualizamos
    for (let i = 0; i < this.charactersArray.length; i++) {
      if (this.charactersArray[i].name === character.name) {
        this.charactersArray[i].strength = character.strength;
        this.charactersArray[i].agility = character.agility;
        this.charactersArray[i].intelligence = character.intelligence;
      }
    }
  }

  // Función para borrar un personaje
  deleteCharacter(character: Character) {

    // Ponemos el valor en null para que desaparezcan los detalles
    this.characterSelected = null;

    // Filtramos el array de personajes
    this.charactersArray = this.charactersArray.filter(
      (char: Character, index: number, array: Character[]) => {

        // Si el nombre del personaje es diferente al que tenemos que borrar
        if (char.name !== character.name) {

          // Guardamos el personaje en el array filtrado
          return char;
        }
      });
  }

  // Funcion para añadir un nuevo personaje en el array
  addCharacter(newCharacter: Character): void {
    this.charactersArray.push(newCharacter);
  }

}
