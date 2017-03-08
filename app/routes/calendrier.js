import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
	moment: Ember.inject.service(),
  	beforeModel() {
    	this.get('moment').setLocale('es');
  	},
	model() {
		const model = {};
		model.date = {};
		model.date.jour = moment().format('dddd D MMMM');
		model.date.id = moment().format('YYYYMMDD');

		model.evenements = this.store.query('evenement', {date: model.date.id});
		model.evenements.creation = {
			visible: false
		};

		return model;
	}
});
