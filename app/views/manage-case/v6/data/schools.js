let oldData = [{
  "id": 1,
  "first_name": "Tomlin",
  "last_name": "Trusse",
  "phone": "7354190016",
  "email": "ttrusse0@marketwatch.com",
  "status": "new",
  "receivedDate": "2021-07-2",
  "lastUpdated": "2021-07-2",
  "assignedTo": 1,
  "school": {
    "urn": 100637,
    "name": "La Retraite Roman Catholic Girls' School",
    "street": "Atkins Road",
    "town": "London",
    "county": null,
    "postcode": "SW12 0AB"
  }
}, {
  "id": 2,
  "first_name": "Prent",
  "last_name": "Angear",
  "phone": "8393402978",
  "email": "pangear1@domainmarket.com",
  "status": "new",
  "receivedDate": "2021-07-2",
  "lastUpdated": "2021-07-2",
  "assignedTo": 1,
  "school": {
    "urn": 100243,
    "name": "Thomas Fairchild Community School",
    "street": "Forston Street",
    "town": "London",
    "county": "Hoxton",
    "postcode": "N1 7HA"
  }
}, {
  "id": 3,
  "first_name": "Luella",
  "last_name": "Biasioni",
  "phone": "9596913014",
  "email": "lbiasioni2@nationalgeographic.com",
  "status": "new",
  "receivedDate": "2021-07-2",
  "lastUpdated": "2021-07-2",
  "assignedTo": 1,
  "school": {
    "urn": 100570,
    "name": "Hitherfield Junior School",
    "street": "Leigham Vale",
    "town": "London",
    "county": "Streatham",
    "postcode": "SW16 2JQ"
  }
}, {
  "id": 4,
  "first_name": "Papageno",
  "last_name": "Ambrus",
  "phone": "3983531647",
  "email": "pambrus3@netlog.com",
  "status": "new",
  "receivedDate": "2021-07-2",
  "lastUpdated": "2021-07-2",
  "assignedTo": 2,
  "school": {
    "urn": 100174,
    "name": "St Alfege with St Peter's Church of England Primary School",
    "street": "Creek Road",
    "town": "London",
    "county": "Greenwich",
    "postcode": "SE10 9RB"
  }
}, {
  "id": 5,
  "first_name": "Trescha",
  "last_name": "Vanyutin",
  "phone": "8914272157",
  "email": "tvanyutin4@yolasite.com",
  "status": "new",
  "receivedDate": "2021-07-2",
  "lastUpdated": "2021-07-2",
  "assignedTo": 1,
  "school": {
    "urn": 100373,
    "name": "Ravenscourt Park Preparatory School",
    "street": "16 Ravenscourt Avenue",
    "town": "London",
    "county": "Ravenscourt Park",
    "postcode": "W6 0SL"
  }
}, {
  "id": 6,
  "first_name": "Lorenzo",
  "last_name": "McGurk",
  "phone": "2255925977",
  "email": "lmcgurk5@ucoz.com",
  "status": "new",
  "receivedDate": "2021-07-2",
  "lastUpdated": "2021-07-2",
  "assignedTo": 1,
  "school": {
    "urn": 100226,
    "name": "Gayhurst Junior School",
    "street": "Gayhurst Road",
    "town": "London",
    "county": null,
    "postcode": "E8 3EN"
  }
}];

let specifyCaes = [{
  "id": 1,
  "first_name": "Leanne ",
  "last_name": "Jackson",
  "email": "enquiries@urhazelgrovehigh.co.uk",
  "status": "new",
  "school": {
    "urn": 137923,
    "name": "Hazel Grove High School",
    "street": "Hollydale Road",
    "postcode": "SK7 5JX"
  },
  "receivedDate": "2021-07-24",
  "lastUpdated": "2021-07-24",
  "assignedTo": 1,
  "phone": "161 549 7700",
  "specify": true
}, {
      "id": 2,
      "first_name": "Jenny ",
      "last_name": "Woodhouse",
      "email": "jenny.woodhouse@urbishopbarrington.net",
      "status": "Open",
      "school": {
         "urn": 100952,
         "name": "Bishop Barrington School",
         "postcode": "DL14 6LA"
      },
      "receivedDate": "2021-07-26",
      "lastUpdated": "2021-07-28",
      "assignedTo": 1,
      "phone": "1388 603307",
      "specify": true,
      "history": [
         {
            "title": "Reply to school",
            "caseNote": `Hi Jenny,
            Thanks for your question. You don't need to fill in the food policy section if your school doesn't currently have a food policy. The specification that you have produced already includes the requirement for service providers to meet the Department for Education standards for school food in England. You can read more about school food standards on GOV.UK:

            https://www.gov.uk/government/publications/standards-for-school-food-in-england

            If your school has requirements that go beyond the Department for Education standards, then including this information can help service providers tailor their responses and could help you find a supplier that best meets your needs.
            Kind regards
            Mark`,
            "date": "28 July 2021",
            "index": 0
         }
      ]
   }, {
  "id": 3,
  "first_name": "Robert ",
  "last_name": "Nowak",
  "email": "office@urmonkwickjunior.school",
  "status": "new",
  "school": {
    "urn": 100341,
    "name": "Monkwick Junior School",
    "postcode": "CO2 8NN"
  },
  "receivedDate": "2021-07-27",
  "lastUpdated": "2021-07-27",
  "assignedTo": 1,
  "phone": "1206 575399",
  "specify": true
}]

