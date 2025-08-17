import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-agenda',
  imports: [CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  eventos = [
    {
      titulo: 'Missa Dominical',
      data: '2025-08-17', // Formato de data reconhecido
      horario: '19:00',
      local: 'Igreja Matriz',
      descricao: 'Celebração da Eucaristia para a comunidade.'
    },
    {
      titulo: 'Novena de Nossa Senhora Aparecida',
      data: '2025-08-25',
      horario: '19:30',
      local: 'Capela da Esperança',
      descricao: 'Início da novena em honra a Nossa Senhora Aparecida, padroeira do Brasil.'
    },
    {
      titulo: 'Encontro de Jovens',
      data: '2025-08-30',
      horario: '16:00',
      local: 'Salão Paroquial',
      descricao: 'Momento de oração e partilha para a juventude da paróquia.'
    }
  ];
}
