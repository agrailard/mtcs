import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return {
			jour_semaine: '',
			jour: '',
			mois: ''
		};
	}
});
