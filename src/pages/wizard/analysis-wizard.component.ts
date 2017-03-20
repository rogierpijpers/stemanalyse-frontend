import { Component } from '@angular/core';

@Component({
  selector: 'analysis-wizard',
  templateUrl: 'analysis-wizard.component.html',
  styleUrls: ['analysis-wizard.component.css']
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
      content : 'Lorem ipsum dolor sit amet, \nconsectetur adipiscing elit. Nulla sed sapien vitae nisi imperdiet blandit sollicitudin sit amet nisl. \nDonec tempus euismod nisl, non gravida turpis viverra ac. \nPhasellus interdum, odio sed lacinia facilisis, tortor arcu imperdiet metus, sit amet \ninterdum nulla sapien sit amet neque. Mauris non imperdiet \nlectus. In enim ex, condimentum in risus in, porttitor pulvinar\n mauris. Nulla congue tortor nunc. Duis est urna, feugiat a dictum ut, \nmattis eget dolor. Praesent vulputate hendrerit egestas. Maecenas ligula magna,\n laoreet non tellus non, elementum euismod mauris. \nSuspendisse nunc mauris, porta ut pellentesque sed, sodales \net ex. Etiam faucibus accumsan fringilla. Cras ut tempus nulla. \nAliquam dictum sollicitudin dui ac porttitor. \nSed sit amet turpis non odio tempus placerat porta lacinia purus',
      finished: true
    }
    this.second_step = {
      title : 'Opname 1',
      content : 'Lorem ipsum dolor sit amet, \nconsectetur adipiscing elit. Nulla sed sapien vitae nisi imperdiet blandit sollicitudin sit amet nisl. \nDonec tempus euismod nisl, non gravida turpis viverra ac. \nPhasellus interdum, odio sed lacinia facilisis, tortor arcu imperdiet metus, sit amet \ninterdum nulla sapien sit amet neque. Mauris non imperdiet \nlectus. In enim ex, condimentum in risus in, porttitor pulvinar\n mauris. Nulla congue tortor nunc. Duis est urna, feugiat a dictum ut, \nmattis eget dolor. Praesent vulputate hendrerit egestas. Maecenas ligula magna,\n laoreet non tellus non, elementum euismod mauris. \nSuspendisse nunc mauris, porta ut pellentesque sed, sodales \net ex. Etiam faucibus accumsan fringilla. Cras ut tempus nulla. \nAliquam dictum sollicitudin dui ac porttitor. \nSed sit amet turpis non odio tempus placerat porta lacinia purus',
      finished: false
    }
    this.third_step = {
      title : 'Opname 2',
      content : 'Lorem ipsum dolor sit amet, \nconsectetur adipiscing elit. Nulla sed sapien vitae nisi imperdiet blandit sollicitudin sit amet nisl.',
      finished: false
    }
    this.fourth_step = {
      title : 'Opname 3',
      content : 'Lorem ipsum dolor sit amet, \nconsectetur adipiscing elit. Nulla sed sapien vitae nisi imperdiet blandit sollicitudin sit amet nisl.',
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
