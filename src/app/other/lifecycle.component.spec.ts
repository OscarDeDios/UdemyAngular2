/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { LifecycleComponent } from './lifecycle.component';

describe('Component: Lifecycle', () => {
  it('should create an instance', () => {
    let component = new LifecycleComponent();
    expect(component).toBeTruthy();
  });
});
