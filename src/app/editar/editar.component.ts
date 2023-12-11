import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { UserService } from '../user.service';
import { IUser } from '../IUser';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [ AppComponent, FormsModule],
  providers: [UserService],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent{


  constructor(private userService: UserService, private route: Router, private activatedRoute : ActivatedRoute){}
  id: number | undefined;
  userID: any;
  usuarioNome: string = "";
  usuarioEmail: string = "";
  usuarioPhone: string = "";
  usuarioId: number = 0;
  user: any;

  // ngOnInit() {
  //   this.userID = this.route;
  //   return console.log()
  //  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params)
      this.userID = params.get('id');
      this.usuarioId = this.userID
    });
  }

  editarUsuario(id:number){
    const usuario: IUser = {
      nome: this.usuarioNome,
      email: this.usuarioEmail,
      telefone: this.usuarioPhone
    }
    alert("Editado com sucesso!!")
    return this.userService.editarUsuario(id, usuario)
    .then(usuario => console.log(usuario))
    .catch(Error => console.error(Error));
  }
}
