import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		nouveau: function() {
			this.clicNouveau();
		},
		quitter: function() {
			this.clicQuitter();
		}
	}
	
});
