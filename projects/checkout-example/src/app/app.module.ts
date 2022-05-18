import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CheckoutModule } from 'checkout';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CheckoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
