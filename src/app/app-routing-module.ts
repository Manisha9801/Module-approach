/**
 * importing the modules
 */
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';

/**
 * Defining the routes to navigate
 */
export const routes: Routes = [
    {
        path: 'core',
        loadChildren: './core/core.module#CoreModule',
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: '',
        redirectTo: '/core',
        pathMatch: 'full'
    }
];
