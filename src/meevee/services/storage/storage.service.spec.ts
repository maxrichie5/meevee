import { TestBed } from "@angular/core/testing"
import { StorageService, StorageServiceProvider} from './storage.service'
import { Event } from '../../models/event'

describe('storage service', () => {
  let ss: StorageService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageServiceProvider],
    })

    ss = TestBed.inject(StorageService)

    localStorage.clear()
  })

  afterEach(() => {
    localStorage.clear()
  })

  it('should add a new event', () => {
    const testEvent = { id: '1', name: 'max' } as Event

    ss.addEvent(testEvent)
    let result = JSON.parse(localStorage.getItem('events')) as Event[]
    expect(result.length).toBe(1)
    expect(result[0].id).toEqual('1')
    expect(result[0].name).toEqual('max')

    try {
      ss.addEvent(testEvent)
    } catch(err) {
      expect(err).toBeTruthy()
    }
  })

  it('should update an event', () => {
    const testEvent1 = { id: '1', name: 'max' } as Event
    const testEvent2 = { id: '2', name: 'john' } as Event
    const testEvent3 = { id: '2', name: 'matt' } as Event

    ss.addEvent(testEvent1)
    ss.addEvent(testEvent2)
    ss.updateEvent(testEvent3)
    let result = JSON.parse(localStorage.getItem('events')) as Event[]
    expect(result.length).toBe(2)
    expect(result[0].id).toEqual('1')
    expect(result[0].name).toEqual('max')
    expect(result[1].id).toEqual('2')
    expect(result[1].name).toEqual('matt')

    try {
      ss.addEvent(testEvent1)
    } catch(err) {
      expect(err).toBeTruthy()
    }
  })

  it('should get all events', () => {
    const testEvent1 = { id: '1', name: 'max' } as Event
    const testEvent2 = { id: '2', name: 'john' } as Event
    const testEvent3 = { id: '3', name: 'matt' } as Event

    ss.addEvent(testEvent1)
    ss.addEvent(testEvent2)
    ss.addEvent(testEvent3)
    let result = ss.getAllEvents()
    expect(result.length).toBe(3)
    expect(result[0].id).toEqual('1')
    expect(result[0].name).toEqual('max')
    expect(result[1].id).toEqual('2')
    expect(result[1].name).toEqual('john')
    expect(result[2].id).toEqual('3')
    expect(result[2].name).toEqual('matt')
  })

  it('should delete an event', () => {
    const testEvent1 = { id: '1', name: 'max' } as Event
    const testEvent2 = { id: '2', name: 'john' } as Event

    ss.addEvent(testEvent1)
    ss.addEvent(testEvent2)
    ss.deleteEvent(testEvent2.id)
    let result = JSON.parse(localStorage.getItem('events')) as Event[]
    expect(result.length).toBe(1)
    expect(result[0].id).toEqual('1')
    expect(result[0].name).toEqual('max')
  })

  it('should delete all events', () => {
    const testEvent1 = { id: '1', name: 'max' } as Event
    const testEvent2 = { id: '2', name: 'john' } as Event

    ss.addEvent(testEvent1)
    ss.addEvent(testEvent2)
    ss.deleteAllEvents()
    let result = JSON.parse(localStorage.getItem('events')) as Event[]
    expect(result.length).toBe(0)
    ss.deleteAllEvents()
    let result2 = JSON.parse(localStorage.getItem('events')) as Event[]
    expect(result2.length).toBe(0)
  })
})
