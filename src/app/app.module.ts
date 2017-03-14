import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormWizardModule } from 'angular2-wizard'
import { RouterModule, Routes } from '@angular/router';

import { routing } from './app.routing';
import { Menu } from '../pages/menu/menu.component';
import { AppComponent } from './app.component';
import { AnalysisWizard } from '../pages/wizard/analysis-wizard.component'
import { AudioRecorder } from '../pages/recorder/audio-recorder.component'
import { Step } from '../pages/wizard/steps/step.component';
import { PageNotFoundComponent } from '../pages/404/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalysisWizard,
    AudioRecorder,
    Step,
    PageNotFoundComponent,
    Menu
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    FormWizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
