import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter<string>();
  // onClicked() {
  //   alert('funciona!');
  // }

  onClicked() {
    this.clicked.emit('Funciona desde Custom Event');
  }

}
