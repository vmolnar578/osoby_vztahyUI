import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OsobyPageComponent } from './osoby-page/osoby-page.component';
import { PredmetyPageComponent } from './predmety-page/predmety-page.component';
import {ObedyPageComponent} from "./obedy-page/obedy-page.component";

const routes: Routes = [
  {
    path: 'osoby',
    component: OsobyPageComponent,
  },
  {
    path: 'predmety',
    component: PredmetyPageComponent,
  },
  {
    path: 'obedy',
    component: ObedyPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
