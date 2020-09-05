import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.services';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'mt-reviews',
    templateUrl: './reviews.component.html',
    animations: [
        trigger('reviewAppeared', [
            state('ready', style({ opacity: 1 })),
            transition('void => ready', [
                style({ opacity: 0, transform: 'translateY(-20px)' }),
                animate('300ms 0s ease-in')
            ])
        ])
    ]
})
export class ReviewsComponent implements OnInit {

    reviewState = 'ready';

    reviews?: Observable<any>;

    constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.reviews = this.restaurantService.reviewsOfRestaurant(this.route.parent.snapshot.params['id']);
    }

}
