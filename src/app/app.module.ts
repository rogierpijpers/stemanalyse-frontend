import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormWizardModule } from 'angular2-wizard'

import { AppComponent } from './app.component';
import { AnalysisWizard } from './wizard/analysis-wizard.component'
import { AudioRecorder } from './recorder/audio-recorder.component'
import { Step } from './wizard/steps/step.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalysisWizard,
    AudioRecorder,
    Step
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormWizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
