import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { IUser } from '../IUser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pesquisar-user',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, HttpClientModule, FormsModule, RouterModule],
  templateUrl: './pesquisar-user.component.html',
  styleUrl: './pesquisar-user.component.css'
})
export class PesquisarUserComponent {
  title = 'Angular-cadastro-usuarios';
  router: any;
  usuarioPorNome: any;
  usuario: any;
  nome: string = "";
  usuarioNome: string = "";
  usuarioEmail: string = "";
  usuarioPhone: string = "";
  usuarioId: number = 0;
  user: number | undefined;


  constructor(private userService: UserService, router: Router){}

  ObterUmUsuario(id = this.usuarioId){
    this.usuario = this.userService.obterUmUsuario(id);
    return this.userService.obterUmUsuario(id)
    .then(user => console.log(user))
    .catch(Error => console.error(Error));
  }

  ObterPorNome(nome = this.nome){
    
    return this.userService.obterTodos().then(( user: IUser[] | undefined) => {
      return this.usuarioPorNome = user;
      
    });
  }
  editarUsuario(id: number){
    this.usuarioId = id;
    return this.usuarioId;
  }

  excluirUsuario(id: number){
    return this.userService.deletar(id)
    .then(user => console.log(user))
    .catch(Error => console.error(Error));
  }
}

