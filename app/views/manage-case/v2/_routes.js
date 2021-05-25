const express = require('express')
const router = new express.Router()

// Set variables
router.get('*', function(req, res, next){
  // Change the service name for this feature
  res.locals['serviceName'] = 'Get help buying for schools'

  // Change the service name URL so it links back this features index
  res.locals['serviceUrl'] = '/'+req.originalUrl.split('/')[1]+'/'

  next()
})


router.post("/new-case/existing-contract-post", function(req, res, next){
	console.log(req.url)
	console.log(req.body['existing-contract'])
	if(!req.body['existing-contract']){
		res.redirect('/manage-case/v2/new-case/existing-contract')
	} else if(req.body['existing-contract'] === "yes"){
		
		res.redirect('/manage-case/v2/new-case/contract-details');
	} else {
		req.session.data.tags.existingContract = true;
		res.redirect('/manage-case/v2/new-case/procurement-detail');
	}

});

router.post("/new-case/category-post", function(req, res, next){
	console.log(req.url)
	console.log(req.body['existing-contract'])
	if(!req.body['category']){
		res.redirect('/manage-case/v2/new-case/category')
	} else {
		req.session.data.tags.category = true;
		res.redirect('/manage-case/v2/new-case/existing-contract');
	}

});


// Add your routes above the module.exports line
module.exports = router
