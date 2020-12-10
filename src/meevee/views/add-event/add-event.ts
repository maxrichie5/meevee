import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Event } from './../../models/event'
import { EventService } from '../../services/event.service'

@Component({
  selector: "add-event",
  styleUrls: ["add-event.scss"],
  templateUrl: "add-event.html",
})

export class AddEvent {
  public title = 'Add Event'

  constructor(private router: Router, private eventService: EventService) {}

  public saveEvent = (event: Event): void => {
    this.eventService.addEvent(event)
    this.router.navigate(['/events'])
  }
}
