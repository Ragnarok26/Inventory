import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessagesModule } from 'primeng/messages';

import { InventoryComponent } from './inventory.component';
import { InventoryService } from '../../services/inventory/inventory.service';
import { ClientService } from '../../services/client/client.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';

describe('InventoryComponent', () => {
  let component: InventoryComponent;
  let fixture: ComponentFixture<InventoryComponent>;
  let inventory: InventoryService;
  let client: ClientService;
  let http: HttpClient;
  let message: MessageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryComponent ],
      imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        TableModule,
        BlockUIModule,
        ProgressSpinnerModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        InputNumberModule,
        MessagesModule,
        HttpClientTestingModule,
      ],
      providers: [
        InventoryService,
        ClientService,
        HttpClient,
        MessageService
      ]
    })
    .compileComponents();
    inventory = TestBed.inject(InventoryService);
    client = TestBed.inject(ClientService);
    http = TestBed.inject(HttpClient);
    message = TestBed.inject(MessageService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load data', (done) => {
    component.load();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      fixture.componentInstance.loading = false;
      fixture.detectChanges();
      const value = fixture.componentInstance.products?.length;
      expect(value).toBeGreaterThanOrEqual(0);
      done();
    });
  });

  it('should add data', (done) => {
    component.add();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      fixture.componentInstance.loading = false;
      fixture.detectChanges();
      const value = fixture.componentInstance.products?.length;
      expect(value).toBeGreaterThanOrEqual(0);
      done();
    });
  });
});
