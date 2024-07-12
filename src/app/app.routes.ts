import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AccessComponent } from './access/access.component';
import { StationeryComponent } from './stationery/stationery.component';
import { SaleComponent } from './sale/sale.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'accessories', component: AccessComponent},
  { path: 'stationery', component: StationeryComponent},
  { path: 'sale', component: SaleComponent},
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' } // Redirect to NotFoundComponent for any other route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
