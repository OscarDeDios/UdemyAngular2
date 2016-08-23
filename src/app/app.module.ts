import { NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppComponent} from './app.component';
import { OtherComponent, AnotherComponent} from './other';

@NgModule({
    declarations: [AppComponent, OtherComponent, AnotherComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})

export class AppModule {}