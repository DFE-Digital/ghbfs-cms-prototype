const express = require('express')
const router = new express.Router()

const schools = require(`./data/schools.js`);

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

router.post("/:folder/category-post", function(req, res, next){
	
	if(!req.body['procurement-category']){
		res.redirect(`/manage-case/${folderVersion}/${req.params.folder}/category`)
	} else {
		req.session.data.tags.category = true;
		res.redirect(`/manage-case/${folderVersion}/${req.params.folder}#request-details`);
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
		res.redirect(`/manage-case/${folderVersion}/call-back/task-list`);
	
});

router.all("/case-list", function(req, res, next){
	

	res.locals.cases = schools;
	next()

})

router.get("/case/:id/:pageName", function(req, res, next){

	res.locals.case = schools.find(school => school.id == req.params.id);
	

	res.render(`manage-case/${folderVersion}/case/${req.params.pageName}`)

})

router.get("/case/:id/:folderName/:pageName", function(req, res, next){

	res.locals.case = schools.find(school => school.id == req.params.id);
	

	res.render(`manage-case/${folderVersion}/case/${req.params.folderName}/${req.params.pageName}`)

})

router.post("/case/:id/category-post", function(req, res, next){
	
	if(!req.body['procurement-category']){
		res.redirect(`/manage-case/${folderVersion}/case/${req.params.id}/category`)
	} else {
		req.session.data.tags.category = true;
		res.redirect(`/manage-case/${folderVersion}/case/${req.params.id}/new-case`);
	}

});

router.post("/case/:id/consultation-post", function(req, res, next){

		let school = schools.find(school => school.id == req.params.id);
		
		school.status = "Consultation booked"

		school.consultation = req.body;
	
		res.redirect(`/manage-case/${folderVersion}/case-list`);
	

});

router.post("/case/:id/guidance-post", function(req, res, next){

		let school = schools.find(school => school.id == req.params.id);
		
		school.status = "closed"

		school["guidance-details"] = req.body["guidance-details"];
	
		res.redirect(`/manage-case/${folderVersion}/case-list`);
	
});



// Add your routes above the module.exports line
module.exports = router
