import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProductosPageRoutingModule } from './add-productos-routing.module';

import { AddProductosPage } from './add-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProductosPageRoutingModule
  ],
  declarations: [AddProductosPage]
})
export class AddProductosPageModule {}
