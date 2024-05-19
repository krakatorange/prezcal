export namespace OccasionApplicationEvent {
  export namespace OccasionCreated {
    export const key = 'occasion.application.occasion.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
