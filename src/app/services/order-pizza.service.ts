import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderPizzaService {

    orderList: Array<Order> = [];
    private totalPrice: Subject<number> = new Subject<number>();

    constructor() {
        this.totalPrice.next(0);
    }

    sumTotal$() {
        return this.totalPrice.asObservable();
    }

    addOrder(order: Order) {
        this.orderList.push(order);

        this.totalPrice.next(this.sumTotal());
    }

    removeOrder(id: number) {
        const i = this.orderList.findIndex(e => e.item.id === id);
        if (i !== -1) {
            this.orderList.splice(i, 1);
        }

        this.totalPrice.next(this.sumTotal());
    }


    changeAmount(item: Order, value: number) {
        item.amount = item.amount + value;

        this.totalPrice.next(this.sumTotal());
    }

     sumTotal () {
        let total = 0;
         this.orderList.forEach((item) => {
             total += item.item.price * item.amount;
         });
         return total;
     }

}
