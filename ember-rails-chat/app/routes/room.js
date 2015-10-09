import Ember from 'ember';
export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('room', params.room_id);
  },

  actions: {
    saveMessage(params) {

    var room = params.message.room;
    params.message.room = params.message.room.get('id');
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/messages",
      data: params
    })
      .then(function( ) {
        $.ajax({
          method: 'GET',
          url: "http://localhost:3000/rooms/" + params.message.room + "/messages",
          success: function(response) {

            var i = 0;
            var msgs = room.get('messages');
            msgs.forEach(function(msg) {
              msg.set('body', response.data[i].attributes.body);
              msg.set('date', response.data[i].attributes.date);
              msg.set('id', response.data[i].id);
              //response.data[i].relationships.author.data.id
              if (i==4) {
                msg.set('author.name', params.message.author );
              }
              i += 1;

            });
          },
          error: function(res){
            console.log(res);
          }
        });
      });
    }
  }
});
