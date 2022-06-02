import { TestBed, inject } from '@angular/core/testing';
import { CustomerService } from './customer.service';

import { CoreModule } from '../../core/core.module';

describe('SidenavSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CustomerService,
      ],
      imports: [
        CoreModule,
      ],
    });
  });

  it('should create', inject([CustomerService], (service: CustomerService) => {
    expect(service).toBeTruthy();
  }));
});
