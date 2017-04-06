import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { slideInDownAnimation } from '../../../app/animations/slideLeftDown.animation';
import { Authenticator } from '../../../shared/authenticator';
import { AnalyseService } from '../../../shared/services/analyse-api.service';
import { QuestionsContainer } from '../../../shared/questions-container';

@Component({
    selector: 'homepage',
    templateUrl: 'homepage.component.html',
    styleUrls: ['homepage.css'],
    animations: [ slideInDownAnimation ]
})
export class HomePage implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'absolute';
    
    private test_questions;

    constructor(public auth: Authenticator, public analyseService: AnalyseService, public questionSet: QuestionsContainer, private router: Router) {
        this.questionSet.loading.subscribe(isComplete => {
            router.navigateByUrl('/analyse');
        });
    }

    ngOnInit() { }

    startTest() {
        if(this.auth.currentUser.unfinished_test) {
           this.questionSet.useUnfinishedTest();
        }
        else {
            this.router.navigateByUrl('/analyse');
        }
    }
}