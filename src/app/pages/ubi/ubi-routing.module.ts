import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbiPage } from './ubi.page';

const routes: Routes = [
  {
    path: '',
    component: UbiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UbiPageRoutingModule {}
