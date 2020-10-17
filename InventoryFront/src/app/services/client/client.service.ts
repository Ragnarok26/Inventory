import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class ClientService {
  constructor(private http: HttpClient) {
  }

  public getAsPromise<T>(url: string): Promise<HttpResponse<T>> {
    return this.http.get<T>(`${url}`, { observe: 'response' }).toPromise();
  }

  public postAsPromise<U, T>(url: string, body: U): Promise<HttpResponse<T>> {
    return this.http.post<T>(`${url}`, body, { observe: 'response' }).toPromise();
  }
}