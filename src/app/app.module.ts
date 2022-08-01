import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BulletinBoardComponent } from './bulletin-board/bulletin-board.component';
import { DirectoryComponent } from './directory/directory.component';
import { HubComponent } from './hub/hub.component';
import { NewListingComponent } from './new-listing/new-listing.component';
import { PendingComponent } from './pending/pending.component';
import { ReportComponent } from './report/report.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    BulletinBoardComponent,
    DirectoryComponent,
    HubComponent,
    NewListingComponent,
    PendingComponent,
    ReportComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
