import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulletinBoardComponent } from './bulletin-board/bulletin-board.component';
import { DirectoryComponent } from './directory/directory.component';
import { HubComponent } from './hub/hub.component';
import { LandingComponent } from './landing/landing.component'; 
import { ReportComponent } from './report/report.component';
import { SignupComponent } from './signup/signup.component';
import { NewListingComponent } from './new-listing/new-listing.component'

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'hub', component: HubComponent },
  { path: 'bulletin-board', component: BulletinBoardComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'report', component: ReportComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'new-listing', component: NewListingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
