import { Component, OnInit } from '@angular/core';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { Message } from 'src/app/models/message.model';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
    selector: 'app-message-form',
    templateUrl: './message-form.component.html',
    styleUrls: ['./message-form.component.css'],
})
export class MessageFormComponent implements OnInit {

    message: Message = {
        firstName: null,
        lastName: null,
        message: null,
        email: null
    };

    alerts: any[] = [];

    constructor(private pizzaServie: PizzaService) { }

    ngOnInit() {
    }

    sendMessage(): void {
        this.pizzaServie.sendMessages(this.message).subscribe((data) => {

        });
        this.message.firstName = '';
        this.message.lastName = '';
        this.message.message = '';
        this.message.email = '';
    }

    addAlert(): void {
        this.alerts.push({
            type: 'success',
            msg: `Message send!`,
            timeout: 5000
        });
    }
    onClosed(dismissedAlert: AlertComponent): void {
        this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
    }

}
