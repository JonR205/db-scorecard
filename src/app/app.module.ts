import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ScorecardComponent } from './componants/scorecard/scorecard.component';
import { HomeComponent } from './componants/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ScorecardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
