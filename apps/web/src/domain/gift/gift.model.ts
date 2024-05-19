import { Order } from '../order'

export class Gift {
  id: string

  name: string

  description?: string

  price: number

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  orders?: Order[]
}
