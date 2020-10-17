import { TestBed } from '@angular/core/testing';

import { ClientService } from './client.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ClientService', () => {
  let service: ClientService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        ClientService,
        HttpClient
      ],
    });
    service = TestBed.inject(ClientService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data', () => {
    expect(service.getAsPromise("http://localhost:8080/inventory")).toBeTruthy();
  });

  it('should post data', () => {
    let item = { nombre: "Test 1", costo: 1.00, iva: .16, precio: 1.16 };
    expect(service.postAsPromise("http://localhost:8080/inventory", item)).toBeTruthy();
  });
});
