import { Component, OnInit, Input, HostBinding} from '@angular/core';
import { Router } from '@angular/router';

import { fadeInOutAnimation } from '../../app/animations/fadeInOut.animation';
import { Authenticator } from '../../shared/authenticator';

@Component({
    selector: 'stemanalyse-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.css'],
    animations: [fadeInOutAnimation]
})
export class Menu {
    @HostBinding('@routeAnimation') routeAnimation = true;
    
    public menuOpen: boolean;

    constructor(public auth: Authenticator) {
        this.menuOpen = false;
    }

    toggleMenu() {
        this.menuOpen = this.menuOpen ? false : true;
    }

    logout() {
        this.auth.logout();
    }
}