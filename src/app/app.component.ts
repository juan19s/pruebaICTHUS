import { Component } from '@angular/core';
import { PersonajesService } from 'src/services/personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaICTHUS';
  personajeBuscado: string = '';
  personajesPosibles: any[] = [];
  searchText: string = '';
  selectedPersonaje: any;
  favoritos: any[] = [];

  constructor(
    private personajesService: PersonajesService
  ) { }

  personajes: any = [];
  paginatedPersonajes: any[] = [];
  pageSize: number = 10;
  pageIndex: number = 0;

  ngOnInit() {
    const favoritosString = localStorage.getItem('favoritos');

    if (favoritosString) {
      this.favoritos = JSON.parse(favoritosString);
    }

    this.personajesService.getPersonajes().subscribe(
      (data: any) => {
        this.personajes = data.docs;
        console.log(this.personajes)
        this.paginatedPersonajes = this.personajes.slice(0, this.pageSize);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  onInputChange(event: any): void {
    if (event.target.value.length < 3) return;

    this.personajesService.shearchPersonaje(event.target.value).subscribe((data: any) => {
      this.personajesPosibles = data["result"];
    });
  }

  selectPersonaje(personaje: any): void {
    this.selectedPersonaje = personaje;
    this.personajeBuscado = personaje;
    console.log(this.personajeBuscado)
    this.searchText = '';
    this.personajesPosibles = [];
  }

  handlePage(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;

    this.paginatedPersonajes = this.personajes.slice(startIndex, endIndex);
  }
}
