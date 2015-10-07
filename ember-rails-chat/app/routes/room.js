import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    // this.store.findRecord('room', params.room_id).then(function(t) {
    //   var x = t.get('messages').then(function(msgs) {
    //     var z = msg;
    //     debugger;
    //   });
    //   debugger;
    // });
    return this.store.findRecord('room', params.room_id);
  }
});
