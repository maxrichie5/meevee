import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { EventService } from '../../services/event.service'
import { Event } from '../../models/event'
import * as _ from 'lodash-es'
import { UntilDestroy } from '@ngneat/until-destroy'
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationComponent } from 'src/meevee/components/delete-confirmation/delete-confirmation.component'
import { EventDetailsComponent } from 'src/meevee/components/event-details/event-details.component'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'

@UntilDestroy()
@Component({
  selector: "events",
  styleUrls: ["events.scss"],
  templateUrl: "events.html",
})
export class Events implements OnInit {
  public events: Event[] = []

  constructor(private router: Router, private eventService: EventService, public dialog: MatDialog) {}

  public ngOnInit(): void {
   this.events = this.eventService.getAllEvents()
  }

  public goToAddEvent(): void {
    this.router.navigate(['/add-event'])
  }

  public emptyDesc(desc: string): boolean {
    return _.isEmpty(desc)
  }

  public deleteEvent(event: Event): void {
    this.eventService.deleteEvent(event)
  }

  public deleteConfirmation(event: Event): void {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result == "delete") {
        this.deleteEvent(event);
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/events']);
      }
    });
  }

  public eventDetails(event: Event): void {
    const dialogRef = this.dialog.open(EventDetailsComponent, { data: event.id, autoFocus: false });
    dialogRef.afterClosed().subscribe(result => {
      if(result == 'delete') {
        this.deleteEvent(event);
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/events']);
      }
    });
  }

  public goToEditEvent(id: string) {
    this.router.navigate([`/edit-event/${id}`]);
  }

  public eventDropped($event: CdkDragDrop<Event[]>): void {
    moveItemInArray(this.events, $event.previousIndex, $event.currentIndex)
    this.eventService.saveNewOrderOfEvents(this.events)
  }

  public sortEventsAlphabetically(): void {
    this.events = _.sortBy(this.events, (event: Event) => _.toLower(event.name))
    this.eventService.saveNewOrderOfEvents(this.events)
  }
}
