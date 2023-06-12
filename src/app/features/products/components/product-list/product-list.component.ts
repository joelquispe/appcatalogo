import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products=[
    {
      name:"Hamburguesa",
      description:"Dulce de producto",
      image:"https://recetasdedon.com.mx/wp-content/uploads/2022/06/hamburguesas-historia-caracteristicas-preparacion-y-tipos.jpg"
    },{
      name:"Hamburguesa",
      description:"Dulce de producto",
      image:"https://recetasdedon.com.mx/wp-content/uploads/2022/06/hamburguesas-historia-caracteristicas-preparacion-y-tipos.jpg"
    },{
      name:"Hamburguesa",
      description:"Dulce de producto",
      image:"https://recetasdedon.com.mx/wp-content/uploads/2022/06/hamburguesas-historia-caracteristicas-preparacion-y-tipos.jpg"
    },{
      name:"Hamburguesa",
      description:"Dulce de producto",
      image:"https://recetasdedon.com.mx/wp-content/uploads/2022/06/hamburguesas-historia-caracteristicas-preparacion-y-tipos.jpg"
    },{
      name:"Hamburguesa",
      description:"Dulce de producto",
      image:"https://recetasdedon.com.mx/wp-content/uploads/2022/06/hamburguesas-historia-caracteristicas-preparacion-y-tipos.jpg"
    },{
      name:"Hamburguesa",
      description:"Dulce de producto",
      image:"https://recetasdedon.com.mx/wp-content/uploads/2022/06/hamburguesas-historia-caracteristicas-preparacion-y-tipos.jpg"
    },{
      name:"Hamburguesa",
      description:"Dulce de producto",
      image:"https://recetasdedon.com.mx/wp-content/uploads/2022/06/hamburguesas-historia-caracteristicas-preparacion-y-tipos.jpg"
    },{
      name:"Hamburguesa",
      description:"Dulce de producto",
      image:"https://recetasdedon.com.mx/wp-content/uploads/2022/06/hamburguesas-historia-caracteristicas-preparacion-y-tipos.jpg"
    },{
      name:"Hamburguesa",
      description:"Dulce de producto",
      image:"https://recetasdedon.com.mx/wp-content/uploads/2022/06/hamburguesas-historia-caracteristicas-preparacion-y-tipos.jpg"
    }
  ];

  private route= inject(ActivatedRoute);
  constructor(){
    this.route.queryParamMap.subscribe(params=>{
      console.log(params)
    })
  }

}
