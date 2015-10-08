import Ember from 'ember';
export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('room', params.room_id);
  },

  actions: {
    saveMessage(params) {
      // var newMessage = this.store.createRecord('message', params);
      // newMessage.save();
      // // var room = params.room;

      var _this = this;
      function callback() {
        window.location.reload();
        //console.log('a;lsdkf;alskdjf;alksdfj');
        //_this.transitionTo('index');
      }
      // // room.get('messages').addObject(newMessage);
      // newMessage.save().then(function() {
      //   // return room.save();
      // });
      // this.transitionTo('room', params.room);

    $.ajax({
      method: "POST",
      url: "http://localhost:3000/messages",
      data: params
    })
      .done(function( msg ) {
        callback();
        // _this.transitionTo('room', params.message.room);
      })
      .always(function(msg) {
        callback();
      })
    }
  }
});
