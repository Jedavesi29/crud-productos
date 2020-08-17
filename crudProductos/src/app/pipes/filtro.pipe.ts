import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any, texto: string): any {

    if (texto.length === 0) {
      return arreglo;

    }
    texto = texto.toLowerCase();

    return arreglo.filter(item => {
      return item.nombre.toLowerCase().includes(texto) || item.fecha.toLowerCase().includes(texto);
      //item.nombre2.toLowerCase().includes(texto);
      //item.apellido1.toLowerCase().includes(texto);
      //item.apellido2.toLowerCase().includes(texto);
     // return item;
    });


  }
  

}
