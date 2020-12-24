import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SourceListComponent } from './source-list/source-list.component';
import { SelectComponent } from './select/select.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CustomListComponent } from './custom-list/custom-list.component';
import { StoreModule } from './store/module';

import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';

import { NgReduxModule } from '@angular-redux/store';

import { AppActions } from './app.actions';


@NgModule({
  declarations: [
    AppComponent,
    SourceListComponent,
    SelectComponent,
    ToolbarComponent,
    CustomListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSelectModule,
    MatToolbarModule,
    NgReduxModule,
    StoreModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
