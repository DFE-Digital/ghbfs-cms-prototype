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

	if(req.body['type-of-help'] === "supplier"){
		res.redirect("type-of-goods")
	}  else if(req.body['type-of-help'] === "compliance"){
		res.redirect("compliance-help")
	} else if(req.body['type-of-help'] === "other"){
		res.redirect("how-can-we-help")
	} else {
		res.redirect("type-of-help");
	} 

});


router.post("/type-of-establishment-post", function(req, res, enxt){

	if(req.body['type-of-establishment'] === "school"){
		res.redirect("search-school")
	}  else if(req.body['type-of-establishment'] === "mat"){
		res.redirect("search-mat")
	} else {
		res.redirect("type-of-establishment");
	} 

});



router.get("/find-school/:query", function(req, res, next){

	let url = `https://scythe-ambiguous-arithmetic.glitch.me/data.json?sql=select%0D%0A++rowid%2C%0D%0A++URN%2C%0D%0A++EstablishmentNumber%2C%0D%0A++EstablishmentName%2C%0D%0A++Street%2C%0D%0A++Locality%2C%0D%0A++Postcode%0D%0Afrom%0D%0A++edubasealldata20210521%0D%0Awhere%0D%0A++%22EstablishmentName%22+like+%3Ap0%0D%0A++OR+%22URN%22+is+%3Ap0%0D%0Aorder+by%0D%0A++rowid%0D%0Alimit%0D%0A++10` +
						`&_shape=array&p0=%25${req.params.query}%25`


console.log(url)
	axios.get(url)
	  .then(function (response) {
	    // handle success
	    //console.log(response.data);
	    let searchResults = []
	    response.data.forEach( school => searchResults.push(school.EstablishmentName) );
	    console.log(searchResults)
	    res.send(searchResults);
	  })
	  .catch(function (error) {
	    // handle error
	    //console.log(error);
	    res.send(error)
	  })


});




router.post("/search-school-post", function(req, res, next){

	let url = `https://scythe-ambiguous-arithmetic.glitch.me/data.json?sql=select+*%0D%0Afrom%0D%0A++edubasealldata20210521%0D%0Awhere%0D%0A++%22URN%22+%3D+%3Ap0%0D%0Aorder+by%0D%0A++rowid%0D%0Alimit%0D%0A++10&` +
						`&_shape=array&p0=${req.body['school-urn']}`;


	console.log(url)
	axios.get(url)
	  .then(function (response) {
	    // handle success
	    console.log(response);
	    req.session.data.giasSchoolData = response.data[0];
	    res.redirect("confirm-school")
	  })
	  .catch(function (error) {
	    // handle error
	    //console.log(error);
	    res.send(error)
	  })

});

router.post("/search-mat-post", function(req, res, next){

	let url = `https://scythe-ambiguous-arithmetic.glitch.me/data.json?sql=select%0D%0A++*%0D%0Afrom%0D%0A++GroupExtract%0D%0Awhere%0D%0A++%22UID%22+%3D+%3Ap0%0D%0Aorder+by%0D%0A++rowid%0D%0Alimit%0D%0A++10` + 
						`&_shape=array&p0=${req.body['mat-uid']}`;

	console.log(url)
	axios.get(url)
	  .then(function (response) {
	    // handle success
	    console.log(response);
	    req.session.data.giasMatData = response.data[0];
	    res.redirect("confirm-mat")
	  })
	  .catch(function (error) {
	    // handle error
	    //console.log(error);
	    res.send(error)
	  })

});



// Add your routes above the module.exports line
module.exports = router
