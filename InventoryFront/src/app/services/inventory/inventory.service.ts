import { Injectable } from '@angular/core';
import { ClientService } from '../client/client.service';
import { Product } from '../../models/product';

@Injectable()
export class InventoryService {
  constructor(private webApiService: ClientService) { }

  public getList() {
    return this.webApiService.getAsPromise<Product[]>(`http://localhost:8080/inventory`)
      .then(
        response => {
          var result: Product[] = response.body;
          return result;
        }
      );
  }

  public add(product: Product) {
    return this.webApiService.postAsPromise<Product, any>(`http://localhost:8080/inventory`, product)
      .then(
        response => {
          var result: any = response.body;
          return result;
        }
      );
  }
}