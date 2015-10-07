export function initialize(application) {
  application.store = application.container.lookup("service:store");
  window.App = application;
}

export default {
  name: 'global',
  initialize: initialize
};
