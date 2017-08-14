import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[]=[];
  cargando:boolean = true;

  constructor(private http:Http) {

      this.cargar_productos();

   }

   public cargar_producto( cod:string){

      return this.http.get(`https://paginaweb-6d81a.firebaseio.com/productos/${ cod }.json`);
   }

   public cargar_productos(){

        this.http.get("https://paginaweb-6d81a.firebaseio.com/productos_idx.json")
                  .subscribe( res => {
                      // console.log(res.json());

                      // setTimeout(()=>{

                        this.cargando = false
                        this.productos = res.json();

                      // },1500)
                  })
   }





}
