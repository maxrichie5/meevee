export type Event = {
  id: string,
  name: string,
  desc?: string,
  recurrence: string,
  minutesBeforeOpening: number,
  time: string,
  link: string,
  deactivated: boolean,
}
