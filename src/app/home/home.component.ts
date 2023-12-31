import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { IUser } from '../IUser';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [ UserService ],
  imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
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

  ngOnInit(): void {
    this.obterTodosUsuarios();
  }

  obterTodosUsuarios(){
    return this.userService.obterTodos().then(( user: IUser[] | undefined) => {
      return this.usuario = user;
    })
  }
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
  adicionar(){
    const usuario: IUser = {
      nome: this.usuarioNome,
      email: this.usuarioEmail,
      telefone: this.usuarioPhone
    }
    alert("Adicionado com sucesso!!")
    return this.userService.adicionar(usuario)
    .then(user => console.log(user))
    .catch(Error => console.error(Error));
    
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
