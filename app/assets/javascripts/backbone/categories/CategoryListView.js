var Quantme = Quantme || { Models: {}, Collections: {}, Views: {} };

Quantme.Views.CategoryListView = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.collection, 'add', this.render);
		this.listenTo(this.collection, 'change', this.render);
	},
	tagName: 'ul',

	render: function(){
		var self = this;
		this.$el.empty();

		_.each(this.collection.models, function(app){
			var categoryView = new Quantme.Views.CategoryView({model: categoryModel})
			self.$el.append( categoryView.render().el );
		});
	}


});