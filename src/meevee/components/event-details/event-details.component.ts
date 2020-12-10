import { Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventService } from 'src/meevee/services/event.service';
import { Event } from '../../models/event'
import _ from 'lodash-es'

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent {
  public event: Event
  @ViewChild('deleteButton', { read: ElementRef }) delBtnRef: ElementRef

  public get recurrence() {
    if (this.event.recurrence === 'none') {
      return 'None'
    }
    return 'Every ' + this.event.recurrence
  }

  public get minutesBeforeOpening() {
    const mbo = this.event.minutesBeforeOpening
    return mbo + (mbo === 1 ? ' Minute' : ' Minutes')
  }

  public get deactivated() {
    return this.event.deactivated === true ? 'Inactive' : 'Active'
  }

  public get time() {
    const date = new Date(this.event.time)
    const month = date.toLocaleString('default', { month: 'short' })
    const day = date.getDay()
    const year = date.getFullYear()
    // @ts-ignore
    const time = date.toLocaleString('default', { timeStyle: 'short' })
    return `${month} ${day}, ${year} at ${time}`
  }

  constructor(
    public dialogRef: MatDialogRef<EventDetailsComponent>,
    private eventService: EventService,
    private router: Router,
    private renderer: Renderer2,
    @Inject(MAT_DIALOG_DATA) private data,
  ) {
    this.event = this.eventService.getEvent(this.data)
  }

  public close(): void {
    this.dialogRef.close();
  }

  public editEvent(): void {
    this.router.navigate([`/edit-event/${this.event.id}`])
    this.close()
  }

  public showDeleteConfirmation($event: any): void {
    $event.stopPropagation()
    this.renderer.setStyle(this.delBtnRef.nativeElement, 'transform', 'rotateX(180deg)')
  }

  public unshowDeleteConfirmation($event: any): void {
    if (!_.isEmpty($event)) {
      $event.stopPropagation()
    }
    this.renderer.setStyle(this.delBtnRef.nativeElement, 'transform', 'rotateX(0deg)')
  }

  public duplicateEvent(): void {
    const newId = this.eventService.duplicateEvent(this.event)
    this.router.navigate([`/edit-event/${newId}`])
    this.close()
  }

  public deleteEvent($event: any): void {
    $event.stopPropagation()
    this.dialogRef.close('delete')
  }
}
