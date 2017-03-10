import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		nouveau: function() {
			this.set('visible', true);
		},
		quitter: function() {
			this.set('visible', false);
			this.set('componentModel.titre', '');
			this.set('componentModel.description', '');
		},
		sauvegarder: function() {
			if(this.get('componentModel.titre') !== null && this.get('componentModel.titre') !== '') {
				if(this.get('componentModel.description') !== null && this.get('componentModel.description') !== '') {
					if (this.clicSauvegarder()) {
						this.send('quitter');
					}
				}
			}
		}
	}
	
});
