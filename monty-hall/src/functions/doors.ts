import DoorModel from "../model/door";

export function createDoors(qtde: number, doorWithGift: number): DoorModel[] {
  return Array.from({ length: qtde }, (_, i) => {
    const number = i + 1;
    const hasGift = number === doorWithGift;
    return new DoorModel(number, hasGift);
  });
}

export function updateDoors(
  doors: DoorModel[],
  doorChanged: DoorModel
): DoorModel[] {
  return doors.map((currentDoor) => {
    const equalChanged = currentDoor.number === doorChanged.number;

    if (equalChanged) {
      return doorChanged;
    } else {
      return doorChanged.opened ? currentDoor : currentDoor.unSelect();
    }
  });
}
