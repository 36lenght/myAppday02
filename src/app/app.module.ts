import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Myc05Component } from './myc05/myc05.component';
import { Myc06Component } from './myc06/myc06.component';
import { HiddenDirective } from './hidden.directive';
import { GreenDirective } from './green.directive';
import { FocusDirective } from './focus.directive';
import { Myc07Component } from './myc07/myc07.component';
import { Myc08Component } from './myc08/myc08.component';
import { PowPipe } from './pow.pipe';
import { AbsPipe } from './abs.pipe';
import { GenderPipe } from './gender.pipe';
import { Myc09Component } from './myc09/myc09.component';

@NgModule({
  declarations: [
    AppComponent,
    Myc05Component,
    Myc06Component,
    HiddenDirective,
    GreenDirective,
    FocusDirective,
    Myc07Component,
    Myc08Component,
    PowPipe,
    AbsPipe,
    GenderPipe,
    Myc09Component,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
