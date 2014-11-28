var Quantme = Quantme || { Models: {}, Collections: {}, Views: {} };

Quantme.Views.CategoryView = Backbone.View.extend({
	initialize: function(){
		this.listenTo( this.model, "change", this.render )
	},
	tagName: 'li',

	render: function(){
		console.log("boom, new Category Model created");

		var entrails = "";

		entrails += "<img src='http://icons.iconarchive.com/icons/uiconstock/socialmedia/512/Apple-icon.png' />"
		entrails += "<h6>" + "testing" + "</h6>"

		this.$el.html(entrails);

		return this;
	}
});