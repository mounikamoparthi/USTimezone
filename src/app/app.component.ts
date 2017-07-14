import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Us Time Zone';
  today =  Date();
  pst() {
    console.log('Date:', this.today);
  }
  mst() {
    console.log('Date:', this.today);
  }
  cst() {
    console.log('Date:', this.today);
  }
  est() {
    console.log('Date:', this.today);
  }
  clear() {
    this.today = '';
    console.log(this.today);
  }
}
