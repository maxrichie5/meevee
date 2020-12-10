import { Injectable } from '@angular/core'
import { Event } from '../models/event'

declare var chrome

@Injectable()
export class AlarmService {

  constructor() {}

  public getAlarmName(event: Event): string {
    return `${event.name}-#${event.id}`
  }

  public createAlarm(event: Event): void {
    let alertTime = new Date(event.time);
    alertTime.setMinutes(alertTime.getMinutes() - event.minutesBeforeOpening); 
    chrome.alarms.create(this.getAlarmName(event), { when: Date.parse(alertTime.toString()) });
  }

  public updateAlarm(event: Event): void {
    chrome.alarms.clear(this.getAlarmName(event), () => this.createAlarm(event))
  }

  public deleteAlarm(event: Event): void {
    chrome.alarms.clear(this.getAlarmName(event))
  }

  public deleteAllAlarms(): void {
    chrome.alarms.clearAll()
  }
}

export const AlarmServiceProvider = { provide: AlarmService, useClass: AlarmService }
