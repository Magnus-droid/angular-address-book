import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ContactsModule } from './contacts/contacts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    LayoutModule,
    ContactsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
