import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Ng2PaginationModule} from 'ng2-pagination'; //importing ng2-pagination

import { AppComponent } from './app.component';
import { ReadProductsComponent } from './read-products/read-products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ReadOneProductComponent } from './read-one-product/read-one-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';


@NgModule({
  declarations: [
    AppComponent,
    ReadProductsComponent,
    CreateProductComponent,
    ReadOneProductComponent,
    UpdateProductComponent,
    DeleteProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Ng2PaginationModule 
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
