import { Pizza } from './pizza.model';

export interface Order {
    item: Pizza;
    amount: number;
}
