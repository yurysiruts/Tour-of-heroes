import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailEditComponent } from './hero-detail/hero-detail-edit/hero-detail-edit.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'detail/:id/edit', component: HeroDetailEditComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),  
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
