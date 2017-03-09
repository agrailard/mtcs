import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		nouveau: function() {
			this.set('visible', true);
		},
		quitter: function() {
			this.set('visible', false);
		},
		sauvegarder: function() {
			alert('pas encore implémenté');
			/*TODO: à revoir
			alert(this.$('creation-event-titre'));
			if(this.get('creation-event-titre') !== undefined && this.get('creation-event-titre') !== '') {
				if(this.get('creation-event-description') !== undefined && this.get('creation-event-description') !== '') {
					const event = {
						titre: this.get('creation-event-titre'),
						description: this.get('creation-event-description'),
						date: this.get('model.date.id')
					};
					if (this.clicSauvegarder()) {
						this.set('visible', false);
					}
				}
			}*/
		}
	}
	
});
