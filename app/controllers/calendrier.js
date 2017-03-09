import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		onSelectDay(moments) {
			this.set('model.date.jour', moments.format('dddd D MMMM', 'fr'));
			this.set('model.date.id', moments.format('YYYYMMDD'));
			this.set('selected', moments);
			this.set('model.evenements', this.store.query('evenement', {date: this.get('model.date.id')}));
		},
		nouvelEvenement() {
			this.set('model.evenements.creation.visible', true);
		},
		quitterNouvelEvenement() {
			this.set('model.evenements.creation.visible', false);
		},
		sauvegarderNouvelEvenement(event) {
			store.createRecord('post', {
				titre: event.titre,
				description: event.description,
				date: event.date
			});
			return true;
		}
	}
});
