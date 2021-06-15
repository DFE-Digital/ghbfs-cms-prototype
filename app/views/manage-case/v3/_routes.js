const express = require('express')
const router = new express.Router()

let folderVersion = "v3"

// Set variables
router.get('*', function(req, res, next){
  // Change the service name for this feature
  res.locals['serviceName'] = 'Get help buying for schools'

  // Change the service name URL so it links back this features index
  res.locals['serviceUrl'] = '/'+req.originalUrl.split('/')[1]+'/'

  next()
})


router.post("/call-back/existing-contract-post", function(req, res, next){
	
	if(!req.body['existing-contract']){
		res.redirect(`/manage-case/${folderVersion}/call-back/existing-contrac`)
	} else if(req.body['existing-contract'] === "yes"){
		
		res.redirect(`/manage-case/${folderVersion}/call-back/contract-details`);
	} else {
		req.session.data.tags.existingContract = true;
		res.redirect(`/manage-case/${folderVersion}/call-back/procurement-detail`);
	}

});

router.post("/call-back/category-post", function(req, res, next){
	
	if(!req.body['procurement-category']){
		res.redirect(`/manage-case/${folderVersion}/call-back/category`)
	} else {
		req.session.data.tags.category = true;
		res.redirect(`/manage-case/${folderVersion}/call-back#request-details`);
	}

});


router.post("/call-back/contract-details-2-post", function(req, res, next){
	

		req.session.data.tags.existingContract = true;
		res.redirect(`/manage-case/${folderVersion}/call-back/procurement-detail`);
	

});

router.post("/call-back/procurement-terms", function(req, res, next){

		req.session.data.tags.procurementRequirements = true;
		next()
	
});

router.post("/call-back/procurement-terms-post", function(req, res, next){

		req.session.data.tags.procurementTerms = true;
		res.redirect(`/manage-case/${folderVersion}/new-case/task-list`);
	
});

// Add your routes above the module.exports line
module.exports = router
