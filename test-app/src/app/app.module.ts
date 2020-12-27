import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './components/app/app.component';
import { SourceListComponent } from './components/source-list/source-list.component';
import { SelectComponent } from './components/select/select.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CustomListComponent } from './components/custom-list/custom-list.component';
import { StoreModule } from './store/module';

import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NgReduxModule } from '@angular-redux/store';

import { Actions } from './actions/actions';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    SourceListComponent,
    SelectComponent,
    ToolbarComponent,
    CustomListComponent,
    ButtonComponent
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
    HttpClientModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [Actions],
  bootstrap: [AppComponent]
})
export class AppModule { }
