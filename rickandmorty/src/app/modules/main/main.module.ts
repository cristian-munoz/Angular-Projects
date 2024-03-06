import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HeaderPageComponent } from './pages/header-page/header-page.component';
import { BodyPageComponent } from './pages/body-page/body-page.component';
import { SharedModule } from '../shared/shared.module';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';


@NgModule({
  declarations: [MainPageComponent,
                 HeaderPageComponent,
                 BodyPageComponent,
                 DetailPageComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
