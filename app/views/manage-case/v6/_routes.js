const express = require('express')
const router = new express.Router()

const moment = require("moment")


const schools = require(`./data/schools.js`);
const supportInformation = require(`./data/support-information.js`);

let folderVersion = "v6"


//notify stuff
const notifyApiKey = process.env.NOTIFY_API_KEY;
var NotifyClient = require('notifications-node-client').NotifyClient

var notifyClient = new NotifyClient(notifyApiKey)




router.get("/get-school-data.json", function(req, res, next){
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(schools, null, 3));
})


router.all('*', function(req, res, next){
	res.locals.folderVersion = folderVersion;
	next()
})

// Set variables
router.get('*', function(req, res, next){
  // Change the service name for this feature
  res.locals['serviceName'] = 'Get help buying for schools'

  // Change the service name URL so it links back this features index
  res.locals['serviceUrl'] = '/'+req.originalUrl.split('/')[1]+'/'

  next()
})

router.all('/case/:id/*', function(req, res, next){
	res.locals.case = schools.find(school => school.id == req.params.id);
	res.locals.supportInformation = supportInformation.find(item => item.id == req.params.id);
	console.log(res.locals.supportInformation);
	next()
})


router.get("/case/:id/template-preview/:templateId", function(req, res, next){
	let school = schools.find(school => school.id == req.params.id);

	personalisation = { 
		"toName": `${school.first_name} ${school.last_name}`,
		"fromName": "Jenni Weiner" 
	}

	notifyClient
	  .previewTemplateById(req.params.templateId, personalisation)
	  .then(function(response){
	  		res.locals.emailPreview = response.body
	  		res.render(`manage-case/${folderVersion}/case/template-preview`)
	  	})
	  .catch((err) => console.error(err))
})

router.post("/case/:id/non-template-preview", function(req, res, next){

	let templateId = "ac679471-8bb9-4364-a534-e87f585c46f3";
	let school = schools.find(school => school.id == req.params.id);

	personalisation = { 
		"toName": `${school.first_name} ${school.last_name}`,
		"fromName": "Jenni Weiner",
		"text": req.body["non-template-email-body"]
	}

	notifyClient
	  .previewTemplateById(templateId, personalisation)
	  .then(function(response){
	  		res.locals.emailPreview = response.body
	  		req.session.data["non-template-email-html"] = response.body.html
	  		res.render(`manage-case/${folderVersion}/case/non-template-preview`)
	  	})
	  .catch((err) => console.error(err))
})

router.post("/case/:id/non-template-preview-post", function(req, res, next){

	let templateId = "ac679471-8bb9-4364-a534-e87f585c46f3";
	let school = schools.find(school => school.id == req.params.id);

	personalisation = { 
		"toName": `${school.first_name} ${school.last_name}`,
		"fromName": "Jenni Weiner",
		"text": req.session.data["non-template-email-body"]
	}

	notifyClient
	  .sendEmail(templateId, 'james.crisp@digital.education.gov.uk', {
	  	personalisation: personalisation,
	  	reference: ''
	  })
	  .then(function(response){
	  		res.locals.emailPreview = response.body;

	  		let data = {
					title: "Email to school",
					caseNote: req.session.data["non-template-email-html"]
				};
				addToHistory(req.params.id, data);

	  		res.redirect(`/manage-case/${folderVersion}/case/${req.params.id}/in-progress-specify#case-history`)
	  	})
	  .catch((err) => console.error(err))
})





