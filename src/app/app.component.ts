import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Paróquia São João Batista';

  menuAberto: boolean = false;

  // Função para alternar a visibilidade do menu
  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }
}
