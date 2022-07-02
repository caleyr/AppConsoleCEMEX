import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { ModalLoadingComponent } from './modal-loading/modal-loading.component';
import { ModalSuccessComponent } from './modal-success/modal-success.component';
import { ModalErrorComponent } from './modal-error/modal-error.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ModalLoadingComponent,
    ModalSuccessComponent,
    ModalErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CmxWebComponentsModule.forRoot()
  ],
  exports: [
    ModalLoadingComponent,
    ModalSuccessComponent,
    ModalErrorComponent,
  ]
})
export class ComponentsModule { }
