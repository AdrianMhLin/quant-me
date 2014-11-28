var Quantme = Quantme || { Models: {}, Collections: {}, Views: {} };

Quantme.Views.CategoryListView = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.collection, 'add', this.render);
		this.listenTo(this.collection, 'change', this.render);
	}
});