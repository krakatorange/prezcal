export namespace FriendApplicationEvent {
  export namespace FriendCreated {
    export const key = 'friend.application.friend.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
