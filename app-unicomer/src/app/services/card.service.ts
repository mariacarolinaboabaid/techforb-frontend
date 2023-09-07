import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cardModel } from '../shared/models/cardModel';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient: HttpClient) { }

  getCards(userId: number) {
    return this.httpClient.get<cardModel[]>(`${environment.dataBaseUrl}/getCards/${userId}`)
  }

  postCard(userId: number, requestBody: cardModel){
    return this.httpClient.post(`${environment.dataBaseUrl}/postCard/${userId}`, requestBody)
  }
}
