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


router.post("/new-case/existing-contract-post", function(req, res, next){
	
	if(!req.body['existing-contract']){
		res.redirect(`/manage-case/${folderVersion}/new-case/existing-contrac`)
	} else if(req.body['existing-contract'] === "yes"){
		
		res.redirect(`/manage-case/${folderVersion}/new-case/contract-details`);
	} else {
		req.session.data.tags.existingContract = true;
		res.redirect(`/manage-case/${folderVersion}/new-case/procurement-detail`);
	}

});

router.post("/new-case/category-post", function(req, res, next){
	
	if(!req.body['category']){
		res.redirect(`/manage-case/${folderVersion}/new-case/categor`)
	} else {
		req.session.data.tags.category = true;
		res.redirect(`/manage-case/${folderVersion}/new-case/existing-contract`);
	}

});


router.post("/new-case/contract-details-2-post", function(req, res, next){
	

		req.session.data.tags.existingContract = true;
		res.redirect(`/manage-case/${folderVersion}/new-case/procurement-detail`);
	

});

router.post("/new-case/procurement-terms", function(req, res, next){

		req.session.data.tags.procurementRequirements = true;
		next()
	
});

router.post("/new-case/procurement-terms-post", function(req, res, next){

		req.session.data.tags.procurementTerms = true;
		res.redirect(`/manage-case/${folderVersion}/new-case/task-list`);
	
});

// Add your routes above the module.exports line
module.exports = router
