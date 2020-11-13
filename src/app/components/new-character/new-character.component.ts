import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css']
})
export class NewCharacterComponent implements OnInit {

  newCharacter: Character = null;

  // Creamos un emisor de eventos que enviará el personaje creado
  @Output() characterEvent: EventEmitter<Character> = new EventEmitter<Character>();

  constructor() { }

  ngOnInit(): void {
  }

  // Funcion que se ejecuta al enviar el formulario
  onFormSubmit(itemForm: any): void {

    // Guardamos los valores del formulario en un personaje nuevo
    this.newCharacter = new Character(itemForm.controls.name.value,
                                      itemForm.controls.age.value,
                                      itemForm.controls.strength.value,
                                      itemForm.controls.agility.value,
                                      itemForm.controls.intelligence.value);

    console.log(this.newCharacter);


    // Enviamos el evento "characterEvent" y le pasamos el personaje creado
    this.characterEvent.emit(this.newCharacter);
  }

}
