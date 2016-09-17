import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>{{bindable}}</p>
    <p>{{boundParagraph.textContent}}</p>
  `,
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {

  @Input() bindable = 1000;

  constructor() { }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngDoCheck() {
    this.log('DoCheck');
  }

  ngAfterContentInit() {
    this.log('AfterContentInit');
  }

  ngAfterContentChecked(){
    this.log('AfterContentChecked');
  }

  ngAfterViewChecked() {
    this.log('AfterViewChecked');
  }

  ngAfterViewInit() {
    this.log('AfterViewInit');
  }

  ngOnDestroy() {
    this.log('OnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }
}
