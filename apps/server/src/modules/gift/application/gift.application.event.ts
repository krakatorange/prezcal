export namespace GiftApplicationEvent {
  export namespace GiftCreated {
    export const key = 'gift.application.gift.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
