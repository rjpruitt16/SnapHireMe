import { computed, observable } from "mobx";

export class Capsule {
  @observable title
  @observable imagePath
  @observable datePosted
  @observable dateToDelete
  @observable username

  constructer(title, imagePath, datePosted, dateToDelete) {
    this.title = title;
    this.imagePath = imagePath;
    this.datePosted = datePosted;
    this.dateToDelete = dateToDelete;
    this.username = username;
  }
}

export class CapsuleStore {
  @observable capsules = [
    new Capsule("Summer Day", "src/images/BeachPeople.jpg", "6/1/18", "6/2/18"),
    new Capsule("Paris Night", "src/images/Landscape3.jpg", "6/1/18", "6/2/18")
  ]

  createCapsule(title, imagePath, datePost, dateToDelete, username) {
    this.capsules.push(new Capsule(title, imagePath, datePost, dateToDelete));
  }
}

export default new CapsuleStore();
