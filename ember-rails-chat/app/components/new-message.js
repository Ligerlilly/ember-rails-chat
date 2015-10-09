import Ember from 'ember';

export default Ember.Component.extend({
  newMsg: false,
  actions: {
    showForm() {
      this.set('newMsg', true);
    },
    hideForm() {
      this.set('newMsg', false);
    },
    saveMessage() {
      var params = {
        message: {
          author: this.get('author'),
          body: this.get('message'),
          room: this.get('room'),
          date: new Date()
        }


      };

      this.set('newMsg', false);
      this.sendAction('saveMessage', params);
    }
  }
});
