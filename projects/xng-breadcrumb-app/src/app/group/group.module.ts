import { NgModule } from '@angular/core';

import { GroupRoutingModule } from './group-routing.module';
import { ChildComponent } from './child/child.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ChildComponent],
  imports: [SharedModule, GroupRoutingModule]
})
export class GroupModule {}
