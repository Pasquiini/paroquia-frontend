import { Routes } from '@angular/router';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { HomeComponent } from './pages/home/home.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { SobreComponent } from './pages/sobre/sobre.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota para a página inicial
  { path: 'noticias', component: NoticiasComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '**', redirectTo: '' }
];
