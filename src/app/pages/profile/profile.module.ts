import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ReactiveFormsModule } from '@angular/forms';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';

// Components
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UpdateDocumentsComponent } from './update-documents/update-documents.component';
import { ProfileComponent } from './profile.component';



@NgModule({
  declarations: [
    ProfileComponent,
    UpdateProfileComponent,
    UpdateDocumentsComponent,
  ],
  exports: [
    UpdateProfileComponent,
    UpdateDocumentsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CmxWebComponentsModule.forRoot(),
  ]
})
export class ProfileModule { }
