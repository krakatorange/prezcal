import { User } from '../user'

import { Occasion } from '../occasion'

import { Calendar } from '../calendar'

export class Friend {
  id: string

  name: string

  birthday: string

  relationship: string

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  occasions?: Occasion[]

  calendars?: Calendar[]
}
