import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public session: any[] = [];
  usuario: string;
  password: string;
  alerta = '';
  cssAlerta = 'ocultar';
  cssLoadDisplay = 'ocultar';
  idLogin = 0;

  user = {
    loggedIn: false,
    id: '',
    token: ''
  };

  prueba = {
    id: '',
    loggedIn: false,
token:''
  };





  constructor(public router: Router, public http: HttpClient, public activate: ActivatedRoute, public alertController: AlertController) { }



  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Contraseña Incorrecta ',
      message: 'Verifique su usuario y contraseña .',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Bienvenido ',
      message: 'Sistema de Productos.',
      buttons: ['OK']
    });

    await alert.present();
  }
  public login() {
     this.prueba.token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
console.log(this.prueba.token);
    this.cssLoadDisplay = 'mostrar';
    let data: Observable<any>;
    //OJO-Me toco ponerlo de manera local, ya que no cuento con un hosting.
    data = this.http.get('http://localhost/pruebaProductos/api.php?opcion=1&usuario=' + this.usuario + '&password=' + this.password + '&token=' + this.prueba.token);

    data.subscribe(result => {
      if (result.id == 0) {
        this.session = result;
        this.alerta = '¡Usuario y/o contraseña incorrecta!';
        this.cssAlerta = 'mostrar';
        this.cssLoadDisplay = 'ocultar';
        this.presentAlert();
      } else {
        this.session = result;
        this.idLogin = result.id;
        this.prueba.id = result.id;
        this.prueba.loggedIn = true;
        this.router.navigate(['/home', this.prueba]);
        this.cssLoadDisplay = 'ocultar';
        this.presentAlert2();
      }
    })
  }

  

  ngOnInit() {

    
  }

}
