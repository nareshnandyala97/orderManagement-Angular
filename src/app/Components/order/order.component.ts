import { Component, OnInit } from '@angular/core';
import Order from 'src/app/Entity/order';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})

export class UserorderComponent implements OnInit {
  alert:boolean=false;
  order: Order = new Order();
  orders: Order[] = [];

  // deleteRow(user, index) {
  //   const observable = this.OrderService.deleteUser(user);
  //   observable.subscribe((response: any) => {
  //     console.log(response);
  //     this.users.splice(index, 1);
  //   });
  // }

  // deletePost(){
  //   this.orderService.deletePost()
  // }
  // deleteRow(order: Order, index:number) {
  //   console.log(index);
  //   const observable = this.orderService.deleteOrder(order);
  //   observable.subscribe((response: any) => {
  //     console.log(response);
  //     this.orders.splice(index, 1);
  //   });
  // }
  save() {
    // console.log(this.user.name);
    // console.log(this.user.age);
    const observable = this.orderService.createOrder(this.order);
    observable.subscribe(
      (response: any) => {
        console.log(response);
        this.orders.push(response);
      },
      function (error) {
        console.log(error);
        alert('Something went wrong please try again!');
      }
    );
    this.alert=true;
  }


  // sort() {
  //   this.orders.sort(function (user1, user2) {
  //     return user1.price - user2.price;
  //   });
  // }

  

  constructor(public orderService: OrderService) {}

  ngOnInit(): void {
    // const promise = this.orderService.getOrders();
    // promise.subscribe((response) => {
    //   console.log(response);
    //   this.orders = response as Order[];
    // });
  }
}
