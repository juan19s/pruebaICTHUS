import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private apiBaseUrl = 'https://apisimpsons.fly.dev/api/personajes';

  constructor(
    private http: HttpClient
  ) { }

  getPersonajes() {
    return this.http.get(`${this.apiBaseUrl}`);
  }
}
