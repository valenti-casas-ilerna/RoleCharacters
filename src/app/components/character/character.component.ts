import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() character: Character;
  @Output() saveEvent: EventEmitter<Character> = new EventEmitter<Character>();
  @Output() deleteEvent: EventEmitter<Character> = new EventEmitter<Character>();

  constructor() { }

  ngOnInit(): void {
  }

  saveCharacter(): void {
    this.saveEvent.emit(this.character);
  }

  deleteCharacter(): void {
    this.deleteEvent.emit(this.character);
  }

}
