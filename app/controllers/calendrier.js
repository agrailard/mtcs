import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		onSelectDay(moments) {
			this.set('model.date.jour', moments.format('dddd D MMMM', 'fr'));
			this.set('model.date.id', moments.format('YYYYMMDD'));
			this.set('selected', moments);
			this.set('model.evenements', this.store.query('evenement', {date: this.get('model.date.id')}));
		},
		sauvegarderNouvelEvenement() {
			this.store.createRecord('evenement', {
				titre: this.get('model.creation.titre'),
				description: this.get('model.creation.description'),
				date: this.get('model.date.id')
			});
			this.send('reloadModel');
			return true;
		}
	}
});
