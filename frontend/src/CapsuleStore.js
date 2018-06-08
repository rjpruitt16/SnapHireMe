import { computed, observable } from "mobx";
import Capsule from "./components/SnapCapsule/Capsule";

export class CapsuleStore {
  @observable capsules = []

  addCapsule(title, imagePath, datePost, dateToDelete, username) {
    this.capsules.push(new Capsule(title, imagePath, datePost, dateToDelete, username));
  }
}

export default new CapsuleStore();
