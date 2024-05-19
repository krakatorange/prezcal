import { Friend } from '../friend'

import { Order } from '../order'

import { Calendar } from '../calendar'

export class Occasion {
  id: string

  date: string

  occasionType: string

  friendId: string

  friend?: Friend

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  orders?: Order[]

  calendars?: Calendar[]
}
