import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core/core.module';
import { ProductModule } from '../product.module';

import { ProductService } from '../services/product.service';
import { ProductDialogComponent } from './product-dialog.component';
import { MatDialog } from '@angular/material/dialog';

describe('ProductDialogComponent', () => {
  let component: ProductDialogComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ProductService, HttpClient],
      imports: [
        BrowserAnimationsModule,
	ProductModule,
        HttpClientModule,
        CoreModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.inject(MatDialog);
    component = dialog.open(ProductDialogComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
