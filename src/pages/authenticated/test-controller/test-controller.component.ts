import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';

import { slideInDownAnimation } from '../../../app/animations/slideLeftDown.animation';
import { AnalyseService } from '../../../shared/services/analyse-api.service'; 
import { QuestionsContainer } from '../../../shared/questions-container';

@Component({
    selector: 'test-controller',
    templateUrl: 'test-controller.component.html',
    styleUrls: ['test-controller.css'],
    animations: [slideInDownAnimation]
})
export class TestControllerComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @ViewChild('modalTrigger') unfinishedTestMessageTrigger: HTMLElement;

    public selectedSickness: string;
    public allSicknesses: string[]; 
    showUnfinishedMessage: boolean;
    showTest: boolean = false;

    constructor(public analyseService: AnalyseService, public questionSet: QuestionsContainer) {
        // only show the test after the questions are retrieved
        questionSet.loading.subscribe(isComplete => {
            this.showTest = true;
        });
    }

    ngOnInit() {
        if(this.questionSet.isUnfinishedTest){
            this.showContinueUnfinishedTestMessage();
        } else {
            this.analyseService.hasUnfinishedTest().subscribe(result => {
                if(result) {
                    this.showContinueUnfinishedTestMessage();
                } else {
                    
                }
            });
        } 
    }

    showContinueUnfinishedTestMessage() {
        this.showUnfinishedMessage = true;
    }

    continueUnfinishedTest() {
        this.questionSet.loading.subscribe(done => {
            this.showTest = true;
            this.showUnfinishedMessage = false;
        });
        this.questionSet.useUnfinishedTest();
    }

    createNewTest() {
        this.showTest = false;
        this.showUnfinishedMessage = false;
        this.getSicknesses();
    }

    selectSickness(name: string) {
        this.selectedSickness = name;
    }

    getSicknesses() {
        this.analyseService.getSicknesses().subscribe(data => {
            this.allSicknesses = data;
        })
    }

    continue() {
        this.questionSet.useQuestionSetOf(this.selectedSickness);
    }

}