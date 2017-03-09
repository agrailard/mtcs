import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
	titre() {
		return faker.lorem.words();
	},
	date(i) {
		return faker.list.random('20170309', '20170310', '20170311', '20170312')(i);
	},
	description() {
		return faker.lorem.paragraph();
	}
});
