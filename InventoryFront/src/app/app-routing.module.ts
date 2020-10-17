import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './components/inventory/inventory.component';

const routes: Routes = [
  {
  	path: '',
  	redirectTo: '/inventory',
  	pathMatch: 'full'
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
