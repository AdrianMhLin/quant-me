var Quantme = Quantme || { Models: {}, Collections: {}, Views: {} };

fullCategoryCollection = ""
fullCategoryListView = ""

Quantme.initialize = function(){
	console.log('Quantme initialised!');

	//-* MODEL *-
	var category = new Quantme.Models.CategoryModel({});

	// -* COLLECTION *-
	fullCategoryCollection = new Quantme.Collections.CategoryCollection({
		model: category
	});

	// -* LIST VIEW *-
	fullCategoryListView = new Quantme.Views.CategoryListView({
		collection: fullCategoryCollection
	});

}



//Let's start this app!
$(function(){
	Quantme.initialize();

});

