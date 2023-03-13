import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor( private http:HttpClient) { }

  getCard(id:string){
    return this.http.get(`${environment.api}${id}`)
  }
}
