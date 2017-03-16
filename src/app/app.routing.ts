import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PageNotFoundComponent } from '../pages/404/notfound.component';
import { HomePage } from '../pages/homepage/homepage.component';
import { AnalysisWizard } from '../pages/wizard/analysis-wizard.component';

const appRoutes: Routes = [
  { path: '',  component:  HomePage},
  { path: 'analyse', component: AnalysisWizard },
  { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);