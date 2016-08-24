import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-another',
  template: `
    <p>
      <ng-content></ng-content>
    </p>
  `,
  styles: []
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
