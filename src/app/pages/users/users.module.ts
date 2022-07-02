import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ReactiveFormsModule } from '@angular/forms';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';

// Components
import { UsersComponent } from './users.component';
import { NewUserComponent } from './new-user/new-user.component';
import { TabUsersRequestsComponent } from './components/tab-users-requests/tab-users-requests.component';
import { TabCurrentUsersComponent } from './components/tab-current-users/tab-current-users.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateDocumentsUserComponent } from './update-documents-user/update-documents-user.component';
import { UploadFilesComponent } from '../components/upload-files/upload-files.component';
import { DetailRequestUserComponent } from './detail-request-user/detail-request-user.component';
import { WebcamModule } from 'ngx-webcam';


@NgModule({
  declarations: [
    UsersComponent,
    NewUserComponent,
    DetailsUserComponent,
    UpdateUserComponent,
    UpdateDocumentsUserComponent,
    TabUsersRequestsComponent,
    TabCurrentUsersComponent,    
    UploadFilesComponent,
    DetailRequestUserComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CmxWebComponentsModule.forRoot(),
    WebcamModule
  ]
})
export class UsersModule { }
