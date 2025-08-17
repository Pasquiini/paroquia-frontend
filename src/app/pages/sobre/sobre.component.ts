import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {
  titulo = 'Nossa Paróquia: Uma História de Fé e Comunidade';
  historia = `
    Fundada em 1950, a Paróquia de São João Batista tem sido um farol de fé e esperança para a comunidade local.
    Desde a sua modesta capela inicial até a grandiosa igreja atual, a paróquia cresceu em número e em espírito.
    Nossa missão é acolher a todos, celebrar a Palavra de Deus e servir ao próximo com caridade e amor.
  `;
  imagem = 'assets/sobre.jpg';
}
