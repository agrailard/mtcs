import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
	moment: Ember.inject.service(),
  	beforeModel() {
    	this.get('moment').setLocale('es');
  	},
	model() {
		const model = {};
		model.date = {
			id: moment().format('YYYYMMDD'),
			jour: moment().format('dddd D MMMM')
		};

		model.evenements = this.store.query('evenement', {date: model.date.id});

		model.creation = {};
		model.creation.titre = null;
		model.creation.description = null;

		return model;
	},
	actions: {
		reloadModel: function() {
			this.refresh();
		}
	}
});
