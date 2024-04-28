import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-events',
  standalone: true,
  imports: [],
  templateUrl: './angular-events.component.html',
  styleUrl: './angular-events.component.css'
})
export class AngularEventsComponent {
  textInput: any;
  textBoxInput: string = '';

  constructor() {}

  ngOnInit(): void {}

  getInput(input: any) {
    this.textInput = input;
  }

  getInputBoxValue(val: string) {
    this.textBoxInput = val;
  }
}
