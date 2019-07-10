import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import { MultiplePipe } from './multiple.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    MultiplePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
