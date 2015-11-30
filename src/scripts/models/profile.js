import Backbone from 'backbone';

const API_ROOT = 'https://api.github.com/users/'

const Profile = Backbone.Model.extend({
  url: function () {
    return API_ROOT + this.get('login');
  },

  defaults: {
    avatar_url: 'http://placehold.it/115',
    created_at: new Date(),
    location: 'The Iron Yard'
  }

});

export default Profile
