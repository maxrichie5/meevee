import { Event } from '../models/event'
import * as _ from 'lodash-es'
import { v4 as uuidv4 } from 'uuid'
import { StorageService } from './storage/storage.service'
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable()
export class EventService {

    constructor(private storage: StorageService) {}

    public addEvent(event: Event): void {
      event.id = uuidv4()
      this.storage.addEvent(event)
    }

    public updateEvent(event: Event): void {
      this.storage.updateEvent(event)
    }

    public getAllEvents(): Event[] {
      return this.storage.getAllEvents()
    }

    public deleteEvent(event: Event): void {
      this.storage.deleteEvent(event)
    }

    public getEvent(eventId: string): Event {
      return this.storage.getEvent(eventId)
    }

    public duplicateEvent(event: Event): string {
      const newEvent = _.cloneDeep(event)
      newEvent.id = uuidv4()
      newEvent.name = 'Copy of ' + newEvent.name
      this.storage.addEvent(newEvent)
      return newEvent.id
    }

    public saveNewOrderOfEvents(events: Event[]): void {
      this.storage.saveNewOrderOfEvents(events)
    }
}

export const EventServiceProvider = { provide: EventService, useClass: EventService }
