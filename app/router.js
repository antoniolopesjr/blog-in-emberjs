import EmberRouter from "@ember/routing/router";
import config from "blog-in-emberjs/config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("posts", function () {
    this.route("post", { path: ":post_id" });
  });
});
