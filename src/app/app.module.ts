import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MainScreenComponent} from './main-screen/main-screen.component';
import {HeaderComponent} from './header/header.component';

import {MatIconModule} from '@angular/material/icon';
import {MenuScreenComponent} from './menu-screen/menu-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormControl, FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';



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
      FormsModule,
      MatSidenavModule,
      MatRadioModule,
      MatSlideToggleModule,
      MatFormFieldModule,
      MatBadgeModule,
      MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
