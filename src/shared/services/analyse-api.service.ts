import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { BaseService } from './base-service'; 
import { Question } from '../models/question.model';

@Injectable()
export class AnalyseService extends BaseService {

    constructor(http: Http) {
        super(http);
     }

    getQuestions(sickness: string): Observable<any> {
        //stub
        let q = new Question();
        let q1 = new Question();
        let q2 = new Question();
        q.type = 'main';
        q.title = 'Lees de volgende tekst op in de microfoon';
        q.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed sapien vitae nisi imperdiet blandit sollicitudin sit amet nisl. Donec tempus euismod nisl, non gravida turpis viverra ac. Phasellus interdum, odio sed lacinia facilisis, tortor arcu imperdiet metus, sit amet interdum nulla sapien sit amet neque. Mauris non imperdiet lectus. In enim ex, condimentum in risus in, porttitor pulvinar mauris. Nulla congue tortor nunc. Duis est urna, feugiat a dictum ut, mattis eget dolor. Praesent vulputate hendrerit egestas. Maecenas ligula magna, laoreet non tellus non, elementum euismod mauris. Suspendisse nunc mauris, porta ut pellentesque sed, sodales et ex. Etiam faucibus accumsan fringilla. Cras ut tempus nulla. Aliquam dictum sollicitudin dui ac porttitor. Sed sit amet turpis non odio tempus placerat porta lacinia purus';
        
        q1.type='speech_excercise';
        q2.type = 'speech_excercise';
        q1.title = 'Lees de volgende moeilijk woorden op';
        q2.title = 'Vertel wat u gisteren heeft gegeten';
        q1.text = 'Acroboot, Szczęście, onomatopoeia, Eyjafjallajökull';
        q2.text = 'Hint: Gerstepap';

        return Observable.of([q,q1,q2]);
    }

    getUnfinishedTest(): Observable<any> {
        //stub
        let q1 = new Question();
        let q2 = new Question();
    
        q1.type='speech_excercise';
        q2.type = 'speech_excercise';
        q1.title = 'Lees de volgende moeilijk woorden op';
        q2.title = 'Vertel wat u gisteren heeft gegeten';
        q1.text = 'Acroboot, Szczęście, onomatopoeia, Eyjafjallajökull';
        q2.text = 'Hint: Gerstepap';

        return Observable.of([q1,q2]);
    }

    getSicknesses(): Observable<any> {
        //stub
        return Observable.of(['DEMENTIA','ASPERGER', 'DOWN SYNDROM']);
    }

    hasUnfinishedTest(): Observable<boolean> {
        //stub
        return Observable.of(true);
    }
}