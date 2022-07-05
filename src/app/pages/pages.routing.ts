import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guard
import { AuthGuard } from '../guards/auth.guard';

// Components
import { PagesComponent } from './pages.component';


const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent, 
        canActivate: [ AuthGuard ],
        //canLoad: [ AuthGuard ],
        loadChildren: () => import('./child-routes.module').then( m => m.ChildRoutesModule )
       // children: [
            // { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
            // { path: 'driver', component: DriverComponent, data: { title: 'Driver' } },
            // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        //] 
    },  
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule {}
