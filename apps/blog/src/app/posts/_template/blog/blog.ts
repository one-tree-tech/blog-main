import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Code } from '../code/code';
import { Demo } from '../demo/demo';
import { Explanation } from '../explanation/explanation';

@Component({
  selector: 'app-blog-rxjs-timers',
  imports: [Demo, Explanation, FormsModule, Code],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  readonly display = model<string>('explain');
  readonly showDemo = signal(true);

  reset() {
    this.showDemo.set(false);
    setTimeout(() => this.showDemo.set(true), 0);
  }
}
