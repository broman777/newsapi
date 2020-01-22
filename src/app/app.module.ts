import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { QueryPipe } from './query.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QueryPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgSelectModule, 
    FormsModule,
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
