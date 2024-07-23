import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActoresComponent } from './components/actores/actores.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'actores', component: ActoresComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
