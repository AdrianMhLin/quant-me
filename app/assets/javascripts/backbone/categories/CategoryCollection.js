var Quantme = Quantme || { Models: {}, Collections: {}, Views: {} };

Quantme.Collections.CategoryCollection = Backbone.Collection.extend({
	model: Quantme.Models.AppModel,
	url: '/categories'
});