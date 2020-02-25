import { Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';

/**
 * defining the path for routing
 */
export const routes: Routes = [
    {
        path: '',
        component: FirstpageComponent
    },
    {
        path: 'first',
        component:  FirstpageComponent
    },
    {
        path: 'second',
        component: SecondpageComponent
    }
];
