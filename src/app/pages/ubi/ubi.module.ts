import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { IonicModule } from '@ionic/angular';

import { UbiPageRoutingModule } from './ubi-routing.module';

import { UbiPage } from './ubi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbiPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCT9wzsIIAkW95uHWVvCbBEP-xtjNbJPow'
    })
  ],
  declarations: [UbiPage]
})
export class UbiPageModule {}
