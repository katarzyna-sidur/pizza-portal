import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalOrderComponent } from '../modal-order/modal-order.component';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaService } from 'src/app/services/pizza.service';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    pizzas: Pizza[];
    title = 'Our Menu';
    bsModalRef: BsModalRef;
    pizza: Pizza;

    constructor(
        private route: ActivatedRoute,
        private pizzaService: PizzaService,
        private router: Router,
        private modalService: BsModalService,
    ) { }

    ngOnInit() {
        //  this.pizzaService.getPizzas().subscribe((data) => {
        //    this.pizzas = data;
        // });
        this.pizzas = this.route.snapshot.data['showPizzas'];
    }
    openModalWithComponent(pizza: Pizza) {
        this.bsModalRef = this.modalService.show(ModalOrderComponent);
        (<ModalOrderComponent>this.bsModalRef.content).pizza = pizza;
    }


}
