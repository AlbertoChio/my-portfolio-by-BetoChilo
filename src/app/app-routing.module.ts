import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./modules/home/home-routing.module').then(m => m.HomeRoutingModule) }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
