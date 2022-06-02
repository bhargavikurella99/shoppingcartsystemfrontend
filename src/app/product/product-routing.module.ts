import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductGridComponent } from './product-grid/product-grid.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductGridComponent,
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class ProductRoutingModule {}
