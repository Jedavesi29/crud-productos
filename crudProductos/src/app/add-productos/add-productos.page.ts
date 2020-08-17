import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-add-productos',
  templateUrl: './add-productos.page.html',
  styleUrls: ['./add-productos.page.scss'],
})
export class AddProductosPage implements OnInit {
nombre:string;
cantidad:number;
precio:number;
prueba= {
id:'',
loggedIn:'',
token:''

};

productos:any;

  constructor(public router: Router, public activate: ActivatedRoute, public http: HttpClient,private camera: Camera,public alertController: AlertController) { }


navegarLista(){

  this.router.navigate(["/lista-productos", this.prueba]);

}
takePicture(){
const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.FILE_URI,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64 (DATA_URL):
  let base64Image = 'data:image/jpeg;base64,' + imageData;
 
}, (err) => {
 // Handle error
});
}


async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Producto Agregado',
    //subHeader: 'Ojo',
    message: 'Este producto se agrego correctamente.',
    buttons: ['OK']
  });

  await alert.present();
}
async presentAlert2() {
  const alert = await this.alertController.create({
    header: 'Producto No Agregado',
    //subHeader: 'Ojo',
    message: 'Este producto no fue agregado.',
    buttons: ['OK']
  });

  await alert.present();
}

crearProductos() {
  
  let data: Observable<any>;
  data = this.http.get('http://localhost/pruebaProductos/api.php?opcion=7'+'&nombre='+this.nombre + '&cantidad='+ this.cantidad + '&precio='+this.precio + '&token='+ this.prueba.token);
  data.subscribe(result => {

    if (result.status == 1) {
      this.presentAlert();
    
    }else{
      this.presentAlert2();
    }

  })
}

  ngOnInit() {

    this.prueba.id = this.activate.snapshot.paramMap.get('id');
    this.prueba.loggedIn = this.activate.snapshot.paramMap.get('loggedIn');
  this.prueba.token=this.activate.snapshot.paramMap.get('token');

    let data: Observable<any>;
    data = this.http.get('http://localhost/pruebaProductos/api.php?opcion=3' + '&id=' + this.prueba.id);
    data.subscribe(result => {
      //this.items = result;
      console.log('http://localhost/pruebaProductos/api.php?opcion=3' + '&id=' + this.prueba.id);

    
      
    })
  }

  }


