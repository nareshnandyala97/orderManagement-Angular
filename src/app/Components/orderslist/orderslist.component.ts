import { Component, OnInit } from '@angular/core';
import Order from 'src/app/Entity/order';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-orderslist',
  templateUrl: './orderslist.component.html',
  styleUrls: ['./orderslist.component.css']
})
export class OrderslistComponent implements OnInit {

  //constructor() { }
  order: Order = new Order();
  orders: Order[] = [];

  sort() {
    this.orders.sort(function (order1, order2) {
      return order1.price - order2.price;
    });
  }

  deleteRow(order: Order, index:number) {
    console.log(index);
    
    const observable = this.orderService.deleteOrder(order);
    observable.subscribe((response: any) => {
      console.log(response);
      this.orders.splice(index, 1);
    });
  }

  constructor(public orderService: OrderService) {}
  ngOnInit(): void {
    const promise = this.orderService.getOrders();
    promise.subscribe((response) => {
      console.log(response);
      this.orders = response as Order[];
    });
  }
  }
