import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/orders';


@Injectable({
  providedIn: 'root',
})
export class OrderService {
  getOrders() {
    return this.http.get(BASE_URL);
  }

  createOrder(order: { ordername: string; price: number; brand: string }) {
    return this.http.post(BASE_URL, order);
  }

  deleteOrder(order:any) {
    console.log("at http"+order.id);

    return this.http.delete(BASE_URL+"/"+order.id);
  }

  // deletePost(id:number){
  //   const url='${this.apiUrl/${}}'
  //   this.http.delete('this.apiUrl/${id}');
  // }

  constructor(public http: HttpClient) {}
}
