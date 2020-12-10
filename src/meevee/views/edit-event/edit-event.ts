import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import * as _ from 'lodash-es'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { tap } from 'rxjs/operators'
import { StorageService } from './../../services/storage/storage.service'
import { Event } from './../../models/event'
import { EventService } from '../../services/event.service'
import { of, Subject } from 'rxjs'

const urlRegExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

@UntilDestroy()
@Component({
  selector: "edit-event",
  styleUrls: ["edit-event.scss"],
  templateUrl: "edit-event.html",
})
export class EditEvent implements OnInit {
  public title = 'Edit Event'
  public originalEvent: Event
  private eventId

  constructor(
    private router: Router,
    private storage: StorageService,
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  public ngOnInit(): void {
    this.route.params.pipe(
      tap(params => {
        this.eventId = params['id']
        this.originalEvent = this.storage.getEvent(this.eventId)
      })
    ).subscribe()
  }

  public saveEvent = (event: Event): void => {
    event.id = this.eventId
    this.eventService.updateEvent(event)
    this.router.navigate(['/events'])
  }
}
