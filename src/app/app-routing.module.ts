import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactoryComponent } from './pages/factory/factory.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  { path: 'factory', component: FactoryComponent },
  // { path: 'product', component: ProductListComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'factory/:id',

    component: ProductComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
