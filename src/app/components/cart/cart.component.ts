import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderPizzaService } from 'src/app/services/order-pizza.service';




@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    title = 'Your Order';
    orderlist: Array<Order>;

    constructor(private orderService: OrderPizzaService) { }

    ngOnInit() {
        this.orderlist = this.orderService.orderList;
    }

    changeAmount(item: Order, value: number) {
        this.orderService.changeAmount(item, value);
    }

    removeOrder (order: Order) {
        this.orderService.removeOrder(order.item.id);
    }

    getTotalPrice() {
       return this.orderService.sumTotal();
    }
}
