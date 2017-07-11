import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';

import { HttpModule } from '@angular/http';
import { WelcomeComponent }  from './home/welcome.component';
import { SalesComponent }  from './sales/sales.component';
import { ProductModule }  from './product/product.module';

@NgModule({
  imports: [ BrowserModule,
             
             HttpModule,
             ProductModule,
  RouterModule.forRoot([
    {path:'welcome',component:WelcomeComponent},
    {path:'sales',component:SalesComponent},
    {path:'',redirectTo:'welcome',pathMatch:'full'},
    {path:'***',redirectTo:'welcome',pathMatch:'full'}
    ])
  ],

  declarations: [ AppComponent,
                  WelcomeComponent,SalesComponent],
  bootstrap: [ AppComponent ],
  providers: [],
})
export class AppModule { }
