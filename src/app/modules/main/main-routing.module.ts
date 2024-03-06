import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';

const routes: Routes = [
  {
    path: 'main', //http://localhost:4200/main
    component: MainPageComponent
  },
  {
    path: 'main/detail', //http://localhost:4200/main/detail
    component: DetailPageComponent
  },
  {
    path: '**', //http://localhost:4200/main/
    redirectTo: '/main'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
