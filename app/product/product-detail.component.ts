import { Component,OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector :'pm-productdetails',
    templateUrl: 'app/product/product-detail.component.html',
    
})
export class ProductDetailComponent implements OnInit{
    title :string ='Product Detaild';
    product :IProduct;


  constructor(private _route: ActivatedRoute,private _router: Router){

  }
    ngOnInit():void{
        let id=+this._route.snapshot.params['id'];
        this.title+=`:${id}`;
    }
    onBack():void{
        this._router.navigate(['/products']);
    }
}