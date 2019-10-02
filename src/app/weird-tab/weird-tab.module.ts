import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WeirdTabPage } from './weird-tab.page';

const routes: Routes = [
  {
    path: '',
    component: WeirdTabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    WeirdTabPage
  ],
  exports: [
    WeirdTabPage
  ]
})
export class WeirdTabPageModule {}
