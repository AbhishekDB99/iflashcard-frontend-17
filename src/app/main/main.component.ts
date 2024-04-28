import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { AngularEventsComponent } from '../angular-events/angular-events.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardComponent,AngularEventsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
