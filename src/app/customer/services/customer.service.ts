import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SearchCriteria } from '../../core/interfaces/search-criteria';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private urlService: string = 
    environment.restServiceRoot + 'customermanagement/v1/customer/';
  constructor(private http: HttpClient) {}
  getCustomer(
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
      customerName: searchTerms.customerName,
      email: searchTerms.email,
      gender: searchTerms.gender,
      mobileNumber: searchTerms.mobileNumber,
    };
    return this.http.post<any>(this.urlService + 'search', searchCriteria);
  }

  saveCustomer(data: any): Observable<Object> {
    const obj: any = {
      id: data.id,
      modificationCounter: data.modificationCounter,
      customerName: data.customerName,
      email: data.email,
      gender: data.gender,
      mobileNumber: data.mobileNumber,
    };
    return this.http.post(this.urlService, obj);
  }

  deleteCustomer(id: number): Observable<Object> {
    return this.http.delete(this.urlService + id);
  }

  searchCustomer(criteria: any): Observable<Object> {
    return this.http.post(this.urlService + 'search', {
      criteria: criteria,
    });
  }
}
