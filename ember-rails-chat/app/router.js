import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('messages', {});
  this.route('message', {});
  this.route('room', {});
  this.route('author', {});
});

export default Router;
