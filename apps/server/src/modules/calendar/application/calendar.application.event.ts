export namespace CalendarApplicationEvent {
  export namespace CalendarCreated {
    export const key = 'calendar.application.calendar.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
