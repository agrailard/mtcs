import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('emby');
  this.route('seedbox');
  this.route('fichiers');
});

export default Router;
