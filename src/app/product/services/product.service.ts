import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SearchCriteria } from '../../core/interfaces/search-criteria';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private urlService: string = 
    environment.restServiceRoot + 'productmanagement/v1/product/';
  constructor(private http: HttpClient) {}
  getProduct(
    size: number,
    page: number,
    searchTerms: any,
    sort: any[],
  ): Observable<any> {
    const searchCriteria: SearchCriteria = {
      pageable: {
        pageSize: size,
        pageNumber: page,
        sort: sort,
      },
      productName: searchTerms.productName,
      quantity: searchTerms.quantity,
      price: searchTerms.price,
      customerId: searchTerms.customerId,
    };
    return this.http.post<any>(this.urlService + 'search', searchCriteria);
  }

  saveProduct(data: any): Observable<Object> {
    const obj: any = {
      id: data.id,
      modificationCounter: data.modificationCounter,
      productName: data.productName,
      quantity: data.quantity,
      price: data.price,
      customerId: data.customerId,
    };
    return this.http.post(this.urlService, obj);
  }

  deleteProduct(id: number): Observable<Object> {
    return this.http.delete(this.urlService + id);
  }

  searchProduct(criteria: any): Observable<Object> {
    return this.http.post(this.urlService + 'search', {
      criteria: criteria,
    });
  }
}
