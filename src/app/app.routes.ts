import { Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { HomeComponent } from './home/home.component';
import { PesquisarUserComponent } from './pesquisar-user/pesquisar-user.component';
import { CadastrarUsuariosComponent } from './cadastrar-usuarios/cadastrar-usuarios.component';

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path:'editar/:id',
      component: EditarComponent
    },
    {
      path:'pesquisar',
      component: PesquisarUserComponent
    },
    {
      path:'cadastrar',
      component: CadastrarUsuariosComponent
    }
];

