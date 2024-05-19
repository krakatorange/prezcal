import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { FriendApi } from './friend/friend.api'

import { OccasionApi } from './occasion/occasion.api'

import { GiftApi } from './gift/gift.api'

import { OrderApi } from './order/order.api'

import { CalendarApi } from './calendar/calendar.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class Friend extends FriendApi {}

  export class Occasion extends OccasionApi {}

  export class Gift extends GiftApi {}

  export class Order extends OrderApi {}

  export class Calendar extends CalendarApi {}
}
