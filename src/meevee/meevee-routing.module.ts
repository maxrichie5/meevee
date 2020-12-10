import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Events } from './views/events/events'
import { AddEvent } from './views/add-event/add-event'
import { EditEvent } from './views/edit-event/edit-event'

export const ROUTES: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: Events },
  { path: 'add-event', component: AddEvent },
  { path: 'edit-event/:id', component: EditEvent },
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class MeeveeRoutingModule {}
