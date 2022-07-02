import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { RouterModule } from '@angular/router';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';

// Componentes
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent, 
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CmxWebComponentsModule.forRoot()
  ]
})
export class SharedModule { }
