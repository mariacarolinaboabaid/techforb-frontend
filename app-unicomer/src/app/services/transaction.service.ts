import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { transactionModel } from '../shared/models/transactionModel';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient: HttpClient) { }

  getTransactions(userId: number) {
    return this.httpClient.get<transactionModel[]>(`${environment.dataBaseUrl}/getTransactions/${userId}`)
  }

  postTransaction(userId: number, requestBody: transactionModel){
    return this.httpClient.post(`${environment.dataBaseUrl}/postTransaction/${userId}`, requestBody)
  }
}
