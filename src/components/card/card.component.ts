import { Component } from '@angular/core';
import { PersonajesService } from 'src/services/personajes.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor (
    private personajesService: PersonajesService
  ) { }

  personajes: any = [];

  ngOnInit() {
    this.personajesService.getPersonajes().subscribe(
      (data: any) => {
        this.personajes = data.docs;
        console.log(this.personajes);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
