import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-other',
  templateUrl: 'other.component.html',
  styleUrls: ['other.component.css']
})
export class OtherComponent  {
  stringInterpolation = 'Probando string intepolation';
  numberInterpolation = 2;
  onTest() {
    return true;
  }
}
