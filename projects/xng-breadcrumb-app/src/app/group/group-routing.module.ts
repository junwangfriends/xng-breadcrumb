import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    // component: ChildComponent,
    data: {
      breadcrumb: {
        displayOnly: true,
        breadcrumb: {
          displayOnly: true
        }
      }
    }

    // children: [

    // ]
  },
  {
    path: 'child',
    component: ChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule {}
