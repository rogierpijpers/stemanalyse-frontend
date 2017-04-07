import { Injectable, EventEmitter } from '@angular/core';

import { AnalyseService } from './services/analyse-api.service';
import { Question } from './models/question.model';

/**
 * Since Angular doesn't support binding to @Input() values with components
 * made by the Router, a shared service has been made to make sure the correct
 * questions will be used for the analysis.
 */
@Injectable()
export class QuestionsContainer {
    public loading: EventEmitter<any> = new EventEmitter<any>();
    public questions: Question[];

    public isUnfinishedTest: boolean = false; 

    constructor(public analyseService: AnalyseService) { }

    useUnfinishedTest() {
        this.analyseService.getUnfinishedTest().subscribe(data => {
            this.questions = data;
            this.isUnfinishedTest = true;
            this.loading.emit(true);
        });
    }

    useQuestionSetOf(sickness: string) {
        this.analyseService.getQuestions(sickness.toUpperCase()).subscribe(data => {
            this.questions = data;
            this.isUnfinishedTest = false;
            this.loading.emit(true);
        });
    }


}