import { Component, VERSION } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private data: AppService) {
    this.data.getData().subscribe((d) => {
      console.warn(d);
    });
  }
}
