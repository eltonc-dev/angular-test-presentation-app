import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IncreaseNumberComponent} from './components/increase-number/increase-number.component';
import {ShipResource} from './resources/ship.resource';
import {ShipListComponent} from './components/ship-list/ship-list.component';

export const appRoutes: Routes = [
  { path: '*', redirectTo: '/', pathMatch: 'full' },
  { path: 'increase', component: IncreaseNumberComponent },
  { path: 'ships', component: ShipListComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      paramsInheritanceStrategy: 'always',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
