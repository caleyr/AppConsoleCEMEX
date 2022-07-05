import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

// Componentes
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  // path: '/dashboard' AuthRouting
  // path: '/auth' AuthRouting

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //{ path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule,
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
