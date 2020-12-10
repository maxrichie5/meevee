import { OnInit, Component, Input } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Event } from './../../models/event'
import _ from 'lodash-es'

const urlRegExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

@Component({
  selector: 'event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  @Input('originalEvent') public originalEvent: Event
  @Input('onSave') public onSave = (event: Event) => {}
  @Input('saveButtonText') public saveButtonText = 'Save Event'
  @Input('canDeactivate') public canDeactivate = false
  public formStyle = 'standard'

  public get canSave() {
    return this.eventFormGroup.valid
  }

  public eventFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    desc: new FormControl(''),
    link: new FormControl('', [Validators.required, Validators.pattern(urlRegExp)]),
    time: new FormControl('', [Validators.required]),
    recurrence: new FormControl('', [Validators.required]),
    minutesBeforeOpening: new FormControl('', [Validators.required]),
    deactivated: new FormControl(''),
  })

  constructor() {}

  public ngOnInit(): void {
    if (!_.isEmpty(this.originalEvent)) {
      this.patchEvent(this.originalEvent)
    }
  }

  private patchEvent(event: Event): void {
    this.eventFormGroup.controls.name.patchValue(event.name)
    this.eventFormGroup.controls.desc.patchValue(event.desc)
    this.eventFormGroup.controls.link.patchValue(event.link)
    this.eventFormGroup.controls.time.patchValue(event.time)
    this.eventFormGroup.controls.recurrence.patchValue(event.recurrence)
    this.eventFormGroup.controls.minutesBeforeOpening.patchValue(event.minutesBeforeOpening)
    this.eventFormGroup.controls.deactivated.patchValue(event.deactivated)
  }

  public nameError(): string {
    if (this.eventFormGroup.controls.name.hasError('minlength')) {
      return 'Name must be 3 or more characters.'
    }
    return 'Name is required.'
  }

  public linkError(): string {
    if (this.eventFormGroup.controls.link.hasError('pattern')) {
      return 'Meeting link must be a valid URL.'
    }
    return 'Meeting link is required.'
  }

  public timeError(): string {
    return 'Meeting time is required.'
  }

  public recurrenceError(): string {
    return 'Recurrence must be specified.'
  }

  public minBeforeOpeningError(): string {
    return 'Minutes before opening must be specified.'
  }

  public save(): void {
    const event = this.eventFormGroup.value as Event
    if(!this.canDeactivate) {
      event.deactivated = false;
    }
    this.onSave(event)
  }
}
