import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAccount } from '../Interface/account.interface';
import {map} from 'rxjs/operators';
import { API_DOMAIN, HTTP_HEADER } from '../shared/constant';



@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  create(value): Observable<IAccount> {
    return this.http.post<{data: IAccount}>(
      `${API_DOMAIN}emi`,
      value,
      {
        headers: HTTP_HEADER
      }
    ).pipe(
      map(res => {
        return res.data;
      })
    );
  }
  get(){
    return this.http.get<{datas: IAccount[]}>(
      `${API_DOMAIN}emi`,
      {
        params: {
          page: 1,
          limit: 10
        } as any,
        headers: HTTP_HEADER
      }
    )
      .pipe(
        map((respose) => {
          return respose.datas;
        })
      );
  }
}
