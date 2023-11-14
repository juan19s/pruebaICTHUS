import { Component } from '@angular/core';
import { PersonajesService } from 'src/services/personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaICTHUS';

  constructor(
    private personajesService: PersonajesService
  ) { }

  ngOnInit() {
    this.personajesService.getPersonajes().subscribe(
      (data: any) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
