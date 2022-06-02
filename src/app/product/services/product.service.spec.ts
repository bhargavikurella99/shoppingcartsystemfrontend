import { TestBed, inject } from '@angular/core/testing';
import { ProductService } from './product.service';

import { CoreModule } from '../../core/core.module';

describe('SidenavSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductService,
      ],
      imports: [
        CoreModule,
      ],
    });
  });

  it('should create', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));
});
