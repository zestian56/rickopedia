import { Component } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
/**
  Nombre: MainNavComponent
  Descripción: Componente que funciona como layout principal de la aplicación, y maneja el comportamiento del sidenav y toolbar
  Fecha creación: 04/11/2018
 */
export class MainNavComponent {
   /** 
    Nombre: blIsHandset,
    Tipo: Observable booleano.
    Descripción: Utilizado para la detección de cuando la aplicación es móvil o no.
 */
  blIsHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
