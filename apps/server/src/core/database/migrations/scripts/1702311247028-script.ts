import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('9a5b25a8-f34a-4642-8754-f37f3615dd63', '1Chelsea_Kuphal@hotmail.com', 'Mike Ross', 'https://i.imgur.com/YfJQV5z.png?id=3', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('6e226b3a-8975-4221-b99c-8dd0c0c80c17', '7Summer.Aufderhar@hotmail.com', 'Mike Ross', 'https://i.imgur.com/YfJQV5z.png?id=9', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('60d00037-f17e-4a2f-b90e-91c83a0dcf7f', '13Jedidiah_Braun23@gmail.com', 'Mike Ross', 'https://i.imgur.com/YfJQV5z.png?id=15', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('34c4190e-d6ad-4969-b523-49f7f9765f2b', '19Marshall23@gmail.com', 'Mike Ross', 'https://i.imgur.com/YfJQV5z.png?id=21', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('441fdf57-d1de-4837-98ce-6fc4095d61cd', '25Hailie44@gmail.com', 'Sarah Connor', 'https://i.imgur.com/YfJQV5z.png?id=27', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('258e5745-fc6b-488d-be42-7a3580dd38ce', '31Deon.Nicolas@gmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=33', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('ae2faaed-c0a8-441b-a424-b68007db5f2d', '37Ronaldo50@yahoo.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=39', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('7b74734d-0e85-4c4c-9d42-5c0757efddce', '49Godfrey98@gmail.com', 'Mike Ross', 'https://i.imgur.com/YfJQV5z.png?id=51', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('d250e73b-4ca7-451f-97f6-995d5e6c0a15', '55Daren.Stiedemann35@yahoo.com', 'Jane Doe', 'https://i.imgur.com/YfJQV5z.png?id=57', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('dd981ed2-5ccf-4c9a-9d6e-15dce6015ae2', 'Anniversary Alert', 'Dont forget to send a gift for Alexs birthday', 'Occasion Notifier', '64Vanessa21@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', '9a5b25a8-f34a-4642-8754-f37f3615dd63');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('477633a0-efd8-47dd-9209-06b1a711c0bb', 'Birthday Reminder', 'Dont forget to send a gift for Alexs birthday', 'Occasion Notifier', '71Maudie_Berge47@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('90956b14-0d56-4c79-afcd-a2765af9bbd0', 'Gift Order Confirmation', 'Your gift order for Sam has been confirmed.', 'Reminder Service', '78Velda91@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', '258e5745-fc6b-488d-be42-7a3580dd38ce');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('55d50af5-a37c-4a88-b56a-dddae468062b', 'Special Occasion Notification', 'A special occasion is coming up have you thought about gifts', 'Giftly Bot', '85Rebeca31@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('e64df244-7713-4578-b09a-3746c564b130', 'Anniversary Alert', 'A special occasion is coming up have you thought about gifts', 'Giftly Bot', '92Foster.Hermiston60@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', 'd250e73b-4ca7-451f-97f6-995d5e6c0a15');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('8be90d06-1970-41e0-976f-9e63d68ab3f5', 'Holiday Gift Reminder', 'Dont forget to send a gift for Alexs birthday', 'Occasion Notifier', '99Myrtle_Barrows@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', '9a5b25a8-f34a-4642-8754-f37f3615dd63');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('7a13bb08-4985-4d53-a9d7-5aa1503a0fcf', 'Special Occasion Notification', 'A special occasion is coming up have you thought about gifts', 'Holiday Helper', '106Adrian37@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', 'd250e73b-4ca7-451f-97f6-995d5e6c0a15');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('8b59bdfd-4da3-497c-83c3-1c5e72c940a6', 'Gift Order Confirmation', 'A special occasion is coming up have you thought about gifts', 'Giftly Bot', '113Lilyan.Torp56@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', '7b74734d-0e85-4c4c-9d42-5c0757efddce');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('b2ca2a17-dbfe-4e79-924a-b0794b147991', 'Anniversary Alert', 'Its almost holiday season time to pick gifts', 'Gift Scheduler', '120Katelin25@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', '9a5b25a8-f34a-4642-8754-f37f3615dd63');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('12447a32-f2ee-4161-9f0b-43a8e5e771a7', 'Special Occasion Notification', 'Your gift order for Sam has been confirmed.', 'Reminder Service', '127Craig.Muller43@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "friend" ("id", "name", "birthday", "relationship", "userId") VALUES ('0129c78f-42bc-42ab-8be5-ed06a676f56f', 'Alex Johnson', '2025-02-16T09:08:56.637Z', 'Sister', 'ae2faaed-c0a8-441b-a424-b68007db5f2d');
INSERT INTO "friend" ("id", "name", "birthday", "relationship", "userId") VALUES ('8a0ee9c8-c348-4e96-aee3-a720796dd7c2', 'Alex Johnson', '2024-10-19T16:13:18.803Z', 'Colleague', '258e5745-fc6b-488d-be42-7a3580dd38ce');
INSERT INTO "friend" ("id", "name", "birthday", "relationship", "userId") VALUES ('4edb371c-c2ca-4d4e-8c03-9dc110bad571', 'James Wilson', '2024-05-18T22:06:14.166Z', 'Cousin', 'ae2faaed-c0a8-441b-a424-b68007db5f2d');
INSERT INTO "friend" ("id", "name", "birthday", "relationship", "userId") VALUES ('508ad6df-a81c-4132-b6a4-b513fca529f0', 'James Wilson', '2024-06-06T09:46:26.808Z', 'Best Friend', '7b74734d-0e85-4c4c-9d42-5c0757efddce');
INSERT INTO "friend" ("id", "name", "birthday", "relationship", "userId") VALUES ('cb6b3013-40b0-445e-b007-68bec8f5744d', 'Sophia Brown', '2024-08-14T15:58:08.118Z', 'Brother', '7b74734d-0e85-4c4c-9d42-5c0757efddce');
INSERT INTO "friend" ("id", "name", "birthday", "relationship", "userId") VALUES ('2497a3c6-c3fe-4735-b6d2-438a76f0c3d7', 'Maria Garcia', '2024-06-25T19:13:02.287Z', 'Cousin', '6e226b3a-8975-4221-b99c-8dd0c0c80c17');
INSERT INTO "friend" ("id", "name", "birthday", "relationship", "userId") VALUES ('072109c2-ac2f-4a2d-8c0f-c43b04e99c9a', 'Alex Johnson', '2023-09-29T19:23:12.641Z', 'Colleague', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "friend" ("id", "name", "birthday", "relationship", "userId") VALUES ('6b3dca87-4d90-49d1-92a3-817141e31633', 'Alex Johnson', '2025-01-02T11:07:28.688Z', 'Cousin', '60d00037-f17e-4a2f-b90e-91c83a0dcf7f');
INSERT INTO "friend" ("id", "name", "birthday", "relationship", "userId") VALUES ('b81c7a3a-8caf-4b10-8151-6374f7332ef2', 'Sophia Brown', '2024-12-05T22:33:36.714Z', 'Brother', '258e5745-fc6b-488d-be42-7a3580dd38ce');
INSERT INTO "friend" ("id", "name", "birthday", "relationship", "userId") VALUES ('6b118e68-212c-46a6-b79f-7ec4dbddb6f0', 'Alex Johnson', '2024-05-08T11:04:53.623Z', 'Brother', '441fdf57-d1de-4837-98ce-6fc4095d61cd');

INSERT INTO "occasion" ("id", "date", "occasionType", "friendId") VALUES ('9ec2f976-67d5-4518-ba66-5fa85d11d555', '2024-07-03T00:10:16.836Z', 'Christmas', '6b118e68-212c-46a6-b79f-7ec4dbddb6f0');
INSERT INTO "occasion" ("id", "date", "occasionType", "friendId") VALUES ('dc02becc-930d-497c-8b0c-86539f4d8221', '2024-06-08T06:19:10.491Z', 'Valentines Day', 'b81c7a3a-8caf-4b10-8151-6374f7332ef2');
INSERT INTO "occasion" ("id", "date", "occasionType", "friendId") VALUES ('d0fe2155-353d-4f9a-b7dd-220b2fedaccb', '2024-10-03T09:49:13.816Z', 'Valentines Day', 'cb6b3013-40b0-445e-b007-68bec8f5744d');
INSERT INTO "occasion" ("id", "date", "occasionType", "friendId") VALUES ('a3e5a1f6-7668-4f0d-810c-d1c0776468eb', '2023-06-26T23:11:22.587Z', 'Birthday', '072109c2-ac2f-4a2d-8c0f-c43b04e99c9a');
INSERT INTO "occasion" ("id", "date", "occasionType", "friendId") VALUES ('ca16b731-3403-4bc5-b1ac-064d8ae28d08', '2024-02-15T01:34:55.577Z', 'Graduation', 'b81c7a3a-8caf-4b10-8151-6374f7332ef2');
INSERT INTO "occasion" ("id", "date", "occasionType", "friendId") VALUES ('9f291734-008e-4e8a-b459-943e4ab9217c', '2024-08-11T11:44:11.709Z', 'Valentines Day', '2497a3c6-c3fe-4735-b6d2-438a76f0c3d7');
INSERT INTO "occasion" ("id", "date", "occasionType", "friendId") VALUES ('132f8f9e-59fc-4f53-952f-f902b68c2546', '2023-08-09T09:00:12.381Z', 'Birthday', '0129c78f-42bc-42ab-8be5-ed06a676f56f');
INSERT INTO "occasion" ("id", "date", "occasionType", "friendId") VALUES ('1848e416-7557-4ab3-8b8a-4d51055c56ce', '2023-04-27T09:11:55.517Z', 'Valentines Day', '8a0ee9c8-c348-4e96-aee3-a720796dd7c2');
INSERT INTO "occasion" ("id", "date", "occasionType", "friendId") VALUES ('8f30760b-b28f-4563-af01-9622c0bb1cfb', '2025-02-01T23:02:33.686Z', 'Valentines Day', '6b118e68-212c-46a6-b79f-7ec4dbddb6f0');
INSERT INTO "occasion" ("id", "date", "occasionType", "friendId") VALUES ('c2751334-7a65-43c4-a5b7-315426f11117', '2023-03-21T06:38:26.203Z', 'Graduation', 'b81c7a3a-8caf-4b10-8151-6374f7332ef2');

INSERT INTO "gift" ("id", "name", "description", "price") VALUES ('eb6fc9a9-a13d-4aeb-a06d-8668a18d85f9', 'Chocolate Box', 'Freshly picked seasonal flowers arranged beautifully.', 5);
INSERT INTO "gift" ("id", "name", "description", "price") VALUES ('0e1800ae-66c6-499f-bd43-3b98ed1ba555', 'Perfume', 'Freshly picked seasonal flowers arranged beautifully.', 360);
INSERT INTO "gift" ("id", "name", "description", "price") VALUES ('efd4775d-37e1-4286-9698-18b28b295271', 'Perfume', 'Freshly picked seasonal flowers arranged beautifully.', 201);
INSERT INTO "gift" ("id", "name", "description", "price") VALUES ('9be327a3-59fd-452b-9069-92852bef5642', 'Chocolate Box', 'Soft and cuddly teddy bear for all ages.', 424);
INSERT INTO "gift" ("id", "name", "description", "price") VALUES ('1ee59ae6-f638-42af-a567-02efce029c54', 'Smart Watch', 'Assorted gourmet chocolates in a luxury box.', 433);
INSERT INTO "gift" ("id", "name", "description", "price") VALUES ('f8930034-5e28-4d94-8345-8856f801fcee', 'Chocolate Box', 'Elegant perfume with a blend of exotic scents.', 762);
INSERT INTO "gift" ("id", "name", "description", "price") VALUES ('078f90b6-45e7-4e49-932d-d821fdcd769c', 'Chocolate Box', 'Freshly picked seasonal flowers arranged beautifully.', 4);
INSERT INTO "gift" ("id", "name", "description", "price") VALUES ('5174b016-efb1-4767-be09-7defee3615a7', 'Smart Watch', 'Assorted gourmet chocolates in a luxury box.', 768);
INSERT INTO "gift" ("id", "name", "description", "price") VALUES ('aab46d60-c80f-4f43-bd8d-2db0b4527f67', 'Smart Watch', 'Freshly picked seasonal flowers arranged beautifully.', 586);
INSERT INTO "gift" ("id", "name", "description", "price") VALUES ('feb6ecb4-b922-49b4-a90c-b63f59c7006a', 'Smart Watch', 'Elegant perfume with a blend of exotic scents.', 30);

INSERT INTO "order" ("id", "orderDate", "deliveryDate", "status", "occasionId", "giftId") VALUES ('ae2fa947-40b9-41fb-b580-0eec3530073c', '2023-10-21T08:13:31.150Z', '2024-11-19T15:16:24.962Z', 'Pending', 'ca16b731-3403-4bc5-b1ac-064d8ae28d08', 'aab46d60-c80f-4f43-bd8d-2db0b4527f67');
INSERT INTO "order" ("id", "orderDate", "deliveryDate", "status", "occasionId", "giftId") VALUES ('d0b290f5-f03d-49a7-9d04-037d516da4b6', '2024-11-08T21:00:34.001Z', '2025-01-06T09:40:34.436Z', 'Processing', '132f8f9e-59fc-4f53-952f-f902b68c2546', '0e1800ae-66c6-499f-bd43-3b98ed1ba555');
INSERT INTO "order" ("id", "orderDate", "deliveryDate", "status", "occasionId", "giftId") VALUES ('bcbcc743-5aa7-49a5-9459-552a8b8a566b', '2024-04-19T16:09:28.787Z', '2024-03-14T21:37:56.600Z', 'Processing', '9f291734-008e-4e8a-b459-943e4ab9217c', '9be327a3-59fd-452b-9069-92852bef5642');
INSERT INTO "order" ("id", "orderDate", "deliveryDate", "status", "occasionId", "giftId") VALUES ('bab4b162-e6ef-4bd6-8f30-da4f4125cdb0', '2024-01-06T19:07:04.537Z', '2024-04-28T09:30:01.544Z', 'Processing', 'dc02becc-930d-497c-8b0c-86539f4d8221', 'eb6fc9a9-a13d-4aeb-a06d-8668a18d85f9');
INSERT INTO "order" ("id", "orderDate", "deliveryDate", "status", "occasionId", "giftId") VALUES ('9ab9f376-69fb-4d01-8393-eac8a9a0aa5b', '2024-10-11T22:39:19.240Z', '2023-10-05T05:20:17.826Z', 'Cancelled', '9ec2f976-67d5-4518-ba66-5fa85d11d555', 'f8930034-5e28-4d94-8345-8856f801fcee');
INSERT INTO "order" ("id", "orderDate", "deliveryDate", "status", "occasionId", "giftId") VALUES ('a602fea0-a821-46cb-b90f-2e243c0b2453', '2024-10-24T01:06:13.055Z', '2025-02-12T08:57:30.898Z', 'Pending', 'd0fe2155-353d-4f9a-b7dd-220b2fedaccb', '5174b016-efb1-4767-be09-7defee3615a7');
INSERT INTO "order" ("id", "orderDate", "deliveryDate", "status", "occasionId", "giftId") VALUES ('d8beb1a0-18c5-4ef9-a879-96bcf1fcfcf8', '2023-07-25T07:57:07.032Z', '2024-12-18T21:29:37.595Z', 'Processing', '132f8f9e-59fc-4f53-952f-f902b68c2546', 'efd4775d-37e1-4286-9698-18b28b295271');
INSERT INTO "order" ("id", "orderDate", "deliveryDate", "status", "occasionId", "giftId") VALUES ('75eeace0-eb56-4b25-8d08-fd76bf979bec', '2024-07-08T18:13:01.934Z', '2024-09-18T11:32:14.758Z', 'Delivered', '9ec2f976-67d5-4518-ba66-5fa85d11d555', '9be327a3-59fd-452b-9069-92852bef5642');
INSERT INTO "order" ("id", "orderDate", "deliveryDate", "status", "occasionId", "giftId") VALUES ('30118198-92c8-4dd3-8c08-4b764debb271', '2025-01-01T18:01:21.464Z', '2023-05-14T11:00:09.762Z', 'Processing', 'a3e5a1f6-7668-4f0d-810c-d1c0776468eb', '9be327a3-59fd-452b-9069-92852bef5642');
INSERT INTO "order" ("id", "orderDate", "deliveryDate", "status", "occasionId", "giftId") VALUES ('054bd6a3-0306-4839-be88-c461d37a4db7', '2023-10-14T16:33:10.843Z', '2024-05-20T23:52:23.468Z', 'Processing', '8f30760b-b28f-4563-af01-9622c0bb1cfb', 'efd4775d-37e1-4286-9698-18b28b295271');

INSERT INTO "calendar" ("id", "friendId", "occasionId") VALUES ('537146ff-878d-45c1-a1dd-5cc0443d865e', '6b118e68-212c-46a6-b79f-7ec4dbddb6f0', '132f8f9e-59fc-4f53-952f-f902b68c2546');
INSERT INTO "calendar" ("id", "friendId", "occasionId") VALUES ('60b67a4e-d1c5-40b1-ac56-effaaae0d163', 'cb6b3013-40b0-445e-b007-68bec8f5744d', 'c2751334-7a65-43c4-a5b7-315426f11117');
INSERT INTO "calendar" ("id", "friendId", "occasionId") VALUES ('1ea94718-c2f5-4e88-9c91-67675f4f0562', '0129c78f-42bc-42ab-8be5-ed06a676f56f', 'c2751334-7a65-43c4-a5b7-315426f11117');
INSERT INTO "calendar" ("id", "friendId", "occasionId") VALUES ('57dbdef1-24a4-4d69-89a5-990d7cf4ed22', '072109c2-ac2f-4a2d-8c0f-c43b04e99c9a', 'a3e5a1f6-7668-4f0d-810c-d1c0776468eb');
INSERT INTO "calendar" ("id", "friendId", "occasionId") VALUES ('4f527907-79f5-434f-8826-e43d1a3aa4ad', '0129c78f-42bc-42ab-8be5-ed06a676f56f', '9ec2f976-67d5-4518-ba66-5fa85d11d555');
INSERT INTO "calendar" ("id", "friendId", "occasionId") VALUES ('b82e2b1a-c4c7-4e3b-9352-0ecf4bdfd8a9', '8a0ee9c8-c348-4e96-aee3-a720796dd7c2', 'ca16b731-3403-4bc5-b1ac-064d8ae28d08');
INSERT INTO "calendar" ("id", "friendId", "occasionId") VALUES ('5bb6e800-e518-45a5-9e29-3ad68f5af7f1', 'b81c7a3a-8caf-4b10-8151-6374f7332ef2', 'ca16b731-3403-4bc5-b1ac-064d8ae28d08');
INSERT INTO "calendar" ("id", "friendId", "occasionId") VALUES ('bf6854c2-c449-4cff-a376-4cd6adb20568', '2497a3c6-c3fe-4735-b6d2-438a76f0c3d7', 'dc02becc-930d-497c-8b0c-86539f4d8221');
INSERT INTO "calendar" ("id", "friendId", "occasionId") VALUES ('0b8689f5-b916-4c96-9f24-d793129043f3', 'cb6b3013-40b0-445e-b007-68bec8f5744d', 'd0fe2155-353d-4f9a-b7dd-220b2fedaccb');
INSERT INTO "calendar" ("id", "friendId", "occasionId") VALUES ('6f5a9190-570e-47cb-b158-d802f1885c9c', 'cb6b3013-40b0-445e-b007-68bec8f5744d', '9f291734-008e-4e8a-b459-943e4ab9217c');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
