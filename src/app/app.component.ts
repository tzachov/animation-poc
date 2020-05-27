import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: Array<any>;

  ngOnInit() {
    this.onReset();
  }

  onReset() {
    this.items = new Array(15).fill({}).map(() => ({
      title: 'Some Title',
      bullets: new Array(Math.floor(Math.random() * 10)).fill({ name: 'Bullet' }),
      tags: new Array(Math.floor(Math.random() * 10)).fill({ name: 'Tag' })
    }));
  }
}
