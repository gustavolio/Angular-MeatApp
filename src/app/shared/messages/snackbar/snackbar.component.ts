import { Component, OnInit } from '@angular/core';
/*
 Old import => @angular/core/src/animation/dsl
 import { trigger, state, style, transition, animate } from '@angular/core/src/animation/dsl';
 New import => @angular/animations
*/
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NotificationService } from '../notifications.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'mt-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.css'],
    animations: [
        trigger('snack-visibiliy', [
            state('hidden', style({
                opacity: 0,
                bottom: '0px'
            })),
            state('visible', style({
                opacity: 1,
                bottom: '30px'
            })),
            transition('hidden => visible', animate('500ms 0ms ease-in')),
            transition('visible => hidden', animate('500ms 0ms ease-out')),
        ])
    ]
})
export class SnackbarComponent implements OnInit {

    message: string;
    snackVisibility: string = "hidden";

    constructor(private notificationService: NotificationService) { }

    ngOnInit() {
        //Erro somente no VS code.
        this.notificationService.notifier
            .do(message => {
                this.message = message
                this.snackVisibility = 'visible'
        }).switchMap(message => Observable.timer(3000))
          .subscribe(timer => this.snackVisibility = 'hidden')
    }

}