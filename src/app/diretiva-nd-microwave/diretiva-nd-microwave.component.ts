import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-diretiva-nd-microwave',
  templateUrl: './diretiva-nd-microwave.component.html',
  styleUrls: ['./diretiva-nd-microwave.component.scss']
})
export class DiretivaNdMicrowaveComponent {

  timer: number = 0;

  isRunning: boolean = false;

  interval: any;

  addNumber(number: number) {
    this.timer = this.timer * 10 + number;
  }
  stopTimer() {
    clearInterval(this.interval);
    this.isRunning = false;
    this.timer = 0;
  }

  startTimer(timeInSeconds: number) {
    if (!this.isRunning && timeInSeconds > 0) {
      this.timer = timeInSeconds;
      this.isRunning = true;

      this.interval = setInterval(() => {
        this.timer--;
        if (this.timer <= 0) {
          this.stopTimer();
        }
      }, 1000);
    }
  }

  formatTime(timeInSeconds: number): string {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${this.padNumber(seconds)}`;
  }

  padNumber(number: number): string {
    return number.toString().padStart(2, '0');
  }

 

}
