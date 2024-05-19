import { Occasion } from '../occasion'

import { Gift } from '../gift'

export class Order {
  id: string

  orderDate: string

  deliveryDate?: string

  status: string

  occasionId: string

  occasion?: Occasion

  giftId: string

  gift?: Gift

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
