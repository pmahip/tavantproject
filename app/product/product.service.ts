
import { Injectable } from '@angular/core';
import { IProduct } from './product';

import { Http,HttpModule,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

@Injectable()
export class ProductService{
    
    private productURL="api/products/products.json"

    constructor(private _http:Http){

    }
      getProduct():Observable<IProduct>{
            return this._http.get(this.productURL)
            .map((response : Response) => <IProduct[]> response.json())
            .do(data => console.log('ALL:' + JSON.stringify(data)))
            .catch(this.handleError)
    }

    private handleError(error : Response){
            console.error(error);
            return Observable.throw(error.json().error || 'Server Error')
    }
    // getProduct() : IProduct[]{
    //     return[
    //         {
    //             "productId": 1,
    //             "productName": "Angular",
    //             "productCode": "NG-0011",
    //             "releaseDate": "March 19, 2016",
    //             "description": "Leaf rake with 48-inch wooden handle.",
    //             "price": 19.95,
    //             "starRating": 3.4,
    //             "imageUrl": "https://www.ag-grid.com/images/angular2.png"
    //         },
    //         {
    //             "productId": 2,
    //             "productName": "Node Js",
    //             "productCode": "ND-0023",
    //             "releaseDate": "March 18, 2016",
    //             "description": "15 gallon capacity rolling garden cart",
    //             "price": 32.99,
    //             "starRating": 4.2,
    //             "imageUrl": "https://node-os.com/assets/images/nodejs.png"
    //         }]
    // }
}