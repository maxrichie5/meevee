import { Event } from '../../models/event'
import * as _ from 'lodash-es'
import { AlarmService } from './../alarm.service'
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

declare var chrome;

@Injectable()
export class StorageService {
  constructor(private alarmService: AlarmService) {}

  public addEvent(newEvent: Event): void {
    chrome.storage.sync.get({ events: [] }, (result) => {
      let events = result.events as Event[]
      events.push(newEvent)
      chrome.storage.sync.set({ events }, () => {
        this.alarmService.createAlarm(newEvent)
      })
    })

    let events = JSON.parse(localStorage.getItem('events'))
    events = _.isEmpty(events) ? [] : events
    events.push(newEvent)
    localStorage.setItem('events', JSON.stringify(events))
  }

  public getAllEvents(): Event[] {
    return JSON.parse(localStorage.getItem('events')) as Event[]
  }

  public getEvent(eventId: string): Event {
    let events = JSON.parse(localStorage.getItem('events'))
    const target = _.find(events, ({ id }) => id === eventId)
    if (_.isEmpty(target)) {
      throw new Error(`No event with ID ${eventId}`)
    }
    return target
  }

  public updateEvent(event: Event): void {
    chrome.storage.sync.get({events: []}, (result) => {
      let newEvents = result.events;
      let index = _.findIndex(newEvents, { id: event.id })
      if (index == -1) {
        throw new Error(`No event with ID ${event.id}`)
      }
      _.remove(newEvents, { id: event.id });
      newEvents.splice(index, 0, event);
      chrome.storage.sync.set({ events: newEvents }, () => {
        this.alarmService.updateAlarm(event)
      });
    });

    let events = JSON.parse(localStorage.getItem('events'))
    let index = _.findIndex(events, { id: event.id })
    if (index == -1) {
      throw new Error(`No event with ID ${event.id}`)
    }
    _.remove(events, { id: event.id })
    events.splice(index, 0, event);
    localStorage.setItem('events', JSON.stringify(events))
  }

  public deleteEvent(event: Event): void {
    chrome.storage.sync.get({events: []}, (result) => {
      let newEvents = result.events;
      _.remove(newEvents, {
        id: event.id
      });
      chrome.storage.sync.set({ events: newEvents }, () => {
        this.alarmService.deleteAlarm(event)
      });
    });

    let events = JSON.parse(localStorage.getItem('events'))
    const target = _.remove(events, ({ id }) => id === event.id)
    if (_.isEmpty(target)) {
      throw new Error(`No event with ID ${event.id}`)
    }
    localStorage.setItem('events', JSON.stringify(events))
  }

  public deleteAllEvents(): void {
    chrome.storage.sync.set({events: []})
    chrome.storage.local.set({events: []})

    localStorage.setItem('events', JSON.stringify([]))
  }

  public saveNewOrderOfEvents(eventsToSave: Event[]): void {
    chrome.storage.sync.set({ events: eventsToSave });
    localStorage.setItem('events', JSON.stringify(eventsToSave))
  }

  private isDuplicateEventId(events: Event[], eventId: string ): boolean {
    const result = _.find(events, ({ id }) => id === eventId)
    return _.isEmpty(result) ? false : true
  }
}

export const StorageServiceProvider = { provide: StorageService, useClass: StorageService }
