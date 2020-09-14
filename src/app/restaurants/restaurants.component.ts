import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.services';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/from';

@Component({
    selector: 'mt-restaurants',
    templateUrl: './restaurants.component.html',
    animations: [
        trigger('togglesearch', [
            state('hidden', style({
                opacity: 0,
                "max-height": "0px",
            })),
            state('visible', style({
                opacity: 1,
                "max-height": "70px",
                "margin-top": "20px"
            })),
            transition('* => *', animate('200ms 0s ease-in-out'))
        ])
    ]
})
export class RestaurantsComponent implements OnInit {

    searchBarState = 'hidden'; 
    restaurants: Restaurant[];

    searchForm: FormGroup;
    searchControl: FormControl;

    constructor(private restaurantsService: RestaurantsService,
                private fb: FormBuilder) { }

    ngOnInit() {
        this.searchControl = this.fb.control('');
        this.searchForm = this.fb.group({
            searchControl: this.searchControl
        });

        this.searchControl.valueChanges
            .debounceTime(500) //Aguarda 500 milisegundos
            .distinctUntilChanged() //Se a query for igual não modifica
            .switchMap(searchTerm => this.restaurantsService
                .restaurants(searchTerm) //Busca os restaurantes com base no seachTerm
                .catch(error => Observable.from([])))
            .subscribe(restaurants => this.restaurants = restaurants); //Stribui o resultado à váriavel restaurants do componente

        this.restaurantsService.restaurants().
            subscribe(restaurants => this.restaurants = restaurants);
        
    }

    toggleSeach() {
        this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
    }
}
