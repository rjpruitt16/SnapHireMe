import { computed, observable } from "mobx";
import Capsule from "./components/SnapCapsule/Capsule";

export class CapsuleStore {
  @observable capsules = []

  addCapsule(title, imagePath, datePost, username) {
    this.capsules.push(new Capsule(title, imagePath, datePost, username));
  }

  clear() {
    this.capsules = []
  }
}

export default new CapsuleStore();
