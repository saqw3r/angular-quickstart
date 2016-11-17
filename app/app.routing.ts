import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainViewComponent }      from './mainview.component';
import { DashboardComponent }     from './dashboard.component';


const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'heroes',
		component: MainViewComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);