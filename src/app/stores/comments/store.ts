import { Injectable } from '@angular/core';
import { DEFAULT_REQUESTED_ITEMS_AMOUNT } from '@app/app.constants';
import { RcCommentsState } from '@app/stores/comments/models';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { PointPublic, UserRole, WorkingState } from "@app/shared/api/points/models";
import { FractionType } from "@app/shared/api/fractions/models";

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'rc/comments', idKey: 'commentId', resettable: true })
export class RcCommentsStore extends EntityStore<RcCommentsState> {
  constructor() {
    super(createInitialState());
    this.set([
      {
        "commentId": 28332,
        "message": "\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0434\u043b\u044f \u043e\u043f\u0430\u0441\u043d\u044b\u0445 \u043e\u0442\u0445\u043e\u0434\u043e\u0432 \u0443\u043a\u0430\u0437\u0430\u043d \u043d\u0430 \u043a\u0430\u0440\u0442\u0435 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u043c\u0435\u0442\u043a\u043e\u0439.",
        "parentCommentId": 28325,
        "timestamp": "2024-04-21T20:33:19.824668+00:00",
        "user": {
          "firstName": "\u0418\u0440\u0438\u043d\u0430",
          "surname": "\u0420\u0430\u0439\u0446\u0435\u0432\u0430",
          "avatar": [],
          "role": UserRole.MODERATOR
        },
        "photoset": [],
        "edited": false,
        "commentStatus": null,
      },
      {
        "commentId": 28331,
        "message": "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440, \u0437\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435! \u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0441\u0432\u0435\u0436\u0438\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438. \u0410\u043b\u044e\u043c\u0438\u043d\u0438\u0435\u0432\u044b\u0435 \u0431\u0430\u043d\u043a\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043d\u0430 \u0412\u0441\u0435\u0432\u043e\u043b\u043e\u0436\u0441\u043a\u0438\u0439 \u0437\u0430\u0432\u043e\u0434 \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u0435\u0432\u044b\u0445 \u0441\u043f\u043b\u0430\u0432\u043e\u0432. \u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0440\u0430\u0437 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u043b\u0430 \u043f\u0440\u0438\u0451\u043c \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u0435\u0432\u044b\u0445 \u0431\u0430\u043d\u043e\u043a \u0432 \u0441\u0432\u043e\u0435\u0439 \u0433\u0440\u0443\u043f\u043f\u0435 \u0432 \u043b\u0438\u0447\u043d\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\u0445 vk.com/petrowaste \u0432 \u043c\u0430\u0440\u0442\u0435. \u041a\u0430\u043a \u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u043e \u0432 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u0431\u0430\u043d\u043a\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0442\u044c \u0432 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0434\u043b\u044f \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u0430. \n\u0427\u0442\u043e \u043a\u0430\u0441\u0430\u0435\u0442\u0441\u044f 5/\u041f\u041f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u0438 \u0441\u0431\u044b\u0442 \u043d\u0430\u043b\u0430\u0436\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u043a\u0440\u0443\u043f\u043d\u043e\u0433\u043e \u0431\u044b\u0442\u043e\u0432\u043e\u0433\u043e 5/\u041f\u041f \u0442\u0438\u043f\u0430 \u0432\u0451\u0434\u0435\u0440 \u0438 \u0442\u0430\u0437\u043e\u0432, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u041f\u041f \u043d\u0430 \u043a\u0430\u0440\u0442\u0435 \u043c\u044b \u043d\u0435 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c.",
        "parentCommentId": 28325,
        "timestamp": "2024-04-21T20:32:05.778913+00:00",
        "user": {
          "firstName": "\u0418\u0440\u0438\u043d\u0430",
          "surname": "\u0420\u0430\u0439\u0446\u0435\u0432\u0430",
          "avatar": [],
          "role": UserRole.MODERATOR
        },
        "photoset": [],
        "edited": false,
        "commentStatus": null,
      },
      {
        "commentId": 28325,
        "message": "\u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c.\n\u041d\u0435 \u043d\u0430\u0448\u0451\u043b \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0434\u043b\u044f \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u044f.\n\u041f\u0440\u043e\u0447\u0438\u0442\u0430\u043b \u043f\u043e\u0441\u0442 (https://www.instagram.com/p/B5sVYA6Cesv/?igshid=1druejw1tdss4), \u043d\u043e \u043d\u0435 \u0443\u0432\u0435\u0440\u0435\u043d \u0432 \u0435\u0433\u043e \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438. \u041f\u043e\u0437\u0432\u043e\u043d\u0438\u043b \u0432 \u0434\u0438\u0441\u043f\u0435\u0442\u0447\u0435\u0440\u0441\u043a\u0443\u044e (8-812-412-21-26) - \u0441\u043a\u0430\u0437\u0430\u043b\u0438, \u043f\u0435\u0440\u0432\u044b\u0439 \u0440\u0430\u0437 \u0441\u043b\u044b\u0448\u0430\u0442. \u041f\u043e\u0437\u0432\u043e\u043d\u044e \u0432 \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a, \u043a\u043e\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e. \n\u0417\u0430\u0442\u043e \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u043b \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0434\u043b\u044f \u043b\u0430\u043c\u043f(\u043d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u043c \u0444\u043e\u0442\u043e)\n\u0422\u0430\u043a \u0436\u0435 \u0432 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u0437\u0434\u0435\u0441\u044c \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 PP (\u21165) \u0434\u043b\u044f \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u0430, \u0445\u043e\u0442\u044f \u0432 \u0412\u041a \u043e\u043d\u0430 \u0435\u0441\u0442\u044c(https://www.p-w.ru/razdelnyj-sbor-othodov/sbor-plastic).",
        "parentCommentId": 0,
        "timestamp": "2024-04-21T07:44:45.891641+00:00",
        "user": {
          "firstName": "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440",
          "surname": "",
          "avatar": [],
          "role": UserRole.USER
        },
        "photoset": [
          {
            "photo_id": 24558,
            "order": 1,
            "path": "da6cc_20240421-074444.jpg",
            "thumb": "da6cc_20240421-074444.thumbnail.jpg"
          },
          {
            "photo_id": 24562,
            "order": 2,
            "path": "789a6_20240421-074445.jpg",
            "thumb": "789a6_20240421-074445.thumbnail.jpg"
          },
          {
            "photo_id": 24563,
            "order": 3,
            "path": "bd3e4_20240421-074445.jpg",
            "thumb": "bd3e4_20240421-074445.thumbnail.jpg"
          },
          {
            "photo_id": 24560,
            "order": 4,
            "path": "e6f87_20240421-074445.jpg",
            "thumb": "e6f87_20240421-074445.thumbnail.jpg"
          },
          {
            "photo_id": 24557,
            "order": 5,
            "path": "a1310_20240421-074444.jpg",
            "thumb": "a1310_20240421-074444.thumbnail.jpg"
          },
          {
            "photo_id": 24561,
            "order": 6,
            "path": "4fc8b_20240421-074445.jpg",
            "thumb": "4fc8b_20240421-074445.thumbnail.jpg"
          },
          {
            "photo_id": 24559,
            "order": 7,
            "path": "1cf03_20240421-074445.jpg",
            "thumb": "1cf03_20240421-074445.thumbnail.jpg"
          }
        ],
        "edited": false,
        "commentStatus": null,
      },
      {
        "commentId": 20209,
        "message": "\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0430, \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0431 \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u0435\u0432\u044b\u0445 \u0431\u0430\u043d\u043a\u0430\u0445 \u0432 \u0441\u043e\u0446\u0441\u0435\u0442\u044f\u0445 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430: https://www.instagram.com/p/B5sVYA6Cesv/?igshid=1druejw1tdss4. \u0412 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u043a\u043b\u0430\u0441\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u0435\u0432\u044b\u0435 \u0431\u0430\u043d\u043a\u0438, \u0430 \u043d\u0435 \u043b\u044e\u0431\u043e\u0439 \u043c\u0435\u0442\u0430\u043b\u043b.",
        "parentCommentId": 20205,
        "timestamp": "2021-02-09T23:59:10+00:00",
        "user": {
          "firstName": "\u041c\u0430\u0440\u0438\u044f",
          "surname": "\u041c\u0443\u0441\u0430\u0442\u043e\u0432\u0430",
          "avatar": [],
          "role": UserRole.MODERATOR
        },
        "photoset": [],
        "edited": false,
        "commentStatus": null,
      },
      {
        "commentId": 20205,
        "message": "\u042f \u0441\u0434\u0430\u044e \u0442\u0443\u0434\u0430 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e, \u043d\u043e \u0442\u0430\u043c \u043d\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0447\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u043a\u043b\u0430\u0441\u0442\u044c \u043c\u0435\u0442\u0430\u043b\u043b..",
        "parentCommentId": 0,
        "timestamp": "2021-02-09T23:36:49+00:00",
        "user": {
          "firstName": "\u0418\u043c\u044f",
          "surname": "\u0424\u0430\u043c\u0438\u043b\u0438\u044f",
          "avatar": [],
          "role": UserRole.USER
        },
        "photoset": [],
        "edited": false,
        "commentStatus": null,
      },
      {
        "commentId": 17650,
        "message": "\u0414\u0435\u043d\u0438\u0441, \u0441\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043f\u0443\u043d\u043a\u0442\u0435. \u041f\u0440\u043e \u0442\u0430\u0440\u043d\u043e\u0435 \u0441\u0442\u0435\u043a\u043b\u043e \u0432 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u043e",
        "parentCommentId": 17635,
        "timestamp": "2020-10-04T00:09:55+00:00",
        "user": {
          "firstName": "\u041c\u0430\u0440\u0438\u044f",
          "surname": "\u042f\u043a\u043e\u0432\u043b\u0435\u0432\u0430",
          "avatar": [],
          "role": UserRole.MODERATOR
        },
        "photoset": [],
        "edited": false,
        "commentStatus": null,
      },
      {
        "commentId": 17649,
        "message": "\u0414\u0435\u043d\u0438\u0441, \u043d\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e, \u0447\u0442\u043e \u043d\u0435\u043b\u044c\u0437\u044f \u043f\u0438\u0449\u0435\u0432\u0443\u044e \u043f\u043b\u0435\u043d\u043a\u0443. \u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430",
        "parentCommentId": 17636,
        "timestamp": "2020-10-04T00:06:43+00:00",
        "user": {
          "firstName": "\u041c\u0430\u0440\u0438\u044f",
          "surname": "\u042f\u043a\u043e\u0432\u043b\u0435\u0432\u0430",
          "avatar": [],
          "role": UserRole.MODERATOR
        },
        "photoset": [],
        "edited": false,
        "commentStatus": null,
      },
      {
        "commentId": 17636,
        "message": "\u041d\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435 \u0434\u043b\u044f \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043e, \u0447\u0442\u043e \u043f\u043b\u0451\u043d\u043a\u0443 \u043d\u0435 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0442! \u041d\u0438\u043a\u0430\u043a\u0443\u044e.",
        "parentCommentId": 0,
        "timestamp": "2020-10-03T14:54:01+00:00",
        "user": {
          "firstName": "\u0414\u0435\u043d\u0438\u0441",
          "surname": "\u0428\u0435\u043b\u043e\u043c\u043e\u0432",
          "avatar": [],
          "role": UserRole.USER
        },
        "photoset": [],
        "edited": false,
        "commentStatus": null,
      },
      {
        "commentId": 17635,
        "message": "\u041d\u0430 \u043c\u0435\u0441\u0442\u0435 \u0435\u0441\u0442\u044c \u0442\u0440\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430, \u043e\u0434\u0438\u043d \u0438\u0437 \u043d\u0438\u0445 \u0434\u043b\u044f \u0442\u0430\u0440\u044b \u0438\u0437 \u0441\u0442\u0435\u043a\u043b\u0430. \u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e \u043d\u0430 \u043d\u0451\u043c \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043e, \u0447\u0442\u043e \u043e\u043a\u043e\u043d\u043d\u043e\u0435 \u0441\u0442\u0435\u043a\u043b\u043e \u0442\u0443\u0434\u0430 \u043d\u0435\u043b\u044c\u0437\u044f. \u0424\u043e\u0442\u043e \u043d\u0435\u0442",
        "parentCommentId": 0,
        "timestamp": "2020-10-03T14:51:33+00:00",
        "user": {
          "firstName": "\u0414\u0435\u043d\u0438\u0441",
          "surname": "\u0428\u0435\u043b\u043e\u043c\u043e\u0432",
          "avatar": [],
          "role": UserRole.USER
        },
        "photoset": [],
        "edited": false,
        "commentStatus": null,
      },
      {
        "commentId": 14660,
        "message": "\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0441\u0442\u0435\u043a\u043b\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0443 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043e\u0442 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u00ab\u041f\u0435\u0442\u0440\u043e-\u0412\u0430\u0441\u0442\u00bb https://vk.com/wall-112343748_938 \u041f\u0440\u043e\u0441\u0438\u043c \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u044c \u0437\u0434\u0435\u0441\u044c \u0432 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f\u0445, \u0435\u0441\u043b\u0438 \u043d\u0435 \u043d\u0430\u0448\u043b\u0438 \u043d\u0430 \u043c\u0435\u0441\u0442\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0434\u043b\u044f \u0441\u0442\u0435\u043a\u043b\u0430.",
        "parentCommentId": 14654,
        "timestamp": "2020-06-08T14:11:36+00:00",
        "user": {
          "firstName": "\u0415\u0432\u0433\u0435\u043d\u0438\u044f",
          "surname": "\u0413\u0430\u043b\u043a\u0438\u043d\u0430",
          "avatar": [],
          "role": UserRole.MODERATOR
        },
        "photoset": [],
        "edited": false,
        "commentStatus": null,
      }
    ]);
  }
}

