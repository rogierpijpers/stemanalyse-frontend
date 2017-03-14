import { Component } from '@angular/core';

@Component({
  selector: 'analysis-wizard',
  templateUrl: './analysis-wizard.component.html',
  styleUrls: ['./analysis-wizard.component.css']
})
export class AnalysisWizard {
  private title: string;
  private recordings: any;
  private isCompleted: boolean;

  private first_step: any;
  private second_step: any;
  private third_step: any;
  private fourth_step: any;
  private final_step: any;

  constructor(){
    this.isCompleted = false;
    
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

  onComplete(){
    this.isCompleted = true;
    console.log(this.recordings);
  }

  addRecording(step){
    console.log(step);
    this.recordings.push(step.getRecording());
  }
}
