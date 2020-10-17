import { TestBed } from '@angular/core/testing';

import { InventoryService } from './inventory.service';
import { ClientService } from '../client/client.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Product } from 'src/app/models/product';

describe('InventoryService', () => {
  let service: InventoryService;
  let client: ClientService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        InventoryService,
        ClientService,
        HttpClient
      ]
    });
    service = TestBed.inject(InventoryService);
    client = TestBed.inject(ClientService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get product list', () => {
    expect(service.getList()).toBeTruthy();
  });

  it('should post product', () => {
    let product = new Product();
    product.nombre = "Test 2";
    product.costo = 2.00;
    product.iva = .32; 
    product.precio = 2.32;
    expect(service.add(product)).toBeTruthy();
  });
});