module.exports = [{"id":1,"first_name":"Amabel","last_name":"McMychem","email":"amcmychem0@issuu.com","status":"Open","school":{"urn":100818,"name":"Pilgrims' Way Primary School","street":"Tustin Estate","town":"London","county":"Manor Grove","postcode":"SE15 1EF"},"receivedDate":"2021-08-11","lastUpdated":"2021-08-11","assignedTo":"Jenni Weiner","category":"Catering","phone":"312 630 1857"},
{"id":2,"first_name":"Masha","last_name":"Fleis","email":"mfleis1@etsy.com","status":"new","school":{"urn":100428,"name":"Winton Primary School","street":"Killick Street","town":"London","county":"Pentonville Road","postcode":"N1 9AZ"},"receivedDate":"2021-08-14","lastUpdated":"2021-08-14","assignedTo":"Ki Gomme","category":"MFD","phone":"804 580 4517"},
{"id":3,"first_name":"Enos","last_name":"Stubley","email":"estubley2@phpbb.com","status":"new","school":{"urn":100927,"name":"Wellington Primary School","street":"Wellington Way","town":"London","county":"Bow","postcode":"E3 4NE"},"receivedDate":"2021-08-03","lastUpdated":"2021-08-03","assignedTo":"Ki Gomme","category":"Catering","phone":"243 494 2274"},
{"id":4,"first_name":"Louis","last_name":"Harome","email":"lharome3@geocities.jp","status":"resolved","school":{"urn":100927,"name":"Wellington Primary School","street":"Wellington Way","town":"London","county":"Bow","postcode":"E3 4NE"},"receivedDate":"2021-08-04","lastUpdated":"2021-08-04","assignedTo":"Inna Goodluck","category":"Catering","phone":"616 437 3638"},
{"id":5,"first_name":"Emmie","last_name":"Benedito","email":"ebenedito4@usa.gov","status":"new","school":{"urn":100325,"name":"Canberra Primary School","street":"Australia Road","town":"London","county":null,"postcode":"W12 7PT"},"receivedDate":"2021-08-02","lastUpdated":"2021-08-02","assignedTo":"Elena Mityukov","category":"MFD","phone":"314 302 4267"},
{"id":6,"first_name":"Trent","last_name":"Atherton","email":"tatherton5@blog.com","status":"new","school":{"urn":100924,"name":"Susan Lawrence Junior School","street":"Cordelia Street","town":"London","county":"Poplar","postcode":"E14 6DZ"},"receivedDate":"2021-08-07","lastUpdated":"2021-08-07","assignedTo":"Inna Goodluck","category":"MFD","phone":"947 644 2236"},
{"id":7,"first_name":"Daven","last_name":"Biasi","email":"dbiasi6@wikipedia.org","status":"Open","school":{"urn":100061,"name":"St Christopher's School","street":"32 Belsize Lane","town":"London","county":null,"postcode":"NW3 5AE"},"receivedDate":"2021-08-13","lastUpdated":"2021-08-13","assignedTo":"Elena Mityukov","category":"MFD","phone":"203 646 6241"},
{"id":8,"first_name":"Steffen","last_name":"Skey","email":"sskey7@newyorker.com","status":"Open","school":{"urn":100312,"name":"Ickburgh School","street":"Kenworthy Road","town":"London","county":"Hackney","postcode":"E9 5RB"},"receivedDate":"2021-08-06","lastUpdated":"2021-08-06","assignedTo":"Carri Wearing","category":"Catering","phone":"508 943 8945"},
{"id":9,"first_name":"Sheppard","last_name":"O'Caine","email":"socaine8@squarespace.com","status":"new","school":{"urn":100477,"name":"Ashburnham Community School","street":"17 Blantyre Street","town":"London","county":null,"postcode":"SW10 0DT"},"receivedDate":"2021-08-17","lastUpdated":"2021-08-17","assignedTo":"Elena Mityukov","category":"Catering","phone":"972 623 4053"},
{"id":10,"first_name":"Ephraim","last_name":"Sambiedge","email":"esambiedge9@reverbnation.com","status":"new","school":{"urn":100868,"name":"Hope Primary School","street":"Wells Way Church Hall","town":"London","county":"Wells Way","postcode":"SE5 7SY"},"receivedDate":"2021-08-03","lastUpdated":"2021-08-03","assignedTo":"Elena Mityukov","category":"Catering","phone":"142 702 1478"},
{"id":11,"first_name":"Glennie","last_name":"Trewhella","email":"gtrewhellaa@marriott.com","status":"resolved","school":{"urn":100151,"name":"Rockliffe Manor Primary School","street":"Bassant Road","town":"London","county":null,"postcode":"SE18 2NP"},"receivedDate":"2021-08-13","lastUpdated":"2021-08-13","assignedTo":"Elena Mityukov","category":"MFD","phone":"357 756 3735"},
{"id":12,"first_name":"Lucita","last_name":"Burchmore","email":"lburchmoreb@reference.com","status":"Open","school":{"urn":100731,"name":"St Michael's Church of England Primary School","street":"Champion Road","town":"London","county":"Sydenham","postcode":"SE26 4HH"},"receivedDate":"2021-08-16","lastUpdated":"2021-08-16","assignedTo":"Jenni Weiner","category":"Catering","phone":"172 468 4230"},
{"id":13,"first_name":"Robin","last_name":"Pays","email":"rpaysc@sciencedaily.com","status":"resolved","school":{"urn":100061,"name":"St Christopher's School","street":"32 Belsize Lane","town":"London","county":null,"postcode":"NW3 5AE"},"receivedDate":"2021-08-12","lastUpdated":"2021-08-12","assignedTo":"Carri Wearing","category":"MFD","phone":"589 577 9327"},
{"id":14,"first_name":"Colman","last_name":"Glisenan","email":"cglisenand@a8.net","status":"Open","school":{"urn":100030,"name":"Emmanuel Church of England Primary School","street":"152-158 Mill Lane","town":"London","county":"West Hampstead","postcode":"NW6 1TF"},"receivedDate":"2021-08-12","lastUpdated":"2021-08-12","assignedTo":"Carri Wearing","category":"Catering","phone":"314 675 5258"},
{"id":15,"first_name":"Marilee","last_name":"MacAne","email":"mmacanee@google.nl","status":"new","school":{"urn":100033,"name":"Holy Trinity and Saint Silas CofE Primary School, NW1","street":"Hartland Road","town":"London","county":null,"postcode":"NW1 8DE"},"receivedDate":"2021-08-09","lastUpdated":"2021-08-09","assignedTo":"Carri Wearing","category":"MFD","phone":"535 676 6641"},
{"id":16,"first_name":"Tamas","last_name":"Allibone","email":"tallibonef@paginegialle.it","status":"new","school":{"urn":100084,"name":"Fine Arts College","street":"Centre Studios","town":"London","county":"41-43 Englands Lane","postcode":"NW3 4YD"},"receivedDate":"2021-08-02","lastUpdated":"2021-08-02","assignedTo":"Jenni Weiner","category":"MFD","phone":"389 152 1004"},
{"id":17,"first_name":"Lou","last_name":"Brokenshaw","email":"lbrokenshawg@jiathis.com","status":"resolved","school":{"urn":100711,"name":"Eliot Bank Primary School","street":"Thorpewood Avenue","town":"London","county":"Sydenham","postcode":"SE26 4BU"},"receivedDate":"2021-08-06","lastUpdated":"2021-08-06","assignedTo":"Elena Mityukov","category":"MFD","phone":"812 644 6605"},
{"id":18,"first_name":"Jaime","last_name":"Chaloner","email":"jchalonerh@tripod.com","status":"resolved","school":{"urn":100769,"name":"Dulwich Wood Nursery School","street":"Lyall Avenue","town":"London","county":null,"postcode":"SE21 8QS"},"receivedDate":"2021-08-15","lastUpdated":"2021-08-15","assignedTo":"Elena Mityukov","category":"MFD","phone":"393 575 3708"},
{"id":19,"first_name":"Marlow","last_name":"Fielden","email":"mfieldeni@noaa.gov","status":"resolved","school":{"urn":100549,"name":"Chelsea  Community Hospital  School","street":"369 Fulham Road","town":"London","county":null,"postcode":"SW10 9NH"},"receivedDate":"2021-08-11","lastUpdated":"2021-08-11","assignedTo":"Ki Gomme","category":"MFD","phone":"840 270 1827"},
{"id":20,"first_name":"Atalanta","last_name":"Chaize","email":"achaizej@vk.com","status":"new","school":{"urn":100398,"name":"Canonbury Junior School","street":"Canonbury Road","town":"London","county":null,"postcode":"N1 2UT"},"receivedDate":"2021-08-10","lastUpdated":"2021-08-10","assignedTo":"Inna Goodluck","category":"MFD","phone":"422 621 9283"}]