import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeComponent } from './change/change.component';
import { SearchComponent } from './search/search.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'search', component: SearchComponent },
  { path: 'change', component: ChangeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
