var Quantme = Quantme || { Models: {}, Collections: {}, Views: {} };

Quantme.Collections.CategoryCollection = Backbone.Collection.extend({
	initialize: function(){
		console.log("new CategoryCollection initialised!");
	},
	model: Quantme.Models.CategoryModel,
	url: '/users/' + parseInt( $('#current-user-id').val() ) + '/categories'
});