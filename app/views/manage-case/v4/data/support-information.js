let oldData = [{
      "id": 1,
      "type-of-establishment": "school",
      "type-of-help": "supplier",
      "type-of-goods": "minibus",
      "when-needed": "1 to 6 months",
      "budget": "40000",
      "suppliers": "yes",
      "supplier-detail": "They have provided a quotation",
      "description": "Ford transit L460 17 seater minibuses in Blazer Blue."
   },{
      "id": 2,
      "type-of-establishment": "school",
      "type-of-help": "supplier",
      "type-of-goods": "Website Development Services",
      "when-needed": "Less than one month",
      "budget": "20000",
      "suppliers": "no",
      "supplier-detail": "",
      "description": "Would like a website to be developed for the school. Will need the branding to be reworked and website to include a student and staff portal. "
   },{
      "id": 3,
      "type-of-establishment": "school",
      "type-of-help": "supplier",
      "type-of-goods": "antibacterial gel",
      "when-needed": "Less than one month",
      "suppliers": "yes",
      "supplier-detail": "KCS - unable to deliver",
      "description": "Antibacterial gel that is compliant with the regulations"
   },{
      "id": 4,
      "type-of-establishment": "school",
      "type-of-goods": "playground resurfacing",
      "when-needed": "1 to 6 months",
      "suppliers": "yes",
      "supplier-detail": "Playforce - quote\r\nPentagon - quote\r\nKompan - visit",
      "description": "Playground resurfacing and equipment for the children to use. ",
      "budget": "60000"
   },{
      "id": 5,
      "type-of-establishment": "mat",
      "type-of-help": "other",
      "advice-detail": "We would like help with procuring a catering service to a federation of 3 schools.\r\nIs there a framework already in place?\r\nI would like help with the legal side of the procurement and specific knowledge in procuring this type of contract. "
   },{
      "id": 6,
      "type-of-establishment": "school",
      "type-of-help": "supplier",
      "type-of-goods": "Coach companies",
      "when-needed": "Less than one month",
      "budget": "1500",
      "supplier-detail": "",
      "suppliers": "no",
      "description": "Coaches to accommodate 120 students plus 7 staff. Outward and return journey to Gatwick Airport from Tonbridge. "
   }
]

module.exports = [{
      "id": 1,
      "type-of-help": "specify",
      "category": "Catering",
      "specify-question": "I've completed a specification, but I'm not sure what to do with it now. How do I contact suppliers?",
      "docUrl": "/public/images/manage-case/v4/catering-sepcification-1.docx"
   },{
      "id": 2,
      "type-of-help": "specify",
      "category": "Catering",
      "specify-question": "I've found your service, I've managed to complete my specification but I don't understand the food policy section. I don't know if it's relevant for me. Can you explain what it means and what difference it'd make?",
      "docUrl": "/public/images/manage-case/v4/catering-sepcification-1.docx"
   },{
      "id": 3,
      "type-of-help": "specify",
      "category": "Catering",
      "specify-question": "I've found your service and I don't know how to find the information I need to get started.",
      "docUrl": "/public/images/manage-case/v4/catering-sepcification-1.docx"
   }
]