import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './components/character/character.component';
import { NewCharacterComponent } from './components/new-character/new-character.component';
import { StarwarsComponent } from './components/starwars/starwars.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    NewCharacterComponent,
    StarwarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
