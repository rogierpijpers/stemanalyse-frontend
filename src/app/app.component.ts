import { Component } from '@angular/core';
import { AnalysisWizard } from '../pages/wizard/analysis-wizard.component'
import { AudioRecorder } from '../pages/recorder/audio-recorder.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stemanalyse';
}


