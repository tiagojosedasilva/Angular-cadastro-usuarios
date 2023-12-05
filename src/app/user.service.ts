import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { IUser } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  obterTodos(){
    return this.httpClient.get<IUser[]>(`${environment}user`).toPromise()
  }
  obterUmUsuario(id: number){
    return this.httpClient.get<IUser>(`${environment}user/${id}`).toPromise()
  }
  obterUmUsuarioPorNome(nome: string){
    return this.httpClient.get<IUser>(`${environment}user/${nome}`).toPromise()
  }
  adicionar(user: IUser){
    return this.httpClient.post<IUser>(`${environment}user`, user).toPromise()
  }
  editarUsuario(id: number, user: IUser){
    return this.httpClient.patch<IUser>(`${environment}user/${id}`, user).toPromise()
  }
  deletar(id:number){
    return this.httpClient.delete<IUser>(`${environment}user/${id}`).toPromise()
  }
}
