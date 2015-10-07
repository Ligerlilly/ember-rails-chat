import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('message', {});
  this.route('room', {});
  this.route('author', {});
  this.route('sports', {});
});

export default Router;
