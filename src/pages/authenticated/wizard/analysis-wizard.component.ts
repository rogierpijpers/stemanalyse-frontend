import { Component, Input } from '@angular/core';
import { AnalyseService } from '../../../shared/services/analyse-api.service';
import { QuestionsContainer } from '../../../shared/questions-container';

@Component({
  selector: 'analysis-wizard',
  templateUrl: 'analysis-wizard.component.html',
  styleUrls: ['analysis-wizard.component.css']
})
export class AnalysisWizard {  
  private title: string;
  private recordings: any;
  private isCompleted: boolean;

  private explanation_step: any;
  private main_step: any;
  private sub_steps: any[] = [];
  private final_step: any;

  constructor(public analyseService: AnalyseService, public questionSet: QuestionsContainer){
    this.setup();
    this.isCompleted = false;
    
    this.title = 'Stemanalyse';
    this.recordings = [];

    this.explanation_step = {
      title : 'Uitleg',
      content : 'U krijgt zometeen een aantal oefeningen. Lees de tekst eerst door, klik vervolgens op "opnemen" en begin met praten. Als u de gehele tekst op heeft gelezen kunt u op "stoppen" klikken. Is alles goed gegaan? Klik dan op "Opslaan", hierna kunt u verder naar de volgende oefening. Is er iets misgegaan tijdens het opnemen? Klik dan op "Opnieuw"',
      finished: true
    }

    this.final_step = {
      title : 'Afsluiting',
      content : 'Wij danken u voor uw deelname aan deze test. U heeft alles opgenomen. \n\n Zodra u op "Done" klikt worden uw resultaten verwerkt en zullen zo spoedig mogelijk naar u worden verstuurd.'
    }
  }

  setup() {
      for(let question of this.questionSet.questions) {
        question.finished = false;
        if(question.type  == 'main') {
          this.main_step = question;
        } else {
          this.sub_steps.push(question);
        }
      }
  }

  subsFinished(): boolean {
    let result = true;
    for(let question of this.sub_steps) {
      if(question.finished = false) {
        result = false;
      }
    }
    return result;
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
