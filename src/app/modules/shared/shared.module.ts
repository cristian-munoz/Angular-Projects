import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ShowBodyComponent } from './components/show-body/show-body.component';



@NgModule({
  declarations: [HeaderComponent,
                 ShowBodyComponent
            ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent,
            ShowBodyComponent
  ]
})
export class SharedModule { }
