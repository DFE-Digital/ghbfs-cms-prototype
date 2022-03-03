const express = require('express')
const router = new express.Router()

const moment = require("moment")


const schools = require(`./data/schools.js`);
const supportInformation = require(`./data/support-information.js`);

let folderVersion = "v8"

let addToHistory = function(caseId, data){
	let school = schools.find(school => school.id == caseId);

	let now = moment();
	data.date = now.format("D MMM YYYY");
	data.time = now.format("h:mma");
	if(!school.history){
		school.history = [];
	}
	data.index = school.history.length;
	school.history.push(data);
	school.lastUpdated = now.format("YYYY-MM-DD H:mma")
	data.addedBy = "	Jenni Weiner"
}


//notify stuff
const notifyApiKey = process.env.NOTIFY_API_KEY;
const testEmail = process.env.TEST_EMAIL;
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


router.post("/case/:id/template-preview-post", function(req, res, next){
	
	let school = schools.find(school => school.id == req.params.id);

	let data = {
					title: "Email to school",
					caseNote: req.session.data["template-email-html"] 
				};
	addToHistory(req.params.id, data);

	res.redirect(`/manage-case/${folderVersion}/case/${req.params.id}/specify#case-history`)

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
	  		res.locals.emailPreview = response.body;
	  		req.session.data["template-email-html"] = response.body.html;
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
 console.log(personalisation)
	let data = {
						title: "Email to school",
						caseNote: req.session.data["non-template-email-html"]
					};
	addToHistory(req.params.id, data);
	console.log(testEmail)

	if(testEmail){
		notifyClient
		  .sendEmail(templateId, testEmail, {
		  	personalisation: personalisation,
		  	reference: ''
		  })
		  .then(function(response){
		  		res.redirect(`/manage-case/${folderVersion}/case/${req.params.id}/specify#case-history`)
		  	})
		  .catch((err) => console.error(err))
		} else {
			res.redirect(`/manage-case/${folderVersion}/case/${req.params.id}/specify#case-history`)
		}
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

router.all("/find-a-case*", function(req, res, next){
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

	school.assignedTo = req.session.data['caseworker-name']
	school.status = "Open";
	console.log(school)
	req.session.data['caseworker-name'] = "";
	

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

router.post("/case/:id/add-new-contract-details-post", function(req, res, next){
	let school = schools.find(school => school.id == req.params.id);

	let data = {
		supplier: req.session.data['new-contract-supplier'],
		startDate: moment(req.session.data['new-contract-start-date-year'] + '-' + req.session.data['new-contract-start-date-month'] + '-' + req.session.data['new-contract-start-date-day'], "YYYY-MM-DD"),
		spend: req.session.data['new-contract-spend'],
		duration: req.session.data['new-contract-duration']
	};

	//school.newContractTask = "Completed";

	let historyData = {
		title: "New contract details updated",
		caseNote: "more info"
	}

	school.newContract = data
	addToHistory(req.params.id, historyData);

	res.redirect(`/manage-case/${folderVersion}/case/${school.id}/specify#procurement-details`)
})

router.post("/case/:id/add-existing-contract-details-post", function(req, res, next){
	let school = schools.find(school => school.id == req.params.id);

	let data = {
		supplier: req.session.data['existing-contract-supplier'],
		endDate: moment(req.session.data['existing-contract-end-date-year'] + '-' + req.session.data['existing-contract-end-date-month'] + '-' + req.session.data['existing-contract-end-date-day'], "YYYY-MM-DD"),
		spend: req.session.data['existing-contract-spend'],
		duration: req.session.data['existing-contract-duration']
	};

	//school.existingContractTask = "Completed"

	let historyData = {
		title: "Existing contract details updated",
		caseNote: "more info"
	}

	school.existingContract = data
	addToHistory(req.params.id, historyData);

	res.redirect(`/manage-case/${folderVersion}/case/${school.id}/specify#procurement-details`)
})

router.post("/case/:id/add-procurement-details-post", function(req, res, next){
	let school = schools.find(school => school.id == req.params.id);

	//console.log(req.session.data['agreement-type'])

	let data = {
		agreementType: req.session.data['agreement-type'],
		route: req.session.data['route'],
		reason: req.session.data['reason'],
		framework: req.session.data['framework'],
		startDate: moment(req.session.data['procurement-start-date-year'] + '-' + req.session.data['procurement-start-date-month'] + '-' + req.session.data['procurement-start-date-day'], "YYYY-MM-DD"),
		endDate: moment(req.session.data['procurement-end-date-year'] + '-' + req.session.data['procurement-end-date-month'] + '-' + req.session.data['procurement-end-date-day'], "YYYY-MM-DD"),
		stage: req.session.data['stage']
	};

	let historyData = {
		title: "Procurement details updated",
		caseNote: "more info"
	}

	school.procurementDetails = data
	addToHistory(req.params.id, historyData);

	//console.log(school.procurementDetails.agreementType)
	res.redirect(`/manage-case/${folderVersion}/case/${school.id}/specify#procurement-details`)
})

router.post("/case/:id/add-saving-details-post", function(req, res, next){
	let school = schools.find(school => school.id == req.params.id);

	//console.log(req.session.data['agreement-type'])

	let data = {
		status:  req.session.data['status'],
		estimateMethod:  req.session.data['estimate-method'],
		actualMethod:  req.session.data['actual-method'],
		estimate:  req.session.data['estimate'],
		actual:  req.session.data['actual']
	};

	let historyData = {
		title: "Saving details updated",
		caseNote: "more info"
	}

	school.savingDetails = data
	addToHistory(req.params.id, historyData);

	//console.log(school.procurementDetails.agreementType)
	res.redirect(`/manage-case/${folderVersion}/case/${school.id}/specify#procurement-details`)
})

router.post("/case/0/create-new-case-post", function(req, res, next) {
	let id = Math.floor(Math.random() * (100 - 21 + 1)) + 21;
	let caseType = "";
	if (req.session.data['hub-identification-number']) {
		caseType = "NW Hub"
	} else {
		caseType = "Other"
	}
	let data = {
		id: id,
		uid: '0000' + id,
		first_name: req.session.data['contact-name'].split(' ')[0],
		last_name: req.session.data['contact-name'].split(' ')[1],
		email: req.session.data['contact-email'],
		status: "new",
		school: {"urn":req.session.data['establishment-urn'],"name":req.session.data['establishment-name'],"street":"Tustin Estate","town":"London","county":"Manor Grove","postcode":req.session.data['establishment-postcode']},
		receivedDate: moment(),
		lastUpdated: moment(),
		assignedTo: "",
		typeOfCase: caseType,
		hubIdentificationNumber: req.session.data['hub-identification-number'],
		hubProcurementCompletionDate: moment(req.session.data['procurement-estimated-completion-date-year'] + ' ' + req.session.data['procurement-estimated-completion-date-month'] + ' ' + req.session.data['procurement-estimated-completion-date-day']),
		hubsSavingsTotalEstimate: req.session.data['savings-total-estimate-hubs'],
		notes: req.session.data['case-notes'],
		category: req.session.data['category'],
		phone: req.session.data['contact-phone']
	};

	//supportInformation.typeOfCase = caseType;

	let historyData = {
		title: "Progress notes from CRM",
		caseNote: req.session.data["progress-notes"] 
	};

	schools.push(data)
	res.locals.cases = schools
	addToHistory(data.id, historyData);
	res.redirect(`/manage-case/${folderVersion}/case/${data.id}/specify`);
})

// Add your routes above the module.exports line
module.exports = router
