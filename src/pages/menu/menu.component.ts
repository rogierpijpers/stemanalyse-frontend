import { Component, OnInit, Input, state, trigger, style, animate, transition } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'stemanalyse-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.css'],
    animations: [
        trigger('fadeInOut', [
            state('in', style({opacity:1})),
            transition('void => *', [
                style({
                    opacity: 0
                }),
                animate('0.5s ease')
            ]),
            transition('* => void', [
                style({
                    opacity: 0
                }),
                animate('0.5s ease')
            ])
        ])
    ]
})
export class Menu {
    public menuOpen: boolean;

    public auth: {isLoggedIn: boolean} = {isLoggedIn: true}; 

    constructor() {
        this.menuOpen = false;
    }

    toggleMenu() {
        this.menuOpen = this.menuOpen ? false : true;
    }
}