import { Factory } from "ember-cli-mirage";
import faker from "faker";

export default Factory.extend({
  title() {
    return faker.lorem.sentence();
  },

  body() {
    return faker.lorem.paragraph(50);
  },

  author() {
    return faker.name.firstName();
  },

  publishedAt() {
    return faker.date.past();
  },
});
