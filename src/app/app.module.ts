import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './modules/home/components/header/header.component';
import { SharedModule } from './shared/shared/shared.module';
import { CommonModule } from '@angular/common';
import { HomeModule } from './modules/home/home.module';
import { HttpClientModule } from  '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    HomeModule
    
  ],
  providers: [],
  exports: [
     
    
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
