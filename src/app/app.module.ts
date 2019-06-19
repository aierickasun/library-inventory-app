import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
