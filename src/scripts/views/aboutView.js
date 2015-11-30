import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const AboutView = Backbone.View.extend({
  template: _.template($('#aboutTemplate').text()),
  render: function () {
    $('main').html(this.template(this.model.attributes))
  },

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
    this.model.fetch();
  }
});

export default AboutView;
