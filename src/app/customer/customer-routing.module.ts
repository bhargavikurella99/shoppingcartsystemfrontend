import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerGridComponent } from './customer-grid/customer-grid.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CustomerGridComponent,
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class CustomerRoutingModule {}
