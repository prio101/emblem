import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('profile');
  this.route('notification');
  this.route('search');
  this.route('about');
});

export default Router;
