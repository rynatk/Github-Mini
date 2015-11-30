import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const RepoView = Backbone.View.extend({
  template: _.template($('#repoTemplate').text()),
  tagName: 'li',
  render: function () {
    this.$el.html(this.template(this.model.attributes))

    return this.$el;
  }
});

export default RepoView;
