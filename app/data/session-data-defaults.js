/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

school: {
	"contact": [
	  "email",
	  "phone"
	],
	"contact-by-email": "GeraldStrickland@hillvalley.edu",
	"contact-by-phone": "0123456789",
	"procurement-detail": "I need a new catering provider. The current contract ends at the end of the school year. ",
	"answers-checked": "true",
	"school-name": "Hill Valley High School",
	"address-line-1": "Twin Pines street",
	"address-line-2": "Hill Valley",
	"address-town": "Hill valley",
	"address-county": "California",
	"address-postcode": "",
	"your-name": "Gerald Strickland"
	},
	tags:{
		newProcurement: false,
		existingContract: false,
		onlineSupport: false,
		frameworks: false
	}


}
