import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core/core.module';
import { CustomerModule } from '../customer.module';

import { CustomerService } from '../services/customer.service';
import { CustomerDialogComponent } from './customer-dialog.component';
import { MatDialog } from '@angular/material/dialog';

describe('CustomerDialogComponent', () => {
  let component: CustomerDialogComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [CustomerService, HttpClient],
      imports: [
        BrowserAnimationsModule,
	CustomerModule,
        HttpClientModule,
        CoreModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.inject(MatDialog);
    component = dialog.open(CustomerDialogComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
