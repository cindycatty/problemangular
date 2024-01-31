import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  campings: string[] = ['De Karnemelkplaats', 'Tro Do Way', 'Camping Kohnenhof', 'Camping Langewald', 'Camping La Fouly'];
}
