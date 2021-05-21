const express = require('express')
const router = new express.Router()

// Set variables
router.get('*', function(req, res, next){
  // Change the service name for this feature
  res.locals['serviceName'] = 'Get help buying for schools'
  res.locals.internal = false
  // Change the service name URL so it links back this features index
  res.locals['serviceUrl'] = '/'+req.originalUrl.split('/')[1]+'/'

  next()
})


router.post("/type-of-help-post", function(req, res, enxt){

	if(req.body['type-of-help'] === "advice"){
		res.redirect("advice-detail")
	}  else if(req.body['type-of-help'] === "procurement"){
		res.redirect("need-to-buy")
	} else {
		res.redirect("type-of-help");
	} 

});


// Add your routes above the module.exports line
module.exports = router
