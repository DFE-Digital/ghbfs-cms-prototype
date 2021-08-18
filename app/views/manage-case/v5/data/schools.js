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

module.exports = [
    {
        "id": 1,
        "first_name": "Hortense",
        "last_name": "Dursley",
        "email": "hdursley0@youtu.be",
        "status": "new",
        "school":
        {
            "urn": 100237,
            "name": "Rushmore Junior School",
            "street": "Elderfield Road",
            "town": "London",
            "county": "Hackney",
            "postcode": "E5 0EY"
        },
        "receivedDate": "2021-08-02",
        "lastUpdated": "2021-08-02",
        "assignedTo": "Elena Mityukov",
        "phone": "961 998 6464"
    },
    {
        "id": 2,
        "first_name": "Maurizio",
        "last_name": "Este",
        "email": "meste1@buzzfeed.com",
        "status": "Open",
        "school":
        {
            "urn": 100111,
            "name": "Millennium Primary School",
            "street": "50 John Harrison Way",
            "town": "London",
            "county": "Greenwich",
            "postcode": "SE10 0BG"
        },
        "receivedDate": "2021-08-10",
        "lastUpdated": "2021-08-10",
        "assignedTo": "Inna Goodluck",
        "phone": "429 403 4443"
    },
    {
        "id": 3,
        "first_name": "Carina",
        "last_name": "Janowicz",
        "email": "cjanowicz2@barnesandnoble.com",
        "status": "Open",
        "school":
        {
            "urn": 100637,
            "name": "La Retraite Roman Catholic Girls' School",
            "street": "Atkins Road",
            "town": "London",
            "county": null,
            "postcode": "SW12 0AB"
        },
        "receivedDate": "2021-08-14",
        "lastUpdated": "2021-08-14",
        "assignedTo": "Jenni Weiner",
        "phone": "800 882 3466"
    },
    {
        "id": 4,
        "first_name": "Doro",
        "last_name": "Duck",
        "email": "dduck3@blogger.com",
        "status": "new",
        "school":
        {
            "urn": 100688,
            "name": "Holbeach Primary School",
            "street": "Nelgarde Road",
            "town": "London",
            "county": null,
            "postcode": "SE6 4TP"
        },
        "receivedDate": "2021-08-07",
        "lastUpdated": "2021-08-07",
        "assignedTo": "Inna Goodluck",
        "phone": "437 467 0599"
    },
    {
        "id": 5,
        "first_name": "Madelle",
        "last_name": "Ainscough",
        "email": "mainscough4@japanpost.jp",
        "status": "Open",
        "school":
        {
            "urn": 100373,
            "name": "Ravenscourt Park Preparatory School",
            "street": "16 Ravenscourt Avenue",
            "town": "London",
            "county": "Ravenscourt Park",
            "postcode": "W6 0SL"
        },
        "receivedDate": "2021-08-12",
        "lastUpdated": "2021-08-12",
        "assignedTo": "Inna Goodluck",
        "phone": "149 210 6098"
    },
    {
        "id": 6,
        "first_name": "Gill",
        "last_name": "Ilyunin",
        "email": "gilyunin5@eventbrite.com",
        "status": "new",
        "school":
        {
            "urn": 100324,
            "name": "Brackenbury Primary School",
            "street": "Dalling Road",
            "town": "London",
            "county": "Hammersmith",
            "postcode": "W6 0BA"
        },
        "receivedDate": "2021-08-10",
        "lastUpdated": "2021-08-10",
        "assignedTo": "Carri Wearing",
        "phone": "154 705 3030"
    },
    {
        "id": 7,
        "first_name": "Devon",
        "last_name": "Cullen",
        "email": "dcullen6@nationalgeographic.com",
        "status": "Open",
        "school":
        {
            "urn": 100578,
            "name": "Richard Atkins Primary School",
            "street": "New Park Road",
            "town": "London",
            "county": null,
            "postcode": "SW2 4JP"
        },
        "receivedDate": "2021-08-11",
        "lastUpdated": "2021-08-11",
        "assignedTo": "Jenni Weiner",
        "phone": "306 600 9005"
    },
    {
        "id": 8,
        "first_name": "Laurie",
        "last_name": "Banbridge",
        "email": "lbanbridge7@g.co",
        "status": "closed",
        "school":
        {
            "urn": 100788,
            "name": "Galleywall Primary School",
            "street": "Galleywall Road",
            "town": "London",
            "county": null,
            "postcode": "SE16 3PB"
        },
        "receivedDate": "2021-08-10",
        "lastUpdated": "2021-08-10",
        "assignedTo": "Carri Wearing",
        "phone": "318 382 0447"
    },
    {
        "id": 9,
        "first_name": "Cris",
        "last_name": "Rusbridge",
        "email": "crusbridge8@senate.gov",
        "status": "Open",
        "school":
        {
            "urn": 100891,
            "name": "Bonner Primary School",
            "street": "Stainsbury Street",
            "town": "London",
            "county": "Bethnal Green",
            "postcode": "E2 0NF"
        },
        "receivedDate": "2021-08-06",
        "lastUpdated": "2021-08-06",
        "assignedTo": "Inna Goodluck",
        "phone": "750 640 0380"
    },
    {
        "id": 10,
        "first_name": "Tripp",
        "last_name": "Kern",
        "email": "tkern9@wiley.com",
        "status": "closed",
        "school":
        {
            "urn": 100154,
            "name": "Wingfield Primary School",
            "street": "Ensign Street",
            "town": "London",
            "county": null,
            "postcode": "SE3 9GJ"
        },
        "receivedDate": "2021-08-08",
        "lastUpdated": "2021-08-08",
        "assignedTo": "Ki Gomme",
        "phone": "498 446 4580"
    },
    {
        "id": 11,
        "first_name": "Channa",
        "last_name": "Strathman",
        "email": "cstrathmana@marketwatch.com",
        "status": "new",
        "school":
        {
            "urn": 100098,
            "name": "Pound Park Nursery School",
            "street": "Pound Park Road",
            "town": "London",
            "county": "Charlton",
            "postcode": "SE7 8AF"
        },
        "receivedDate": "2021-08-16",
        "lastUpdated": "2021-08-16",
        "assignedTo": "Ki Gomme",
        "phone": "300 630 4158"
    },
    {
        "id": 12,
        "first_name": "Tamas",
        "last_name": "Truscott",
        "email": "ttruscottb@hostgator.com",
        "status": "Open",
        "school":
        {
            "urn": 100626,
            "name": "Stockwell Park School",
            "street": "Clapham Road",
            "town": "London",
            "county": null,
            "postcode": "SW9 0AL"
        },
        "receivedDate": "2021-08-14",
        "lastUpdated": "2021-08-14",
        "assignedTo": "Ki Gomme",
        "phone": "618 415 0997"
    },
    {
        "id": 13,
        "first_name": "Mirella",
        "last_name": "Bowser",
        "email": "mbowserc@hhs.gov",
        "status": "Open",
        "school":
        {
            "urn": 100083,
            "name": "Royal School Hampstead",
            "street": "65 Rosslyn Hill",
            "town": "London",
            "county": "Hampstead",
            "postcode": "NW3 5UD"
        },
        "receivedDate": "2021-08-04",
        "lastUpdated": "2021-08-04",
        "assignedTo": "Inna Goodluck",
        "phone": "369 991 6200"
    },
    {
        "id": 14,
        "first_name": "Dareen",
        "last_name": "Boneham",
        "email": "dbonehamd@cloudflare.com",
        "status": "Open",
        "school":
        {
            "urn": 100930,
            "name": "Thomas Buxton Primary School",
            "street": "Buxton Street",
            "town": "London",
            "county": "Bethnal Green",
            "postcode": "E1 5AR"
        },
        "receivedDate": "2021-08-12",
        "lastUpdated": "2021-08-12",
        "assignedTo": "Ki Gomme",
        "phone": "152 298 8413"
    },
    {
        "id": 15,
        "first_name": "Kala",
        "last_name": "O' Quirk",
        "email": "koquirke@unesco.org",
        "status": "Open",
        "school":
        {
            "urn": 100486,
            "name": "Park Walk Primary School",
            "street": "Park Walk",
            "town": "London",
            "county": "King's Road",
            "postcode": "SW10 0AY"
        },
        "receivedDate": "2021-08-08",
        "lastUpdated": "2021-08-08",
        "assignedTo": "Jenni Weiner",
        "phone": "997 892 4971"
    },
    {
        "id": 16,
        "first_name": "Ned",
        "last_name": "Tottie",
        "email": "ntottief@soup.io",
        "status": "new",
        "school":
        {
            "urn": 100403,
            "name": "Duncombe Primary School",
            "street": "Sussex Way",
            "town": "London",
            "county": "Islington",
            "postcode": "N19 4JA"
        },
        "receivedDate": "2021-08-16",
        "lastUpdated": "2021-08-16",
        "assignedTo": "Ki Gomme",
        "phone": "237 904 6916"
    },
    {
        "id": 17,
        "first_name": "Thane",
        "last_name": "Balfe",
        "email": "tbalfeg@cdbaby.com",
        "status": "closed",
        "school":
        {
            "urn": 100471,
            "name": "Rosemary Sld School",
            "street": "75 Prebend Street",
            "town": "London",
            "county": null,
            "postcode": "N1 8PW"
        },
        "receivedDate": "2021-08-12",
        "lastUpdated": "2021-08-12",
        "assignedTo": "Ki Gomme",
        "phone": "547 373 9127"
    },
    {
        "id": 18,
        "first_name": "Willie",
        "last_name": "Entissle",
        "email": "wentissleh@washingtonpost.com",
        "status": "new",
        "school":
        {
            "urn": 100068,
            "name": "North Bridge House Pre-Prep School",
            "street": "8 Netherhall Gardens",
            "town": "London",
            "county": null,
            "postcode": "NW3 5RR"
        },
        "receivedDate": "2021-08-02",
        "lastUpdated": "2021-08-02",
        "assignedTo": "Carri Wearing",
        "phone": "865 108 9462"
    },
    {
        "id": 19,
        "first_name": "Karoly",
        "last_name": "Heap",
        "email": "kheapi@mlb.com",
        "status": "new",
        "school":
        {
            "urn": 100216,
            "name": "Amherst Primary School",
            "street": "Sigdon Road",
            "town": "London",
            "county": "Hackney",
            "postcode": "E8 1AS"
        },
        "receivedDate": "2021-08-01",
        "lastUpdated": "2021-08-01",
        "assignedTo": "Inna Goodluck",
        "phone": "608 670 3202"
    },
    {
        "id": 20,
        "first_name": "Buffy",
        "last_name": "Munt",
        "email": "bmuntj@unc.edu",
        "status": "Open",
        "school":
        {
            "urn": 100377,
            "name": "Bloomsbury College",
            "street": "52a Walham Grove",
            "town": "London",
            "county": null,
            "postcode": "SW6 1QR"
        },
        "receivedDate": "2021-08-02",
        "lastUpdated": "2021-08-02",
        "assignedTo": "Jenni Weiner",
        "phone": "481 792 3300"
    }
]