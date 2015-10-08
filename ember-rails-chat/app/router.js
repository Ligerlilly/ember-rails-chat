import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.route('room', { path: '/room/:room_id'}, function() {
  //   this.route('messages', {path: 'messages'});
  // });
  this.route('room', { path: '/rooms/:room_id/messages' })
  this.route('author', {});
});

export default Router;
