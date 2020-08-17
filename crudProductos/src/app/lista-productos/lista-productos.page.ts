import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.page.html',
  styleUrls: ['./lista-productos.page.scss'],
})
export class ListaProductosPage implements OnInit {
  id: '';
idProducto:number;
nombre:string;
cantidad:number;
precio:number;
productos:any;

buscar='';





  constructor(public router: Router, public activate: ActivatedRoute, public http: HttpClient, public alertController: AlertController) { 
this.loadProductos();

  }
  token=this.activate.snapshot.paramMap.get('token');

  doRefresh(event) {
    console.log('Begin async operation');
    let data: Observable<any>;
    data = this.http.get('http://localhost/pruebaProductos/api.php?opcion=4');
    data.subscribe(result => {
      this.productos = result;

      console.log('Async operation has ended');
      event.target.complete();
      2000
    });
  }

  loadProductos() {
    let data: Observable<any>;
    data = this.http.get('http://localhost/pruebaProductos/api.php?opcion=4');
    data.subscribe(result => {
      this.productos = result;
    })
  }

  buscarProducto(event){

    const texto= event.target.value;
    
    this.buscar=texto;
      }

  EditRecord(record) {

    record.isEdit = true;
    record.editNombre = record.nombre;
    record.editCantidad = record.cantidad;
    record.editPrecio = record.precio;
    
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Producto Modificado',
      //subHeader: 'Ojo',
      message: 'Este producto ya se modifico correctamente.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Producto Eliminado',
      //subHeader: 'Ojo',
      message: 'Este producto ya se elimino correctamente.',
      buttons: ['OK']
    });

    await alert.present();
  }

  actualizarProductos(recordRow) {

    this.idProducto = recordRow.id;
    this.nombre = recordRow.editNombre;
    this.cantidad = recordRow.editCantidad;
    this.precio = recordRow.editPrecio;
   
    let data: Observable<any>;
    data = this.http.get('http://localhost/pruebaProductos/api.php?opcion=5' + '&id=' + this.idProducto + '&nombre=' + this.nombre + '&cantidad=' + this.cantidad + '&precio=' + this.precio + '&token='+this.token );
    data.subscribe(result => {

      console.log('http://localhost/pruebaProductos/api.php?opcion=5' + '&id=' + this.idProducto + '&nombre=' + this.nombre + '&cantidad=' + this.cantidad + '&precio=' + this.precio + '&token='+this.token );
      // this.items = result;
      if (result.status == 3) {
        this.id = result.id;
        this.presentAlert();
        //console.log(this.id);
        // this.alerta = "El Usuario se modifico correctamente";
        recordRow.isEdit = false;
      }
    })
  }

  eliminarProductos(recordRow) {

    this.idProducto = recordRow.id;
   
    let data: Observable<any>;
    data = this.http.get('http://localhost/pruebaProductos/api.php?opcion=6' + '&id=' + this.idProducto + '&token='+this.token);
    data.subscribe(result => {

      console.log('http://localhost/pruebaProductos/api.php?opcion=6' + '&id=' + this.idProducto + '&token='+this.token);
      // this.items = result;
      if (result.status == 1) {
        this.id = result.id;
        this.presentAlert2();
        //console.log(this.id);
        // this.alerta = "El Usuario se modifico correctamente";
        recordRow.isEdit = false;
      }
    })
  }


  ngOnInit() {
  }

}
