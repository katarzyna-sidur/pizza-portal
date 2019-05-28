import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../services/pizza.service';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowPizzaService implements Resolve<Pizza[]> {

    pizza: Pizza;

  constructor(private pizzaService: PizzaService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Pizza[] | Observable<Pizza[]> | Promise<Pizza[]> {
        return this.pizzaService.getPizzas();
    }
}

