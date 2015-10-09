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


      function callback() {


        //window.location.reload();
        //console.log('a;lsdkf;alskdjf;alksdfj');
        //_this.transitionTo('index');
      }
      // // room.get('messages').addObject(newMessage);
      // newMessage.save().then(function() {
      //   // return room.save();
      // });
      // this.transitionTo('room', params.room);
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
              msg.set('author.name', params.message.author );

              //debugger;
              i += 1;

            });
          },
          error: function(res){
            console.log(res);
          }
        });
        //callback();
        // _this.transitionTo('room', params.message.room);
      });
    }
  }
});
