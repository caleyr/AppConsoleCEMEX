import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

// Componentes
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { HeaderInterceptorService } from './services/header-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,       
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
    SharedModule,
    CmxWebComponentsModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
