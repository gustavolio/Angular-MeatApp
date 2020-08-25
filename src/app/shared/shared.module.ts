import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';

import { RestaurantsService } from 'app/restaurants/restaurants.services';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { OrderService } from 'app/order/order.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        InputComponent,
        RadioComponent,
        RatingComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        InputComponent,
        RadioComponent,
        RatingComponent
    ],
    providers: [],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                RestaurantsService,
                ShoppingCartService,
                OrderService
            ],
        }
    }
}
