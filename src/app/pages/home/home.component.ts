import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // Dados fictícios de notícias (limitado aos 3 primeiros)
  noticias = [
    {
      titulo: 'Celebração de Corpus Christi',
      data: '2025-08-17', // Corrigido para o formato YYYY-MM-DD
      imagem: 'assets/noticia1.jpg',
      resumo: 'A paróquia celebra Corpus Christi com procissão e bênçãos. Participe!'
    },
    {
      titulo: 'Aviso Importante: Horário da Missa',
      data: '2025-08-01',
      imagem: 'assets/noticia2.jpg',
      resumo: 'Mudança no horário da missa dominical, confira a nova programação.'
    },
    {
      titulo: 'Momento de Oração e Louvor',
      data: '2025-07-28',
      imagem: 'assets/noticia3.jpg',
      resumo: 'Convidamos toda a comunidade para uma noite especial de oração e louvor.'
    },
  ];

  // Dados fictícios de eventos (limitado aos 2 próximos)
  eventos = [
    {
      titulo: 'Encontro de Jovens',
      data: '2025-08-30',
      horario: '16:00',
      local: 'Salão Paroquial',
      descricao: 'Momento de oração e partilha para a juventude da paróquia.'
    },
    {
      titulo: 'Novena de Nossa Senhora Aparecida',
      data: '2025-08-25',
      horario: '19:30',
      local: 'Capela da Esperança',
      descricao: 'Início da novena em honra a Nossa Senhora Aparecida.'
    }
  ];
}