export function createInitialState(): RcCommentsState {
  return {
    pointInfo: {
      "pointId": 6734,
      "address": "\u0443\u043b. \u042f\u0431\u043b\u043e\u0447\u043a\u043e\u0432\u0430, 2/10",
      "addressDescription": null,
      "pointDescription": "\u0412 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0434\u043b\u044f \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u0430 \u043c\u043e\u0436\u043d\u043e \u043a\u043b\u0430\u0441\u0442\u044c \u0431\u0443\u0442\u044b\u043b\u043a\u0438, \u0444\u043b\u0430\u043a\u043e\u043d\u044b \u0438 \u043a\u0430\u043d\u0438\u0441\u0442\u0440\u044b 1/PET/\u041f\u042d\u0422 (\u0432 \u0442.\u0447. \u0431\u0435\u043b\u044b\u0435 \u0438 \u0438\u0437-\u043f\u043e\u0434 \u043c\u0430\u0441\u043b\u0430), 2/HDPE/\u041f\u041d\u0414, 4/LDPE/\u041f\u0412\u0414, \u0447\u0438\u0441\u0442\u044b\u0435 \u043f\u043e\u043b\u0438\u044d\u0442\u0438\u043b\u0435\u043d\u043e\u0432\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b \u0438 \u043f\u043b\u0451\u043d\u043a\u0443 \u0431\u0435\u0437 \u043d\u0430\u043a\u043b\u0435\u0435\u043a \u0438 \u0441\u043a\u043e\u0442\u0447\u0430, \u0410\u041b\u042e\u041c\u0418\u041d\u0418\u0415\u0412\u042b\u0415 \u0411\u0410\u041d\u041a\u0418 \u0438\u0437-\u043f\u043e\u0434 \u043d\u0430\u043f\u0438\u0442\u043a\u043e\u0432 (\u043a\u043b\u0430\u0441\u0442\u044c \u0432 \u0436\u0435\u043b\u0442\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440). \u0411\u0443\u0442\u044b\u043b\u043a\u0438, \u043a\u0430\u043d\u0438\u0441\u0442\u0440\u044b \u0438 \u0431\u0430\u043d\u043a\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043c\u0438\u043d\u0430\u0442\u044c. \u0412\u0441\u0451 \u0441\u044b\u0440\u044c\u0451 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u0442\u044b\u043c \u0438 \u0441\u0443\u0445\u0438\u043c. \r\n\u0412 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0434\u043b\u044f \u0441\u0442\u0435\u043a\u043b\u0430 \u043c\u043e\u0436\u043d\u043e \u043a\u043b\u0430\u0441\u0442\u044c \u043b\u044e\u0431\u0443\u044e \u0441\u0442\u0435\u043a\u043b\u043e\u0442\u0430\u0440\u0443, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043d\u044f\u0442\u044c \u043c\u0435\u0442\u0430\u043b\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043a\u0440\u044b\u0448\u043a\u0438 \u0438 \u043a\u043e\u043b\u044c\u0446\u0430. \r\n\u0412 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0434\u043b\u044f \u043c\u0430\u043a\u0443\u043b\u0430\u0442\u0443\u0440\u044b \u043c\u043e\u0436\u043d\u043e \u043a\u043b\u0430\u0441\u0442\u044c \u043b\u044e\u0431\u0443\u044e \u043c\u0430\u043a\u0443\u043b\u0430\u0442\u0443\u0440\u0443; \u0435\u0451 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0443\u043f\u0430\u043a\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u0438 \u043f\u0435\u0440\u0435\u0432\u044f\u0437\u044b\u0432\u0430\u0442\u044c, \u0430 \u043a\u043e\u0440\u043e\u0431\u043a\u0438 \u0441\u043f\u043b\u044e\u0449\u0438\u0432\u0430\u0442\u044c.",
      "geom": "POINT(30.30290215012291 59.95046278457837)",
      "precise": null,
      "restricted": false,
      "title": "\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b \u0434\u043b\u044f \u0432\u0442\u043e\u0440\u0441\u044b\u0440\u044c\u044f \u00ab\u041f\u0435\u0442\u0440\u043e-\u0412\u0430\u0441\u0442\u00bb",
      "scheduleDescription": null,
      "fractions": [
      ],
      "disabled": false,
      "photos": [
        {
          "photo_id": 3887,
          "order": 1,
          "path": "21438_20191102-203416_1.jpg",
          "thumb": null
        },
        {
          "photo_id": 3888,
          "order": 2,
          "path": "21438_20191102-203416_2.jpg",
          "thumb": null
        },
        {
          "photo_id": 3889,
          "order": 3,
          "path": "21438_20191102-203416_3.jpg",
          "thumb": null
        },
        {
          "photo_id": 3890,
          "order": 4,
          "path": "21438_20191116-161016_1.jpg",
          "thumb": null
        },
        {
          "photo_id": 3891,
          "order": 5,
          "path": "21438_20220514-110041_1.jpg",
          "thumb": null
        },
        {
          "photo_id": 24571,
          "order": 6,
          "path": "ed097_20240421-203522.jpg",
          "thumb": "ed097_20240421-203522.thumbnail.jpg"
        },
        {
          "photo_id": 24572,
          "order": 7,
          "path": "ec68e_20240421-203522.jpg",
          "thumb": "ec68e_20240421-203522.thumbnail.jpg"
        },
        {
          "photo_id": 24573,
          "order": 8,
          "path": "72e50_20240421-203522.jpg",
          "thumb": "72e50_20240421-203522.thumbnail.jpg"
        }
      ],
      "rating": {
        "likes": 7,
        "dislikes": 0,
        "score": 1.0
      },
      "businesHoursState": {
        "state": WorkingState.ALLDAY,
        "nextStateTime": null,
      },
      "numberOfComments": 9,
      "schedule": [
        {
          "dow": 0,
          "opens": [
            "00:00"
          ],
          "closes": [
            "23:59"
          ]
        },
        {
          "dow": 1,
          "opens": [
            "00:00"
          ],
          "closes": [
            "23:59"
          ]
        },
        {
          "dow": 2,
          "opens": [
            "00:00"
          ],
          "closes": [
            "23:59"
          ]
        },
        {
          "dow": 3,
          "opens": [
            "00:00"
          ],
          "closes": [
            "23:59"
          ]
        },
        {
          "dow": 4,
          "opens": [
            "00:00"
          ],
          "closes": [
            "23:59"
          ]
        },
        {
          "dow": 5,
          "opens": [
            "00:00"
          ],
          "closes": [
            "23:59"
          ]
        },
        {
          "dow": 6,
          "opens": [
            "00:00"
          ],
          "closes": [
            "23:59"
          ]
        }
      ],
      "validDates": [],
      "operator": {
        "operatorId": 1203,
        "title": "vk.com/petrowaste",
        "address": "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u0448., 344 \ufeff",
        "phones": [
          "+7 812 332-53-55"
        ],
        "emails": [],
        "sites": [
          "http://vk.com/petrowaste",
          "http://p-w.ru",
          "http://t.me/petrowast"
        ]
      },
      "lastUpdate": "2024-04-21",
      "moderators": [
        {
          "firstName": "\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u043c\u043e\u0434\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u0432",
          "surname": "\u0421\u041f\u0431",
          "avatar": [],
          "role": UserRole.MODERATOR,
          "email": "spb@recyclemap.ru"
        }
      ],
      "comments": [
        {
          "commentId": 28325,
          "message": "\u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c.\n\u041d\u0435 \u043d\u0430\u0448\u0451\u043b \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0434\u043b\u044f \u0430\u043b\u044e\u043c\u0438\u043d\u0438\u044f.\n\u041f\u0440\u043e\u0447\u0438\u0442\u0430\u043b \u043f\u043e\u0441\u0442 (https://www.instagram.com/p/B5sVYA6Cesv/?igshid=1druejw1tdss4), \u043d\u043e \u043d\u0435 \u0443\u0432\u0435\u0440\u0435\u043d \u0432 \u0435\u0433\u043e \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438. \u041f\u043e\u0437\u0432\u043e\u043d\u0438\u043b \u0432 \u0434\u0438\u0441\u043f\u0435\u0442\u0447\u0435\u0440\u0441\u043a\u0443\u044e (8-812-412-21-26) - \u0441\u043a\u0430\u0437\u0430\u043b\u0438, \u043f\u0435\u0440\u0432\u044b\u0439 \u0440\u0430\u0437 \u0441\u043b\u044b\u0448\u0430\u0442. \u041f\u043e\u0437\u0432\u043e\u043d\u044e \u0432 \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a, \u043a\u043e\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e. \n\u0417\u0430\u0442\u043e \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u043b \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0434\u043b\u044f \u043b\u0430\u043c\u043f(\u043d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u043c \u0444\u043e\u0442\u043e)\n\u0422\u0430\u043a \u0436\u0435 \u0432 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u0437\u0434\u0435\u0441\u044c \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 PP (\u21165) \u0434\u043b\u044f \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u0430, \u0445\u043e\u0442\u044f \u0432 \u0412\u041a \u043e\u043d\u0430 \u0435\u0441\u0442\u044c(https://www.p-w.ru/razdelnyj-sbor-othodov/sbor-plastic).",
          "parentCommentId": 0,
          "timestamp": "2024-04-21T07:44:45.891641+00:00",
          "user": {
            "firstName": "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440",
            "surname": "",
            "avatar": [],
            "role": UserRole.USER
          },
          "photoset": [
            {
              "photo_id": 24558,
              "order": 1,
              "path": "da6cc_20240421-074444.jpg",
              "thumb": "da6cc_20240421-074444.thumbnail.jpg"
            },
            {
              "photo_id": 24562,
              "order": 2,
              "path": "789a6_20240421-074445.jpg",
              "thumb": "789a6_20240421-074445.thumbnail.jpg"
            },
            {
              "photo_id": 24563,
              "order": 3,
              "path": "bd3e4_20240421-074445.jpg",
              "thumb": "bd3e4_20240421-074445.thumbnail.jpg"
            },
            {
              "photo_id": 24560,
              "order": 4,
              "path": "e6f87_20240421-074445.jpg",
              "thumb": "e6f87_20240421-074445.thumbnail.jpg"
            },
            {
              "photo_id": 24557,
              "order": 5,
              "path": "a1310_20240421-074444.jpg",
              "thumb": "a1310_20240421-074444.thumbnail.jpg"
            },
            {
              "photo_id": 24561,
              "order": 6,
              "path": "4fc8b_20240421-074445.jpg",
              "thumb": "4fc8b_20240421-074445.thumbnail.jpg"
            },
            {
              "photo_id": 24559,
              "order": 7,
              "path": "1cf03_20240421-074445.jpg",
              "thumb": "1cf03_20240421-074445.thumbnail.jpg"
            }
          ],
          "edited": false,
          "commentStatus": null
        },
        {
          "commentId": 20205,
          "message": "\u042f \u0441\u0434\u0430\u044e \u0442\u0443\u0434\u0430 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e, \u043d\u043e \u0442\u0430\u043c \u043d\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0447\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u043a\u043b\u0430\u0441\u0442\u044c \u043c\u0435\u0442\u0430\u043b\u043b..",
          "parentCommentId": 0,
          "timestamp": "2021-02-09T23:36:49+00:00",
          "user": {
            "firstName": "\u0418\u043c\u044f",
            "surname": "\u0424\u0430\u043c\u0438\u043b\u0438\u044f",
            "avatar": [],
            "role": UserRole.USER
          },
          "photoset": [],
          "edited": false,
          "commentStatus": null
        }
      ],
      "iLike": false,
      "iDisike": false,
      "myFavorite": false,
      "myPoint": false,
      "myEdits": false,
      "inProgress": null,
      "type": FractionType.RC
    } as PointPublic,
    scrollNavigationState: {
      totalResults: 9,
      currentAmount: 9,
    },
    sizeAndOffset: {
      offset: 0,
      size: DEFAULT_REQUESTED_ITEMS_AMOUNT,
    }
  }
}
