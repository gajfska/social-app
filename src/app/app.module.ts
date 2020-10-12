import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MainScreenComponent} from './main-screen/main-screen.component';
import {HeaderComponent} from './header/header.component';

import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
      MainScreenComponent,
      HeaderComponent
  ],
  imports: [
    BrowserModule,
      MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
