import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

 baseUrl = 'http://localhost:3000/pizza';
 baseUrl2 = 'http://localhost:3000/message';

  constructor(private httpClient: HttpClient) { }

   getPizzas(): Observable<Pizza[]> {
        return this.httpClient.get<Pizza[]>('http://localhost:3000/pizza');
    }

    getPizza(id: number): Observable<Pizza> {
        return this.httpClient.get<Pizza>(this.baseUrl + '/' + id.toString());
    }

    sendMessages(message: Message): Observable<Message[]> {
        return this.httpClient.post<Message[]>('http://localhost:3000/message', message, {
             headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }
}
