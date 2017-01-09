import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('skills');
  this.route('contact');
  this.route('experiences', function() {
    this.route('show', { path: '/experience_id'});
    this.route('mcd-partners');
  });
});

export default Router;
