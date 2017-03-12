import { Component } from '@angular/core';
import { Step } from './steps/step.component';

@Component({
  selector: 'analysis-wizard',
  templateUrl: './analysis-wizard.component.html',
  styleUrls: ['./analysis-wizard.component.css']
})
export class AnalysisWizard {
  private title;
  private recordings;

  first_step;
  second_step;
  third_step;
  fourth_step;
  final_step;

  constructor(){
    this.title = 'Stemanalyse';
    this.recordings = [];

    this.first_step = {
      title : 'Uitleg',
      content : 'Content',
      finished: true
    }
    this.second_step = {
      title : 'Opname 1',
      content : 'Content',
      finished: false
    }
    this.third_step = {
      title : 'Opname 2',
      content : 'Content',
      finished: false
    }
    this.fourth_step = {
      title : 'Opname 3',
      content : 'Content',
      finished: false
    }
    this.final_step = {
      title : 'Afsluiting',
      content : 'Content'
    }
  }

  onComplete = function(){
    this.isCompleted = true;
    console.log(this.recordings);
  }

  addRecording(step){
    console.log(step);
    this.recordings.push(step.getRecording());
  }
}
