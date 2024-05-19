import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Friend as FriendModel } from './friend/friend.model'

import { Occasion as OccasionModel } from './occasion/occasion.model'

import { Gift as GiftModel } from './gift/gift.model'

import { Order as OrderModel } from './order/order.model'

import { Calendar as CalendarModel } from './calendar/calendar.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Friend extends FriendModel {}

  export class Occasion extends OccasionModel {}

  export class Gift extends GiftModel {}

  export class Order extends OrderModel {}

  export class Calendar extends CalendarModel {}
}
