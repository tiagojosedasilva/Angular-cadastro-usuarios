import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IUser } from './IUser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [ UserService ],
  imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-cadastro-usuarios';

  constructor(private userService: UserService){}

  usuario: any;

  nome: string = "";

  usuarioNome: string = "";
  usuarioEmail: string = "";
  usuarioPhone: string = "";

  usuarioId: number = 0;

  obterTodosUsuarios(){
    return this.userService.obterTodos()
    .then(user => console.log(user))
    .catch(Error => console.error(Error));
  }
  ObterUmUsuario(id = this.usuarioId){
    this.usuario = this.userService.obterUmUsuario(id);
    return this.userService.obterUmUsuario(id)
    .then(user => console.log(user))
    .catch(Error => console.error(Error));
  }
  ObterPorNome(nome = this.nome){
    this.usuario = this.userService.obterUmUsuarioPorNome(nome);
    return this.userService.obterUmUsuarioPorNome(nome)
    .then(user => console.log(user))
    .catch(Error => console.error(Error));
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
  editarUsuario(id = 2){
    const user: IUser = {
      nome: 'Geonascio Antônio',
      email: 'ge@ônascio',
      telefone: '(81) 97777-7777'
    }
    return this.userService.editarUsuario(id, user)
    .then(user => console.log(user))
    .catch(Error => console.error(Error));
  }
  excluirUsuario(id = 5){
    return this.userService.deletar(id)
    .then(user => console.log(user))
    .catch(Error => console.error(Error));
  }
}
