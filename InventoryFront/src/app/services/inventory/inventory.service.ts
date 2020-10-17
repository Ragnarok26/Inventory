import { Injectable } from '@angular/core';
import { ClientService } from '../client/client.service';
import { Product } from '../../models/product';
import { environment } from '../../../environments/environment';

@Injectable()
export class InventoryService {
  constructor(private webApiService: ClientService) { }

  public getList() {
    return this.webApiService.getAsPromise<Product[]>(`${environment.host}:${environment.port}/${environment.service}`)
      .then(
        response => {
          var result: Product[] = response.body;
          return result;
        }
      );
  }

  public add(product: Product) {
    return this.webApiService.postAsPromise<Product, any>(`${environment.host}:${environment.port}/${environment.service}`, product)
      .then(
        response => {
          var result: any = response.body;
          return result;
        }
      );
  }
}
