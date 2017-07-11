import { NgModule } from '@angular/core';
import { ProductListComponent }  from '../product/product-list.component';
import { ProductDetailComponent }  from '../product/product-detail.component';
import { ProductFilterPipe }  from '../product/product.filter.pipe';

import { ProductService }  from '../product/product.service';
import { ProductGuardService }  from '../product/product-guard.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
      SharedModule,
        RouterModule.forRoot([
            {path:'products',component:ProductListComponent},
            {path:'products/:id',canActivate:[ProductGuardService],component:ProductDetailComponent},
            ])
        ],
    declarations: [  
    ProductListComponent,
    ProductFilterPipe ,
    ProductDetailComponent,
    ],
    providers: [ProductService,ProductGuardService],
})
export class ProductModule { }
