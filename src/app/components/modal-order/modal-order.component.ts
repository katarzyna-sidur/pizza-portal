import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PizzaService } from 'src/app/services/pizza.service';
import { Pizza } from 'src/app/models/pizza.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderPizzaService } from 'src/app/services/order-pizza.service';
import { Order } from 'src/app/models/order.model';


@Component({
    selector: 'app-modal-order',
    templateUrl: './modal-order.component.html',
    styleUrls: ['./modal-order.component.css'],

})
export class ModalOrderComponent implements OnInit {

    pizza: Pizza;
    closeBtnName: string;
    pizzalist: Array<Pizza> = [];

    constructor(public bsModalRef: BsModalRef,
        private route: ActivatedRoute,
        private pizzaService: PizzaService,
        private orderService: OrderPizzaService,
        private router: Router) { }

    ngOnInit() {
    }

    saveOrder() {
        const order: Order = {
            amount: 1,
            item: this.pizza
        };

        this.orderService.addOrder(order);
    }

    goToCart() {
        this.router.navigate(['/cart']);
    }
}

