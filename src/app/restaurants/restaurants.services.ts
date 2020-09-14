import { Restaurant } from './restaurant/restaurant.model'

import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'

import { MEAT_API } from '../app.api'
import { ErrorHandler } from '../app.error-handle'
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model'

//Decorator is used for use another decorator inside them.
@Injectable()
export class RestaurantsService {

    constructor(private http: HttpClient) { }

    restaurants(search?: string): Observable<Restaurant[]> {
        let params: HttpParams;
        if(search) {
            //O set precisa estar na mesma linha do new por que um obj HttpParent é imutavel
            params = new HttpParams().set('q', search);;
        }
        //A utilização do 'params' com o atributo generico 'q' permite a busca no json-server.
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, { params: params })
    }

    restaurantsById(id: string): Observable<Restaurant> {
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
    }

    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
    }
}