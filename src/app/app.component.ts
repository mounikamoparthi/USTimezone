import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Us Time Zone';
  today: Date = new Date();
  displayTime( name: string) {
      const d: Date = new Date();

  if (name === 'pst') {
    const utcDate: Date = new Date(d.toUTCString()); // in javascript
    console.log(utcDate);
    this.today = utcDate;
  }
  if (name === 'mst') {
    const utcDate: Date = new Date(d.toUTCString());
    const mst = utcDate.setHours(utcDate.getHours() + 1);
    const mstDate: Date = new Date(mst);    // converts number to date
    this.today = mstDate;
  }
   if (name === 'est') {
    const utcDate: Date = new Date(d.toUTCString());
    const est = utcDate.setHours(utcDate.getHours() + 3);
    const estDate: Date = new Date(est);    // converts number to date
    this.today = estDate;
  }
   if (name === 'cst') {
    const utcDate: Date = new Date(d.toUTCString());
    const cst = utcDate.setHours(utcDate.getHours() + 2);
    const cstDate: Date = new Date(cst);    // converts number to date
    this.today = cstDate;
  }
  if (name === 'clear') {
    this.today = null;
  }
}
}
