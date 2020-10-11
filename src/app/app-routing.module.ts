import { NotFoundComponent } from './not-found/not-found.component';
// import { CoverPageComponent } from './cover-page/cover-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponentComponent } from './hero-component/hero-component.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'personal-use', component: HeroComponentComponent},
  {path: 'companies', component: HeroComponentComponent},
  {path: 'e-commerce', component: HeroComponentComponent},
  {path: 'Restaurants', component: HeroComponentComponent},
  {path: 'couriers', component: HeroComponentComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
