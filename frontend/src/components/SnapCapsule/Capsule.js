import { computed, observable } from "mobx";

export default class Capsule {
  @observable title
  @observable imagePath
  @observable datePosted
  @observable username

  constructor(title, imagePath, datePosted, username) {
    this.title = title;
    this.imagePath = imagePath;
    this.datePosted = datePosted;
    this.username = username;
  }
}
