import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[]=[];
  cargando_productos:boolean = true;

  constructor(private http:Http) {

      this.cargar_productos();

   }

   public cargar_productos(){
    //  if (this.productos.length === 0) {
        this.http.get("https://paginaweb-6d81a.firebaseio.com/productos_idx.json")
                  .subscribe( res => {
                      console.log(res.json());
                      this.cargando_productos = false
                      this.productos = res.json();
                  })
    //  }
   }





}
