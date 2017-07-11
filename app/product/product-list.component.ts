import { Component,OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector :'pm-product',
    templateUrl: 'app/product/product-list.component.html',
    
})

export class ProductListComponent implements OnInit{
    pageTitle:string="Product List"
    imageWidth:number=50
    imageHeight:number=20
    hideimage:boolean=false
    //lstFilter:string=
    products:IProduct[]
    errorMessage : string
    constructor(private _productService : ProductService){

    }

    toggleImage():void{
        this.hideimage=!this.hideimage
    }

    onRatingClicked(message:string):void{
        this.pageTitle ='Product List ' + message
    }
    ngOnInit(){
        //this.products=this._productService.getProduct();

        this._productService.getProduct()
        .subscribe(products => this.products=products,
        error => this.errorMessage =<any> error)
    }
    
}