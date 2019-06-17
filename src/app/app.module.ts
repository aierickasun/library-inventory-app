import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { SearchComponent } from './search/search.component';
import { ChangeComponent } from './change/change.component';

// declarations are internal dependencies.
// imports are external dependencies.

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    SearchComponent,
    ChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
