import { computed, observable } from "mobx";

export default class Capsule {
  @observable title
  @observable imagePath
  @observable datePosted
  @observable dateToDelete
  @observable username

  constructor(title, imagePath, datePosted, dateToDelete, username) {
    this.title = title;
    this.imagePath = imagePath;
    this.datePosted = datePosted;
    this.dateToDelete = dateToDelete;
    this.username = username;
  }
}
