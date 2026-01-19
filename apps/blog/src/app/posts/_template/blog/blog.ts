import { Component, signal } from '@angular/core';
import { Demo } from '../demo/demo';
import { Explanation } from '../explanation/explanation';

@Component({
  selector: 'app-blog-rxjs-timers',
  imports: [Demo, Explanation],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  readonly showDemo = signal(true);

  reset() {
    this.showDemo.set(false);
    setTimeout(() => this.showDemo.set(true), 0);
  }
}
