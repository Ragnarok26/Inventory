import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory/inventory.service';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { Product } from '../../models/product';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: [
    './inventory.component.scss',
    '../../../../node_modules/primeflex/primeflex.css'
  ]
})
export class InventoryComponent implements OnInit {
  products: Product[];
  loading: boolean;
  displayDialog: boolean;
  newProduct: Product | null;
  summaryCost: number;
  summaryIva: number;
  summaryPrice: number;

  constructor(private inventoryService: InventoryService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.summaryCost = 0;
    this.summaryIva = 0;
    this.summaryPrice = 0;
    this.load();
  }

  onCostChangeEvent(event): void {
    let value: number = parseFloat(String(event.target.value).replace("$", "").split(",").join(""));
    this.newProduct.iva = value * .16;
    this.newProduct.precio = value + this.newProduct.iva;
  }

  onPriceChangeEvent(event): void {
    let value: number = parseFloat(String(event.target.value).replace("$", "").split(",").join(""));
    this.newProduct.iva = (value * .16) / 1.16;
    this.newProduct.costo = value - this.newProduct.iva;
  }

  show(): void {
    this.newProduct = new Product();
    this.displayDialog = true;
  }

  cancel(): void {
    this.newProduct = null;
    this.loading = false;
    this.displayDialog = false;
  }

  load(): void {
    this.displayDialog = false;
    this.products = [];
    this.loading = true;
    this.inventoryService.getList()
      .then(
        (response: Product[]) => {
          this.products = response;
          this.summaryCost = this.products.reduce((a, b) => a + (b['costo'] || 0), 0);
          this.summaryIva = this.products.reduce((a, b) => a + (b['iva'] || 0), 0);
          this.summaryPrice = this.products.reduce((a, b) => a + (b['precio'] || 0), 0);
          this.loading = false;
        }
      )
      .catch(
        (ex: HttpErrorResponse) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: `Error ${ex.status}: No se pudo obtener el listado de productos. Favor de proporcionar el código de error al administrador del sistema.` });
          this.loading = false;
        }
      )
  }

  add(): void {
    this.loading = true;
    this.displayDialog = false;
    this.inventoryService.add(this.newProduct)
      .then(
        (response: any) => {
          this.messageService.add({ severity: 'success', summary: `Exitoso`, detail: `Se ha agregado el producto.` });
          this.displayDialog = false;
          this.loading = false;
          this.newProduct = null;
          this.load();
        }
      )
      .catch(
        (ex: HttpErrorResponse) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: `Error ${ex.status}: No se pudo agregar el producto. Favor de proporcionar el código de error al administrador del sistema.` });
          this.loading = false;
          this.displayDialog = true;
        }
      )
  }
}
