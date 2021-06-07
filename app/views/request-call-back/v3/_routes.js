const express = require('express')
const router = new express.Router()
const axios = require("axios");

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



router.get("/find-school/:query", function(req, res, next){

	let url = `https://scythe-ambiguous-arithmetic.glitch.me/data.json?sql=select+rowid%2C+URN%2C+EstablishmentNumber%2C+EstablishmentName+from+edubasealldata20210521+where+%22EstablishmentName%22+like+%3Ap0+order+by+rowid+limit+10&p0=%25${req.params.query}%25`

	axios.get(url)
	  .then(function (response) {
	    // handle success
	    console.log(response.data.rows);
	    res.json(response.data.rows);
	  })
	  .catch(function (error) {
	    // handle error
	    console.log(error);
	    res.send(error)
	  })
});


router.post("/search-school-post", function(req, res, next){

	let url = `https://scythe-ambiguous-arithmetic.glitch.me/data.json?sql=select%0D%0A++rowid%2C%0D%0A++URN%2C%0D%0A++EstablishmentNumber%2C%0D%0A++EstablishmentName%2C%0D%0A++Street%2C%0D%0A++Locality%2C%0D%0A++Postcode%0D%0Afrom%0D%0A++edubasealldata20210521%0D%0Awhere%0D%0A++%22EstablishmentName%22+like+%3Ap0%0D%0A++OR+%22URN%22+is+%3Ap0%0D%0Aorder+by%0D%0A++rowid%0D%0Alimit%0D%0A++10` +
						`&_shape=array&p0=%25${req.body['search-school']}%25`

	console.log(url)
	axios.get(url)
	  .then(function (response) {
	    // handle success
	    console.log(response);
	    req.session.data.searchResults = response.data;
	    res.redirect("search-school-results")
	  })
	  .catch(function (error) {
	    // handle error
	    //console.log(error);
	    res.send(error)
	  })

});


// Add your routes above the module.exports line
module.exports = router
