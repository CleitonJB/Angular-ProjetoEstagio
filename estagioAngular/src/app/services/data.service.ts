import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://vcmobile.com.br/VictorProjetoEstagio/Hackathon/WebApi/V01/Operadores_SelecionarTodos_Get';

  constructor(private _http: HttpClient) { }

  getUsuarios(){
    return this._http.get<User[]>(this.apiUrl);
  }
}
