import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PageNotFoundComponent } from '../pages/404/notfound.component';
import { AnalysisWizard } from '../pages/wizard/analysis-wizard.component';

const appRoutes: Routes = [
  { path: '',  component:  AnalysisWizard},
  { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);