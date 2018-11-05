import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './../templates/characters/characters.component';
import { CharacterComponent } from './../templates/character/character.component';
import { HomeComponent } from './../templates/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail', component: CharacterComponent },
  { path: 'characters', component: CharactersComponent },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
