import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: {
        breadcrumb: {
          displayOnly: true
        }
      }
    }
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
