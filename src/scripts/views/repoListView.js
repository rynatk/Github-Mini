import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import RepoView from './repoView'

const RepoListView = Backbone.View.extend({
  template: $('#repoListTemplate').text(),
  render: function () {
    let self = this;
    this.$el.html(this.template);
    _.each(this.collection.models, function(repo) {
      let view = new RepoView({model: repo});
      $('ul.repoList', self.$el).append(view.render());
    });
    $('main').html(this.$el);
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.collection.fetch();
  }
});

export default RepoListView;
