import Model, { attr } from "@ember-data/model";

export default class PostModel extends Model {
  @attr title;
  @attr body;
  @attr author;
  @attr("date") publishedAt;

  get formattedPublishedAt() {
    return this.publishedAt.toLocaleDateString("en-US");
  }
}
