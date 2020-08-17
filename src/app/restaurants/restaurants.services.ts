import { Restaurant } from './restaurant/restaurant.model'

import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map'

import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { MEAT_API } from '../app.api'

//Decorator is used for use another decorator inside them.
@Injectable()
export class RestaurantsService {

  constructor(private http: Http) { }

  restaurants(): Observable<Restaurant[]> {

    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
  }
}