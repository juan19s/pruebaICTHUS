import { Component, Input } from '@angular/core';
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

  @Input() personaje: any;
  @Input() botonFav: any;


  ngOnInit() {
    console.log(this.personaje)
  }

  addOrDel(personaje: any) {
    if (this.botonFav) {
      const favoritosString = localStorage.getItem('favoritos');
      let favoritos: any[] = [];

      if (favoritosString) {
        favoritos = JSON.parse(favoritosString);
      }

      if (!favoritos.some((fav: any) => fav._id === personaje._id)) {
        favoritos.push(personaje);

        localStorage.setItem('favoritos', JSON.stringify(favoritos));

        console.log('Personaje añadido a favoritos:', personaje);
      } else {
        console.log('El personaje ya está en favoritos:', personaje);
      }
    } else {
      const favoritosString = localStorage.getItem('favoritos');
      let favoritos: any[] = [];
      if (favoritosString) {
        favoritos = JSON.parse(favoritosString);
      }

      favoritos = favoritos.filter((fav: any) => fav._id !== personaje._id);
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
      this.ngOnInit();
      console.log(favoritos, 'eliminado', personaje)
    }
  }


}
