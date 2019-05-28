import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { PizzaService } from 'src/app/services/pizza.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalOrderComponent } from '../modal-order/modal-order.component';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
    providers: [
        { provide: CarouselConfig, useValue: { interval: 3500, noPause: false, showIndicators: true } }
    ]
})
export class SliderComponent implements OnInit {

    bsModalRef: BsModalRef;

    constructor(private pizzaService: PizzaService, private modalService: BsModalService) {

    }


    ngOnInit() {
    }

    orderItalianPizza() {
        const ITALIAN_PIZZA_ID = 1;

        this.pizzaService.getPizza(ITALIAN_PIZZA_ID).subscribe((data) => {
            this.bsModalRef = this.modalService.show(ModalOrderComponent);
            (<ModalOrderComponent>this.bsModalRef.content).pizza = data;
        });

    }

}
