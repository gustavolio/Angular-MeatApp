import { NgModule } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.services';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { OrderService } from 'app/order/order.service';


@NgModule({
    providers: [
        RestaurantsService,
        ShoppingCartService,
        OrderService
    ],
})
export class CoreModule { }
