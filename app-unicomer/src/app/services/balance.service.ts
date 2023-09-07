import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { balanceModel } from '../shared/models/balanceModel';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(private httpClient: HttpClient) { }

  getBalance(userId: number) {
    return this.httpClient.get<balanceModel>(`${environment.dataBaseUrl}/getBalance/${userId}`)
  }
}
