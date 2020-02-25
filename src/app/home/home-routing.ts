import { Routes } from '@angular/router';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { FourthpageComponent } from './fourthpage/fourthpage.component';

/**
 * defining the path for routing
 */
export const routes: Routes = [
    {
        path: '',
        component: ThirdpageComponent
    },
    {
        path: 'third',
        component:  ThirdpageComponent
    },
    {
        path: 'fourth',
        component: FourthpageComponent
    }
];
