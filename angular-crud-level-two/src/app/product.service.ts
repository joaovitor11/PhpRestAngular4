import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Product } from './product';
 
@Injectable()
 
// Service for products data.
export class ProductService {
 
    // We need Http to talk to a remote server.
    constructor(private _http : Http){ }
 
    // Get list of products from remote server.
    readProducts(): Observable<Product[]>{
        return this._http
            .get("http://localhost/RestApiPHP/api/product/read.php")
            .map(res => res.json());
    }

    // Send product data to remote server to create it.
createProduct(product): Observable<Product>{
 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
 
    return this._http.post(
        "http://localhost/RestApiPHP/api/product/create.php",
        product,
        options
    ).map(res => res.json());
}
 
}