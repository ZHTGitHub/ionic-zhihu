import { IonicModule } from '@ionic/angular'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { TabsPageRoutingModule } from './tabs.router.module'

import { TabsPage } from './tabs.page'

import { WeirdTabPageModule } from '../weird-tab'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    WeirdTabPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
