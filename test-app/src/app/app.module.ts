import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SelectComponent } from './select/select.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StoreModule } from './store/module';

import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgReduxModule, NgRedux } from '@angular-redux/store';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SelectComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSelectModule,
    MatToolbarModule,
    NgReduxModule,
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
