import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FoldersComponent } from './components/folders/folders.component';
//import { DetailFoldersComponent } from './components/folders/detail-folders/detail-folders.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  //{ path: 'detail-folders/:id', component: DetailFoldersComponent , canActivate: [ AuthGuardService ]},
  { path: 'folders/:id', component: FoldersComponent , canActivate: [ AuthGuardService ]},
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
