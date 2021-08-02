import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FoldersComponent } from './components/folders/folders.component';
import { DetailFoldersComponent } from './components/folders/detail-folders/detail-folders.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from '../app/services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FoldersComponent,
    DetailFoldersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
