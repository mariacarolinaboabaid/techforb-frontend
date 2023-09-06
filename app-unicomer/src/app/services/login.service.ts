import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../shared/models/userModel';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<UserModel[]>(`${environment.dataBaseUrl}/getUsers`)
  }
}

