import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  // Dados fictícios para simular a galeria
  itensGaleria = [
    { tipo: 'imagem', url: 'assets/galeria1.jpg', titulo: 'Procissão de Corpus Christi' },
    { tipo: 'imagem', url: 'assets/galeria2.jpg', titulo: 'Festa da Padroeira' },
    { tipo: 'imagem', url: 'assets/galeria3.jpg', titulo: 'Grupo de Oração' },
    { tipo: 'imagem', url: 'assets/galeria4.jpg', titulo: 'Primeira Comunhão' },
    { tipo: 'video', url: 'https://www.youtube.com/embed/VIDEO_ID_1', titulo: 'Homilia do Pe. João' },
    { tipo: 'video', url: 'https://www.youtube.com/embed/VIDEO_ID_2', titulo: 'Canto do Coral' },
  ];
}
