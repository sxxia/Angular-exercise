import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { PageNotFindComponent } from './page-not-find/page-not-find.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { ProductSellerComponent } from './product-seller/product-seller.component';
import { ChatComponent } from './chat/chat.component';
import { LoginGuard } from './guard/login.guard';
import { UnsavedGuard } from './guard/unsaved.guard';
import { ProductResolve } from './guard/product.resolve';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'chat', component: ChatComponent, outlet: 'aux'},
  {path: 'home', component: HomeComponent},
  // {path: 'product/:id', component: ProductComponent, children: [
  //   {path: '', component: ProductDescComponent},
  //   {path: 'seller/:id', component: ProductSellerComponent},
  // ], canActivate: [LoginGuard], canDeactivate: [UnsavedGuard]},
  {path: 'product/:id', component: ProductComponent, children: [
    {path: '', component: ProductDescComponent},
    {path: 'seller/:id', component: ProductSellerComponent},
  ], resolve: {
    product: ProductResolve
  }},
  {path: '**', component: PageNotFindComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [LoginGuard, UnsavedGuard]
  providers: [ProductResolve]
})
export class AppRoutingModule { }
