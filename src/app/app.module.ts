import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MainScreenComponent} from './main-screen/main-screen.component';
import {HeaderComponent} from './header/header.component';

import {MatIconModule} from '@angular/material/icon';
import {MenuScreenComponent} from './menu-screen/menu-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
      MainScreenComponent,
      HeaderComponent,
      MenuScreenComponent
  ],
  imports: [
    BrowserModule,
      MatIconModule,
      BrowserAnimationsModule,
      MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
