var Q_ANSWER = [
    {
        type: "1",
        content: "Strongly disagree"
    },
    {
        type: "2",
        content: "Disagree"
    },
    {
        type: "3",
        content: "Neutral"
    },
    {
        type: "4",
        content: "Agree"
    },
    {
        type: "5",
        content: "Strongly agree"
    }
];

var question = [
  {
    "q_id": "QA1",
    "question": "Category of Respondent:",
    "answers":  [{
      type: "User ",
      content: "User "
    }, {
      type: "Vendor",
      content: "Vendor "
    }, {
      type: "Consultant",
      content: "Consultant "
    }, {
      type: "Maintenance",
      content: "Maintenance "
    }, {
      type: "Others",
      content: "Others"
    }]
  },
  {
    "q_id": "QA2",
    "question": "Category of Business Sector:",
    "answers": [{
      type: "Manufacturing: (incl. Agro Based)",
      content: "Manufacturing: (incl. Agro Based)"
    }, {
      type: "Manufacturing Related Services",
      content: "Manufacturing Related Services"
    }, {
      type: "Services: (including ICT)",
      content: "Services: (including ICT)"
    }, {
      type: "Primary Agriculture",
      content: "Primary Agriculture"
    }, {
      type: "Others",
      content: "Others"
    }]
  },
  {
    "q_id": "QA3",
    "question": "Years of adopting ERP system in your organization:",
    "answers": [{
      type: "Less than 1 year",
      content: "Less than 1 year"
    }, {
      type: "1-2 years",
      content: "1-2 years"
    }, {
      type: "3-5 years",
      content: "3-5 years"
    }, {
      type: "6-10 years",
      content: "6-10 years"
    }, {
      type: "11-15 years",
      content: "11-15 years"
    }, {
      type: "15 years above",
      content: "15 years above"
    }]
  },
  {
    "q_id": "OF1",
    "question": "Failure to redesign business processes",
    "answers": Q_ANSWER
  },
  {
    "q_id": "OF2",
    "question": "Failure to follow an enterprise-wide design which supports data integration",
    "answers": Q_ANSWER
  },
  {
    "q_id": "OF3",
    "question": "Insufficient resources",
    "answers": Q_ANSWER
  },
  {
    "q_id": "OF4",
    "question": "Extent of change",
    "answers": Q_ANSWER
  },
  {
    "q_id": "OF5",
    "question": "Degree  of computerization",
    "answers": Q_ANSWER
  },
  {
    "q_id": "SM1",
    "question": "Insufficient training and reskilling",
    "answers": Q_ANSWER
  },
  {
    "q_id": "SM2",
    "question": "Insufficient internal expertise",
    "answers": Q_ANSWER
  },
  {
    "q_id": "SM3",
    "question": "Lack of business analysts with business and technology knowledge",
    "answers": Q_ANSWER
  },
  {
    "q_id": "SM4",
    "question": "Failure to mix internal and external expertise effectively",
    "answers": Q_ANSWER
  },
  {
    "q_id": "SM5",
    "question": "Lack of ability to recruit and retain qualified ERP systems developers",
    "answers": Q_ANSWER
  },
  {
    "q_id": "MSS1",
    "question": "Lack of senior management support",
    "answers": Q_ANSWER
  },
  {
    "q_id": "MSS2",
    "question": "Lack of proper management control structure",
    "answers": Q_ANSWER
  },
  {
    "q_id": "MSS3",
    "question": "Ineffective communications",
    "answers": Q_ANSWER
  },
  {
    "q_id": "MSS4",
    "question": "Lack of agreement on project goals",
    "answers": Q_ANSWER
  },
  {
    "q_id": "MSS5",
    "question": "Lack of effective project management methodology",
    "answers": Q_ANSWER
  },
  {
    "q_id": "SSD1",
    "question": "Failure to adhere to standardized specifications which the software supports",
    "answers": Q_ANSWER
  },
  {
    "q_id": "SSD2",
    "question": "Lack of integration between enterprise-wide systems",
    "answers": Q_ANSWER
  },
  {
    "q_id": "SSD3",
    "question": "Unclear/Misunderstand changing requirements",
    "answers": Q_ANSWER
  },
  {
    "q_id": "SSD4",
    "question": "Lack of effective software management methodology",
    "answers": Q_ANSWER
  },
  {
    "q_id": "SSD5",
    "question": "Developing wrong functions and wrong user interface",
    "answers": Q_ANSWER
  },
  {
    "q_id": "UIT1",
    "question": "Insufficient training of end-users",
    "answers": Q_ANSWER
  },
  {
    "q_id": "UIT2",
    "question": "Ineffective communications with users",
    "answers": Q_ANSWER
  },
  {
    "q_id": "UIT3",
    "question": "Lack of full-time commitment of customers to project management and project activities",
    "answers": Q_ANSWER
  },
  {
    "q_id": "UIT4",
    "question": "Lack of sensitivity to user resistance",
    "answers": Q_ANSWER
  },
  {
    "q_id": "UIT5",
    "question": "Fail to get user support",
    "answers": Q_ANSWER
  },
  {
    "q_id": "TP1",
    "question": "Inadequate technology infrastructure for supporting project requirement",
    "answers": Q_ANSWER
  },
  {
    "q_id": "TP2",
    "question": "Application complexity (technical complexity and links to existing legacy system)",
    "answers": Q_ANSWER
  },
  {
    "q_id": "TP3",
    "question": "Incapability of current enterprise technical infrastructure",
    "answers": Q_ANSWER
  },
  {
    "q_id": "TP4",
    "question": "Technology newness (need of new hardware and software)",
    "answers": Q_ANSWER
  },
  {
    "q_id": "TP5",
    "question": "Strained technical capabilities and failure of technology to meet specifications",
    "answers": Q_ANSWER
  },
  {
    "q_id": "VC1",
    "question": "External expertise sources did not provide us prompt services",
    "answers": Q_ANSWER
  },
  {
    "q_id": "VC2",
    "question": "External expertise sources are not dependable",
    "answers": Q_ANSWER
  },
  {
    "q_id": "VC3",
    "question": "Our external expertise sources did not have up-to-date facilities",
    "answers": Q_ANSWER
  },
  {
    "q_id": "VC4",
    "question": "Inadequate technical support by external expertise",
    "answers": Q_ANSWER
  },
  {
    "q_id": "VC5",
    "question": "Did not provide quality training and service",
    "answers": Q_ANSWER
  }
];

export default question;

