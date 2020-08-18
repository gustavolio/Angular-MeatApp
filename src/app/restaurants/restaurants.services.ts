import { Restaurant } from './restaurant/restaurant.model'

import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'

import { MEAT_API } from '../app.api'
import { ErrorHandler } from '../app.error-handle'
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model'

//Decorator is used for use another decorator inside them.
@Injectable()
export class RestaurantsService {

  constructor(private http: Http) { }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  restaurantsById(id: string): Observable<Restaurant> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }
}