import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { PageNotFindComponent } from './page-not-find/page-not-find.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    PageNotFindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
