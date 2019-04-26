import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { RowsColumnsColorsComponent } from './rows-columns-colors/rows-columns-colors.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    RowsColumnsColorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
