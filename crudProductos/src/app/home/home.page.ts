import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public items:any;
  idUser: number;
usuarios:any;
prueba = {
  id: '',
  loggedIn: '',
 token:''
};
id = this.activate.snapshot.paramMap.get('id');


  constructor(public router: Router, public activate: ActivatedRoute, public http: HttpClient) {
    this.verUsuarios();
    this.loadUser();
  }



  loadUser() {
    let data: Observable<any>;
    data = this.http.get('http://localhost/pruebaProductos/api.php?opcion=3' + '&id=' + this.id);
    data.subscribe(result => {
      this.items = result;
      console.log(this.items);
    })

  }
  verUsuarios(){
    let data: Observable<any>;
    data = this.http.get('http://localhost/pruebaProductos/api.php?opcion=2');
    data.subscribe(result => {
      this.usuarios = result;
      console.log(this.usuarios);
    })


  }
  navegarProductos() {
    this.router.navigate(["/lista-productos", this.prueba]);
  }
  navegarAggProductos(){

    this.router.navigate(["/add-productos", this.prueba]);
  }
  cerrarSesion(){
    this.router.navigate(["/login"]);


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

      if (result.id == null) {
        this.idUser = result.id;
      } else {
        this.idUser = result.id;
      
      }
      console.log(this.idUser);
      
    })
  }

}