router.post("/case/:id/call-back/existing-contract-post", function(req, res, next){
	
	if(!req.body['existing-contract']){
		res.redirect(`/manage-case/${folderVersion}/case/${req.params.id}/call-back/existing-contract`)
	} else if(req.body['existing-contract'] === "yes"){
		res.redirect(`/manage-case/${folderVersion}/case/${req.params.id}/call-back/contract-details`);
	} else {
		req.session.data.tags_existingContract = "true";
		res.redirect(`/manage-case/${folderVersion}/case/${req.params.id}/call-back/task-list`);
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


router.post("/case/:id/call-back/contract-details-2-post", function(req, res, next){
	

		req.session.data.tags_existingContract = "true";
		res.redirect(`/manage-case/${folderVersion}/case/${req.params.id}/call-back/task-list`);
	

});




router.all("/case-list*", function(req, res, next){
	

	res.locals.cases = schools;
	next()

})

router.get("/case/:id/:pageName", function(req, res, next){

	res.render(`manage-case/${folderVersion}/case/${req.params.pageName}`)

})

router.get("/case/:id/:folderName/:pageName", function(req, res, next){

	res.render(`manage-case/${folderVersion}/case/${req.params.folderName}/${req.params.pageName}`)

})

router.post("/case/:id/category-post", function(req, res, next){
	let school = schools.find(school => school.id == req.params.id);

	if(!req.body['procurement-category']){
		res.redirect(`/manage-case/${folderVersion}/case/${req.params.id}/category`)
	} else {
		req.session.data.tags.category = true;
		school.category = req.body['procurement-category'];
		req.body['procurement-category'] = "";
		res.redirect(`/manage-case/${folderVersion}/case/${req.params.id}/specify#request-details`);
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
		
		school.status = "resolved"

		school["guidance-details"] = req.body["guidance-details"];
	
		res.redirect(`/manage-case/${folderVersion}/case-list`);
	
});

router.post("/case/:id/call-back/type-of-email-post", function(req, res, next){

		let school = schools.find(school => school.id == req.params.id);
		
		school.status = "resolved"

		school["guidance-details"] = req.body["guidance-details"];
	
		res.redirect(`/manage-case/${folderVersion}/case-list`);
	
});
router.post("/case/:id/call-back/type-of-procurement-post", function(req, res, next){
	
		let school = schools.find(school => school.id == req.params.id);
		
		if(!req.body['type-of-procurement']){
			res.redirect(`/manage-case/${folderVersion}/case/${req.params.id}/call-back/type-of-procurement`);
		} else {
			school.status = req.body['type-of-procurement']
		}

	
		res.redirect(`/manage-case/${folderVersion}/case-list`);
	
});

let addToHistory = function(caseId, data){
	let school = schools.find(school => school.id == caseId);

	let now = moment();
	data.date = now.format("D MMMM YYYY");
	data.time = now.format("h:mma");
	if(!school.history){
		school.history = [];
	}
	data.index = school.history.length;
	school.history.push(data);
	school.lastUpdated = now.format("YYYY-MM-DD")
	data.addedBy = "	Jenni Weiner"
}


router.post("/case/:id/reply-post", function(req, res, next){

	let school = schools.find(school => school.id == req.params.id);
	console.log(school)

	school.status = "Open";
	let data = {
		title: "Reply to school",
		caseNote: req.body['reply-details']
	};
	addToHistory(req.params.id, data);

	req.session.data['reply-details'] = "";

	res.redirect(`/manage-case/${folderVersion}/case/${req.params.id}/in-progress-specify`)

})



router.post("/case/:id/case-note-post", function(req, res, next){

	let data = {
		title: "Case note",
		caseNote: req.body['case-note-details']
	};
	addToHistory(req.params.id, data);

	req.session.data['case-note-details'] = "";

	res.redirect(`/manage-case/${folderVersion}/case/${req.params.id}/specify`)

})

router.post("/case/:id/contact-post", function(req, res, next){

	let data = {
		title: req.body['type-of-contact'],
		caseNote: req.body['contact-details']
	};
	addToHistory(req.params.id, data);

	req.session.data['type-of-contact'] = "";
	req.session.data['contact-details'] = "";

	res.redirect(`/manage-case/${folderVersion}/case/${req.params.id}/specify`)

})

router.post("/case/:id/assign-post", function(req, res, next){

	let school = schools.find(school => school.id == req.params.id);

	school.assignedTo = req.session.data['assign-to-caseworker']
	school.status = "Open";
	console.log(school)
	req.session.data['assign-to-caseworker'] = "";
	

	res.redirect(`/manage-case/${folderVersion}/case/${req.params.id}/specify#case-history`)

})


router.post("/case/:id/close-case-post", function(req, res, next){
	let school = schools.find(school => school.id == req.params.id);
	console.log(school)

	school.status = "resolved";

	let data = {
		title: "Case resolved",
		caseNote: req.body['close-case-details']
	};
	addToHistory(req.params.id, data);


	req.session.data['close-case-details'] = "";

	res.redirect(`/manage-case/${folderVersion}/case-list`)

})

router.post("/case/:id/type-of-email-post", function(req, res, next){
	if(req.body['type-of-email'] == "Template"){
		res.redirect(`/manage-case/${folderVersion}/case/${req.params.id}/template-email`)
	} else if(req.body['type-of-email'] == "Non-template"){
		res.redirect(`/manage-case/${folderVersion}/case/${req.params.id}/non-template-email`);
	} else {
		res.redirect(`/manage-case/${folderVersion}/case/${req.params.id}/type-of-email`);
	}

})




	


// Add your routes above the module.exports line
module.exports = router
