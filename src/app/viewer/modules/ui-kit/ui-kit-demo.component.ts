import {Component} from "@angular/core";
import {Marker} from "@app/app.models";
import {FractionType} from "@app/shared/api/fractions/models";
import {UserRole} from "@app/shared/api/points/models";

@Component({
  selector: 'rc-ui-kit-demo',
  templateUrl: './ui-kit-demo.component.html',
  styleUrls: ['./ui-kit-demo.component.scss']
})
export class RcUiKitDemoComponent {

  public readonly markers: Marker[] = [
    {
      "id": 33235,
      "title": "Стационарный пункт приема опасных отходов",
      "type": FractionType.RC,
      "needMod": false,
      "myAoR": false,
      "fractions": [
        {
          "id": 7,
          "name": "LAMPOCHKI",
          "type": FractionType.RC,
          "color": "#8F6EEF",
          "icon": "lightbulbs.svg"
        },
        {
          "id": 9,
          "name": "BYTOVAJA_TEHNIKA",
          "type": FractionType.RC,
          "color": "#C06563",
          "icon": "appliances.svg"
        },
        {
          "id": 10,
          "name": "BATAREJKI",
          "type": FractionType.RC,
          "color": "#C8744E",
          "icon": "battery.svg"
        },
        {
          "id": 11,
          "name": "SHINY",
          "type": FractionType.RC,
          "color": "#6F4D41",
          "icon": "tires.svg"
        },
        {
          "id": 12,
          "name": "OPASNYE_OTHODY",
          "type": FractionType.RC,
          "color": "#242627",
          "icon": "dangerous.svg"
        },
        {
          "id": 13,
          "name": "INOE",
          "type": FractionType.RC,
          "color": "#3EB8DE",
          "icon": "other.svg"
        }
      ],
      "restricted": false,
      "missMod": false,
      "coordinates": [
        30.330738723278046,
        59.928974095100386
      ],
      "isSmallPin": false
    },
    {
      "id": 21511,
      "title": "Контейнер для пластиковых бутылок «Спецтранс №1»",
      "type": FractionType.RC,
      "needMod": false,
      "myAoR": false,
      "fractions": [
        {
          "id": 2,
          "name": "PLASTIK",
          "type": FractionType.RC,
          "color": "#ED671C",
          "icon": "plastic.svg"
        }
      ],
      "restricted": false,
      "missMod": false,
      "coordinates": [
        30.333764255046844,
        59.925851875728625
      ],
      "isSmallPin": false
    },
    {
      "id": 23624,
      "title": "Контейнер для пластиковых бутылок «Спецтранс №1»",
      "type": FractionType.RC,
      "needMod": false,
      "userRole": UserRole.MODERATOR,
      "myAoR": false,
      "fractions": [
        {
          "id": 2,
          "name": "PLASTIK",
          "type": FractionType.RC,
          "color": "#ED671C",
          "icon": "plastic.svg"
        },
        {
          "id": 4,
          "name": "METALL",
          "type": FractionType.RC,
          "color": "#E83623",
          "icon": "metall.svg"
        }
      ],
      "restricted": true,
      "missMod": true,
      "coordinates": [
        30.307438373565674,
        59.92269306812756
      ],
      "isSmallPin": false
    },
    {
      "id": 20869,
      "title": "Контейнеры для вторсырья «Петро-Васт»",
      "type": FractionType.RC,
      "needMod": true,
      "userRole": UserRole.MODERATOR,
      "myAoR": true,
      "fractions": [
        {
          "id": 2,
          "name": "PLASTIK",
          "type": FractionType.RC,
          "color": "#ED671C",
          "icon": "plastic.svg"
        },
        {
          "id": 3,
          "name": "STEKLO",
          "type": FractionType.RC,
          "color": "#227440",
          "icon": "glass.svg"
        },
        {
          "id": 4,
          "name": "METALL",
          "type": FractionType.RC,
          "color": "#E83623",
          "icon": "metall.svg"
        }
      ],
      "restricted": false,
      "missMod": false,
      "coordinates": [
        30.30193381011486,
        59.97928737910058
      ],
      "isSmallPin": false
    },
    {
      "id": 7690,
      "title": "Контейнеры для вторсырья «Петро-Васт»",
      "type": FractionType.RC,
      "needMod": true,
      "userRole": UserRole.MODERATOR,
      "myAoR": false,
      "fractions": [
        {
          "id": 1,
          "name": "BUMAGA",
          "type": FractionType.RC,
          "color": "#4085F3",
          "icon": "paper.svg"
        },
        {
          "id": 2,
          "name": "PLASTIK",
          "type": FractionType.RC,
          "color": "#ED671C",
          "icon": "plastic.svg"
        },
        {
          "id": 3,
          "name": "STEKLO",
          "type": FractionType.RC,
          "color": "#227440",
          "icon": "glass.svg"
        },
        {
          "id": 4,
          "name": "METALL",
          "type": FractionType.RC,
          "color": "#E83623",
          "icon": "metall.svg"
        }
      ],
      "restricted": false,
      "missMod": false,
      "coordinates": [
        30.308497175574303,
        59.9760392117208
      ],
      "isSmallPin": false
    },
    {
      "id": 33235,
      "title": "Стационарный пункт приема опасных отходов",
      "type": FractionType.RC,
      "needMod": false,
      "myAoR": false,
      "fractions": [
        {
          "id": 2,
          "name": "PLASTIK",
          "type": FractionType.RC,
          "color": "#ED671C",
          "icon": "plastic.svg"
        },
        {
          "id": 3,
          "name": "STEKLO",
          "type": FractionType.RC,
          "color": "#227440",
          "icon": "glass.svg"
        },
        {
          "id": 4,
          "name": "METALL",
          "type": FractionType.RC,
          "color": "#E83623",
          "icon": "metall.svg"
        },
        {
          "id": 7,
          "name": "LAMPOCHKI",
          "type": FractionType.RC,
          "color": "#8F6EEF",
          "icon": "lightbulbs.svg"
        },
        {
          "id": 9,
          "name": "BYTOVAJA_TEHNIKA",
          "type": FractionType.RC,
          "color": "#C06563",
          "icon": "appliances.svg"
        },
        {
          "id": 10,
          "name": "BATAREJKI",
          "type": FractionType.RC,
          "color": "#C8744E",
          "icon": "battery.svg"
        },
        {
          "id": 11,
          "name": "SHINY",
          "type": FractionType.RC,
          "color": "#6F4D41",
          "icon": "tires.svg"
        },
        {
          "id": 12,
          "name": "OPASNYE_OTHODY",
          "type": FractionType.RC,
          "color": "#242627",
          "icon": "dangerous.svg"
        },
        {
          "id": 13,
          "name": "INOE",
          "type": FractionType.RC,
          "color": "#3EB8DE",
          "icon": "other.svg"
        }
      ],
      "restricted": false,
      "missMod": false,
      "coordinates": [
        30.330738723278046,
        59.928974095100386
      ],
      "isSmallPin": false
    },
  ];
}
