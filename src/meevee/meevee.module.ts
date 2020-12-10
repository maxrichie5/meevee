import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MeeveeRoutingModule } from './meevee-routing.module';
import { Meevee } from './meevee';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MeeveeMaterialModule } from './meevee-material.module'
import { Events } from './views/events/events';
import { AddEvent } from './views/add-event/add-event';
import { EditEvent } from './views/edit-event/edit-event';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageServiceProvider } from './services/storage/storage.service';
import { EventServiceProvider } from './services/event.service';
import { AlarmServiceProvider } from './services/alarm.service';
import { CommonModule } from '@angular/common';
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventFormComponent } from './components/event-form/event-form.component';

@NgModule({
  declarations: [
    Meevee,
    Events,
    AddEvent,
    EditEvent,
    DeleteConfirmationComponent,
    EventDetailsComponent,
    EventFormComponent,
  ],
  imports: [
    BrowserModule,
    MeeveeRoutingModule,
    BrowserAnimationsModule,
    MeeveeMaterialModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    StorageServiceProvider,
    EventServiceProvider,
    AlarmServiceProvider,
  ],
  bootstrap: [Meevee]
})
export class MeeveeModule { }
