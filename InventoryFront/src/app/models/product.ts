export class Product {
    id: number;
    nombre: string;
    costo: number;
    iva: number;
    precio: number;

    constructor() {
        this.id = 0;
        this.nombre = "";
        this.costo = 0.00;
        this.iva = 0.00;
        this.precio = 0.00;
    }
}