import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormWizardModule } from 'angular2-wizard';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AuthenticatedRoutingModule } from './authenticated/authenticated.routing';
import { Authenticator } from '../shared/authenticator';
import { LoginApiService } from '../shared/services/login-api.service';
import { AnalyseService } from '../shared/services/analyse-api.service';
import { AuthGuard } from './authenticated/auth-guard';
import { QuestionsContainer } from '../shared/questions-container';

import { Menu } from '../pages/menu/menu.component';
import { PageNotFoundComponent } from '../pages/404/notfound.component';
import { LoginComponent } from '../pages/login/login.component';
import { LandingPageComponent } from '../pages/landingpage/landingpage.component';

import { AnalysisWizard } from '../pages/authenticated/wizard/analysis-wizard.component';
import { AudioRecorder } from '../pages/authenticated/recorder/audio-recorder.component';
import { Step } from '../pages/authenticated/wizard/steps/step.component';
import { TestControllerComponent } from '../pages/authenticated/test-controller/test-controller.component';
import { HomePage } from '../pages/authenticated/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    AnalysisWizard,
    AudioRecorder,
    Step,
    PageNotFoundComponent,
    Menu,
    HomePage,
    LoginComponent,
    LandingPageComponent,
    TestControllerComponent
  ],
  imports: [
    AuthenticatedRoutingModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    FormWizardModule
  ],
  providers: [
    Authenticator, 
    LoginApiService, 
    AnalyseService, 
    AuthGuard, 
    QuestionsContainer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
