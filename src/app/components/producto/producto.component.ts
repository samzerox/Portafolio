import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent {

  producto: any = undefined;
  cod: string = undefined;
  cargando = true;

  constructor(private route: ActivatedRoute,
              private _ps: ProductosService) {

      route.params.subscribe(parametros => {

          _ps.cargar_producto( parametros['id'] )
                  .subscribe( res => {
                    this.cargando = false;
                    this.producto = res.json();
                    this.cod = parametros['id'];
                  });

      });


  }



}
