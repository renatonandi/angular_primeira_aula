import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-nd-microwave',
  templateUrl: './diretiva-nd-microwave.component.html',
  styleUrls: ['./diretiva-nd-microwave.component.scss']
})
export class DiretivaNdMicrowaveComponent {

  minutes: number = 0;
  seconds: number = 0;
  isRunning: boolean = false;
  interval: any;

  addNumber(number: number) {
    if (!this.isRunning) {
      if (this.minutes < 100) {
        this.seconds = this.seconds * 10 + number;
        if (this.seconds >= 60) {
          this.minutes += Math.floor(this.seconds / 60);
          this.seconds %= 60;
        }
      }
    }
  }

  addTime(number: number) {
    this.seconds = this.seconds + number;
    if (this.seconds >= 60) {
      this.minutes += Math.floor(this.seconds / 60);
      this.seconds %= 60;
    }
  }

  startTimer() {
    if (!this.isRunning ) {
      this.isRunning = true;

      this.interval = setInterval(() => {
        if (this.seconds > 0) {
          this.seconds--;
        } else if (this.minutes > 0) {
          this.minutes--;
          this.seconds = 59;
        }
        if (this.minutes == 0 && this.seconds == 0) {
          this.stopTimer();
        }
      }, 500);
    }
  }

  stopTimer() {
    clearInterval(this.interval);
    this.isRunning = false;
    this.minutes = 0;
    this.seconds = 0;
  }

  formatTime(value: number) {
      return value.toString().padStart(2, '0');
  }
}
