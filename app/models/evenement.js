import DS from 'ember-data';

export default DS.Model.extend({
	date: DS.attr('string'),
	titre: DS.attr('string'),
	description: DS.attr('string')
});
