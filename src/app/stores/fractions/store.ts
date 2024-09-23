import { Injectable } from '@angular/core';
import { RcFractionsState } from '@app/stores/fractions/models';
import { Store, StoreConfig } from '@datorama/akita';
import { FractionType } from "@app/shared/api/fractions/models";

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'rc/fractions' })
export class RcFractionsStore extends Store<RcFractionsState> {

  constructor() {
    super(createInitialState());
  }
}

export function createInitialState(): RcFractionsState {
  return {
    fractions: [
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
      },
      {
        "id": 5,
        "name": "TETRA_PAK",
        "type": FractionType.RC,
        "color": "#2CC0A5",
        "icon": "tetrapack.svg"
      },
      {
        "id": 6,
        "name": "ODEZHDA",
        "type": FractionType.RC,
        "color": "#EA4C99",
        "icon": "clothes.svg"
      },
      {
        "id": 7,
        "name": "LAMPOCHKI",
        "type": FractionType.RC,
        "color": "#8F6EEF",
        "icon": "lightbulbs.svg"
      },
      {
        "id": 8,
        "name": "KRYSHECHKI",
        "type": FractionType.RC,
        "color": "#DAA219",
        "icon": "caps.svg"
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
  }
}
