import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  message = 'This is our angular app';
  inputText: string = '';
  OnSubmit(inputEl: HTMLInputElement) {
    this.inputText = inputEl.value;
  }
}
