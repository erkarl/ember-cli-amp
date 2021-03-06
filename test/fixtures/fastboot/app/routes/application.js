import Route from 'ember-route';
import injectService from 'ember-service/inject';

export default Route.extend({
  amp: injectService('amp'),
  afterModel() {
    let amp = this.get('amp');
    amp.set('title', 'page title');
    amp.set('canonicalUrl', '/canonical-url');
  }
});
