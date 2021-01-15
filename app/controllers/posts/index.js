import Controller from "@ember/controller";
import { action } from "@ember/object";
import { set } from "@ember/object";

export default class PostsIndexController extends Controller {
  newTitle;

  @action
  addPost() {
    this.store
      .createRecord("post", {
        title: this.newTitle,
        publishedAt: new Date(),
      })
      .save();
    set(this, "newTitle", "");
  }
}
