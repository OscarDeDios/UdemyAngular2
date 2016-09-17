import { NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppComponent} from './app.component';
import { OtherComponent, AnotherComponent, PropertyBindingComponent, EventBindingComponent, LifecycleComponent} from './other';

@NgModule({
    declarations: [AppComponent, OtherComponent, AnotherComponent, PropertyBindingComponent, EventBindingComponent, LifecycleComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})

export class AppModule {}