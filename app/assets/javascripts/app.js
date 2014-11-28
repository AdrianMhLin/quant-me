var Quantme = Quantme || { Models: {}, Collections: {}, Views: {} };

Quantme.initialize = function(){
	console.log('Quantme initialised!');

	// -* COLLECTION *-
	fullCategoryCollection = new Quantme.Collections.CategoryCollection({});

	fullCategoryListView = new Quantme.Views.CategoryListView({
		collection: fullCategoryCollection
	});

}



//Let's start this app!
$(function(){
	Quantme.initialize();

});

