import {Component} from "@angular/core";

@Component({
  selector: 'child-cmp',
  template: `
      <div>Records count: {{recordsCount}}</div>
      <button (click)="getTodos()">Fetch</button>
  `,
})
export class ChildComponent {
  recordsCount = 0

  getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(r => r.json())
      .then(c => this.recordsCount = c.length);
  }

  protected readonly window = window;
}
