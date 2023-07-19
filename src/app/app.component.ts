import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeSettings(
    option: 'includeLetters' | 'includeNumbers' | 'includeSymbols'
  ): () => void {
    return () => {
      this[option] = !this[option];
    };
  }

  onChangeLength(event: Event) {
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = `${this.includeLetters ? letters : ''}${
      this.includeNumbers ? numbers : ''
    }${this.includeSymbols ? symbols : ''}`;

    let generatedPassword = '';

    for (let i = 0; i < this.length; i += 1) {
      generatedPassword +=
        validChars[Math.floor(Math.random() * validChars.length)];
    }

    this.password = generatedPassword;
  }
}
