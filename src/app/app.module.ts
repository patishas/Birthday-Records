import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BirthdayRecordsComponent } from './birthday-records/birthday-records.component';

@NgModule({
  declarations: [
    AppComponent,
    BirthdayRecordsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
