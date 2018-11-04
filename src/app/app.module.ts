import { CharacterService } from './services/character.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from "@angular/common/http";

import { MaterialModule } from './modules/material.module';
import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent } from './app.component';
import { MainNavComponent } from './templates/main-nav/main-nav.component';
import { HomeComponent } from './templates/home/home.component';
import { CharacterSummaryComponent } from './components/character-summary/character-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    CharacterSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
