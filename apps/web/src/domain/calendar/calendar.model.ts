import { Friend } from '../friend'

import { Occasion } from '../occasion'

export class Calendar {
  id: string

  friendId: string

  friend?: Friend

  occasionId: string

  occasion?: Occasion

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
