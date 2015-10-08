import Ember from 'ember';

export default Ember.Component.extend({
sortByDate: ['date:desc'],
sortedByDateMessages: Ember.computed.sort('room.messages', 'sortByDate')
});
