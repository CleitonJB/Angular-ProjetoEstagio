import { Injectable } from '@angular/core';

import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'http://vcmobile.com.br/VictorProjetoEstagio/Hackathon/WebApi/V01/Operadores_SelecionarTodos_Get';
const loginUrl = "http://vcmobile.com.br/VictorProjetoEstagio/Hackathon/WebApi/V01/Operadores_ValidarLogin_Post";


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get<User[]>(`${apiUrl}`);
  }

  loginUser(user){
    return this.http.post<User>(`${loginUrl}`, user);
  }
}
