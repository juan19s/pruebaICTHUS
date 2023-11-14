import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../environments/env';


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private apiBaseUrl = apiUrl.url;

  constructor(
    private http: HttpClient
  ) { }

  getPersonajes() {
    return this.http.get(`${this.apiBaseUrl}?limit=300&page=1`);
  }

  shearchPersonaje(personaje: string) {
    // const params = new HttpParams().set('name', personaje);
    return this.http.get(`${this.apiBaseUrl}find/` + personaje);
  }
}
