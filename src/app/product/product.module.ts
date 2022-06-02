import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [ CommonModule, CoreModule, ProductRoutingModule ],
  declarations: [
    ProductGridComponent,
    ProductDialogComponent,
    ProductAlertComponent,
  ],
  providers: [],
})
export class ProductModule { }
