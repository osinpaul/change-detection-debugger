import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  template: `
      <div (mouseover)="0">Just a plain div</div>
      <child-cmp></child-cmp>
  `,
})
export class AppComponent {
}


