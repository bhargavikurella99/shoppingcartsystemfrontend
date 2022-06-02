import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { CustomerAlertComponent } from './customer-alert/customer-alert.component';
import { CustomerDialogComponent } from './customer-dialog/customer-dialog.component';
import { CustomerGridComponent } from './customer-grid/customer-grid.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  imports: [ CommonModule, CoreModule, CustomerRoutingModule ],
  declarations: [
    CustomerGridComponent,
    CustomerDialogComponent,
    CustomerAlertComponent,
  ],
  providers: [],
})
export class CustomerModule { }
