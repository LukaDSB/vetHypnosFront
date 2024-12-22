import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-components-principal',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.principal.html',
  styleUrl: './app.principal.scss'
})
export class AppPrincipal {
  title = 'projetoTeste';
}
