import { Component, OnInit } from '@angular/core';
import { OrderPizzaService } from './services/order-pizza.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    cartTotalSum = 0;

    constructor(private orderPizzaService: OrderPizzaService) {

    }

    ngOnInit(): void {
        this.orderPizzaService.sumTotal$().subscribe((result) => {
            this.cartTotalSum = result;
        });
    }

}
