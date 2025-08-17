import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  // Dados fictícios para simular as informações de contato
  contato = {
    telefone: '(17) 99999-9999',
    email: 'contato@paroquia.com',
    endereco: 'Rua da Fé, 123 - Centro, Cidade da Graça',
    horario: 'Terça a Sábado: 09h às 12h e das 14h às 17h'
  };
}
