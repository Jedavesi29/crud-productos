import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProductosPage } from './add-productos.page';

const routes: Routes = [
  {
    path: '',
    component: AddProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProductosPageRoutingModule {}
