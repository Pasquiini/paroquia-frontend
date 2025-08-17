import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias',
  imports: [CommonModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  noticias = [
    {
      titulo: 'Celebração de Corpus Christi',
      data: '15 de junho de 2025',
      imagem: 'assets/noticia1.jpg',
      resumo: 'A paróquia celebra Corpus Christi com procissão e bênçãos. Participe!'
    },
    {
      titulo: 'Aviso Importante: Horário da Missa',
      data: '01 de julho de 2025',
      imagem: 'assets/noticia2.jpg',
      resumo: 'Mudança no horário da missa dominical, confira a nova programação.'
    },
    // Adicione mais notícias aqui
  ];
}
