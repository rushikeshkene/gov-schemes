const schemes =[
  // --- OLD SCHEMES (1 to 33) ---
  {
    id: 1, name: "Research, Development and Innovation (RDI) Scheme", nameMr: "संशोधन, विकास आणि नवोपक्रम (RDI) योजना",
    description: "Supports research, innovation, and technology development across sectors.", descriptionMr: "विविध क्षेत्रांमध्ये संशोधन, नवोपक्रम आणि तंत्रज्ञान विकासाला प्रोत्साहन देणारी योजना.",
    benefits: "Funding and grants for research and innovation projects.", benefitsMr: "संशोधन आणि नवोपक्रम प्रकल्पांसाठी आर्थिक सहाय्य.",
    eligibility: "Researchers, institutions, startups.", eligibilityMr: "संशोधक, संस्था आणि स्टार्टअप.",
    documents:["Aadhaar Card", "Project Proposal"], documentsMr: ["आधार कार्ड", "प्रकल्प प्रस्ताव"],
    status: "Active", category: "Education", categoryMr: "शिक्षण", link: "", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Student"
  },
  {
    id: 2, name: "PM-SETU", nameMr: "पीएम-सेतू",
    description: "Skill development and employability improvement initiative.", descriptionMr: "कौशल्य विकास आणि रोजगारक्षमता सुधारण्यासाठी उपक्रम.",
    benefits: "Improves technical training and job readiness.", benefitsMr: "तांत्रिक प्रशिक्षण आणि नोकरीसाठी तयारी सुधारते.",
    eligibility: "Students and trainees under eligible institutions.", eligibilityMr: "पात्र संस्थांमधील विद्यार्थी आणि प्रशिक्षणार्थी.",
    documents:["ID Proof", "Institution Details"], documentsMr:["ओळखपत्र", "संस्थेची माहिती"],
    status: "Needs verification", category: "Employment", categoryMr: "रोजगार", link: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2222121&reg=3&lang=1", verified: true,
    minAge: 16, maxAge: 45, targetGender: "All", incomeLimit: 9999999, occupation: "Unemployed"
  },
  {
    id: 3, name: "Pradhan Mantri Matsya Sampada Yojana", nameMr: "प्रधानमंत्री मत्स्य संपदा योजना",
    description: "A flagship scheme for focused and sustainable development of the fisheries sector.", descriptionMr: "मत्स्य क्षेत्राच्या केंद्रित आणि शाश्वत विकासासाठी प्रमुख योजना.",
    benefits: "Improves fisheries infrastructure, boosts production, and supports livelihoods.", benefitsMr: "मत्स्य पायाभूत सुविधा सुधारते, उत्पादन वाढवते आणि उपजीविकेला मदत करते.",
    eligibility: "Fishers, fish farmers, self-help groups, and related cooperatives.", eligibilityMr: "मच्छीमार, मत्स्य शेतकरी, स्वयं-सहाय्य गट आणि संबंधित सहकारी संस्था.",
    documents: ["Aadhaar Card", "Bank Account", "Project Details"], documentsMr:["आधार कार्ड", "बँक खाते", "प्रकल्पाची माहिती"],
    status: "Active", category: "Farmer", categoryMr: "शेतकरी", link: "https://pmmsy.dof.gov.in", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Farmer"
  },
  {
    id: 4, name: "Vidyajyothi Scheme (Kerala)", nameMr: "विद्याज्योती योजना (केरळ)",
    description: "Financial aid for uniforms and study materials to physically handicapped students in Kerala.", descriptionMr: "केरळमधील शारीरिकदृष्ट्या दिव्यांग विद्यार्थ्यांना गणवेश आणि शैक्षणिक साहित्याकरिता आर्थिक मदत.",
    benefits: "Financial assistance ranging from ₹1000 to ₹3000 based on the course.", benefitsMr: "अभ्यासक्रमानुसार ₹1000 ते ₹3000 पर्यंत आर्थिक मदत.",
    eligibility: "Physically Handicapped students studying in Kerala state schools.", eligibilityMr: "केरळ राज्यातील शाळांमध्ये शिकणारे शारीरिकदृष्ट्या दिव्यांग विद्यार्थी.",
    documents:["Disability Certificate", "School ID", "Income Certificate"], documentsMr:["दिव्यांग प्रमाणपत्र", "शाळेचे ओळखपत्र", "उत्पन्न प्रमाणपत्र"],
    status: "State-specific", category: "Education", categoryMr: "शिक्षण", link: "https://sjd.kerala.gov.in", verified: true,
    minAge: 5, maxAge: 25, targetGender: "All", incomeLimit: 300000, occupation: "Student"
  },
  {
    id: 5, name: "Gyan Bharatam Mission", nameMr: "ज्ञान भारतम् मिशन",
    description: "Focused on unearthing and preserving India's vast manuscript heritage.", descriptionMr: "भारताच्या विस्तृत हस्तलिखित वारशाचा शोध घेणे आणि जतन करणे यावर केंद्रित.",
    benefits: "Supports preservation and AI-integrated digital access to historical knowledge resources.", benefitsMr: "ऐतिहासिक ज्ञानसंपत्तीचे जतन आणि कृत्रिम बुद्धिमत्तेसह डिजिटल प्रवेशास मदत करते.",
    eligibility: "Libraries, institutions, and participating cultural bodies.", eligibilityMr: "ग्रंथालये, संस्था आणि सहभागी सांस्कृतिक संस्था.",
    documents:["Institution Details", "Project Documents"], documentsMr: ["संस्थेची माहिती", "प्रकल्प कागदपत्रे"],
    status: "Needs verification", category: "Education", categoryMr: "शिक्षण", link: "", verified: false,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Any"
  },
  {
    id: 6, name: "Solar City Scheme", nameMr: "सोलर सिटी योजना",
    description: "Ministry of New and Renewable Energy initiative to develop solar cities across India.", descriptionMr: "भारतभर सौर शहरे विकसित करण्यासाठी नवीन आणि नवीकरणीय ऊर्जा मंत्रालयाचा उपक्रम.",
    benefits: "Subsidies for solar rooftop installations and green energy infrastructure.", benefitsMr: "सौर रूफटॉप स्थापनेसाठी आणि हरित ऊर्जा पायाभूत सुविधांसाठी अनुदान.",
    eligibility: "Residential and institutional buildings in designated solar cities.", eligibilityMr: "नियोजित सौर शहरांतील निवासी आणि संस्थात्मक इमारती.",
    documents:["Electricity Bill", "Property Documents", "Aadhaar Card"], documentsMr:["वीज बिल", "मालमत्तेची कागदपत्रे", "आधार कार्ड"],
    status: "Active", category: "Housing", categoryMr: "घरकुल", link: "https://mnre.gov.in", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Any"
  },
  {
    id: 7, name: "National Cyber Crime Reporting Portal", nameMr: "राष्ट्रीय सायबर गुन्हे नोंदणी पोर्टल",
    description: "Official portal for reporting cyber crime complaints online to authorities.", descriptionMr: "सायबर गुन्ह्यांच्या तक्रारी ऑनलाईन अधिकाऱ्यांकडे नोंदवण्यासाठी अधिकृत पोर्टल.",
    benefits: "Fast, centralized complaint registration and tracking.", benefitsMr: "जलद, केंद्रीकृत तक्रार नोंदणी आणि ट्रॅकिंग.",
    eligibility: "Any citizen affected by cyber crime in India.", eligibilityMr: "भारतातील सायबर गुन्ह्यामुळे प्रभावित कोणताही नागरिक.",
    documents: ["Identity Proof", "Digital Evidence of Complaint"], documentsMr:["ओळखपत्र", "तक्रारीचे डिजिटल पुरावे"],
    status: "Active", category: "Social Welfare", categoryMr: "समाज कल्याण", link: "https://cybercrime.gov.in", verified: true,
    minAge: 10, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Any"
  },
  {
    id: 8, name: "CM's Jibon Anuprerana Scheme (Assam)", nameMr: "मुख्यमंत्र्यांची जिबोन अनुप्रेरणा योजना (आसाम)",
    description: "Financial support scheme for research scholars in Assam.", descriptionMr: "आसाममधील संशोधन विद्यार्थ्यांसाठी आर्थिक सहाय्य योजना.",
    benefits: "One-time financial assistance for research activities.", benefitsMr: "संशोधन कार्यासाठी एकरकमी आर्थिक मदत.",
    eligibility: "Eligible research scholars residing in Assam.", eligibilityMr: "आसाममध्ये राहणारे पात्र संशोधन विद्यार्थी.",
    documents: ["Scholar ID", "Institution Details", "Bank Account"], documentsMr:["विद्यार्थी ओळखपत्र", "संस्थेची माहिती", "बँक खाते"],
    status: "Needs verification", category: "Education", categoryMr: "शिक्षण", link: "", verified: false,
    minAge: 18, maxAge: 35, targetGender: "All", incomeLimit: 9999999, occupation: "Student"
  },
  {
    id: 9, name: "CROPIC", nameMr: "क्रॉपिक",
    description: "AI-based crop photo monitoring and assessment support system.", descriptionMr: "कृत्रिम बुद्धिमत्तेवर आधारित पीक छायाचित्र निरीक्षण आणि मूल्यांकन सहाय्य प्रणाली.",
    benefits: "Expedites insurance claim approvals and accurate damage assessment.", benefitsMr: "विमा दावे मंजुरी जलद करते आणि नुकसानीचे अचूक मूल्यांकन करते.",
    eligibility: "Farmers registered under PMFBY.", eligibilityMr: "प्रधानमंत्री फसल विमा योजनेअंतर्गत नोंदणीकृत शेतकरी.",
    documents:["Geo-tagged Crop Photos", "Aadhaar Card", "PMFBY Registration"], documentsMr:["जिओ-टॅग केलेले पीक फोटो", "आधार कार्ड", "पीएमएफबीवाय नोंदणी"],
    status: "Active", category: "Farmer", categoryMr: "शेतकरी", link: "https://pmfby.gov.in", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Farmer"
  },
  {
    id: 10, name: "Adi Karmayogi Abhiyan", nameMr: "आदि कर्मयोगी अभियान",
    description: "National mission to build a decentralized tribal leadership ecosystem.", descriptionMr: "विकेंद्रित आदिवासी नेतृत्व व्यवस्था उभारण्यासाठी राष्ट्रीय अभियान.",
    benefits: "Capacity building and leadership training for tribal youth and officials.", benefitsMr: "आदिवासी युवक आणि अधिकाऱ्यांसाठी क्षमता विकास व नेतृत्व प्रशिक्षण.",
    eligibility: "Tribal youth, SHGs, and government officers in tribal districts.", eligibilityMr: "आदिवासी युवक, स्वयं-सहाय्य गट आणि आदिवासी जिल्ह्यांतील सरकारी अधिकारी.",
    documents: ["ID Proof", "Community/Caste Certificate"], documentsMr:["ओळखपत्र", "जात/समुदाय प्रमाणपत्र"],
    status: "Active", category: "Social Welfare", categoryMr: "समाज कल्याण", link: "https://adiprasaran.tribal.gov.in", verified: true,
    minAge: 18, maxAge: 45, targetGender: "All", incomeLimit: 9999999, occupation: "Any"
  },
  {
    id: 11, name: "Mukhyamantri Vidyarthi Pratibha Yojna (Delhi)", nameMr: "मुख्यमंत्री विद्यार्थी प्रतिभा योजना (दिल्ली)",
    description: "Scholarship for students of SC/ST/OBC/Minority categories in Delhi.", descriptionMr: "दिल्लीतील एससी/एसटी/ओबीसी/अल्पसंख्याक विद्यार्थ्यांसाठी शिष्यवृत्ती योजना.",
    benefits: "Financial aid of ₹5000 to ₹10,000 per annum for education.", benefitsMr: "शिक्षणासाठी वार्षिक ₹5000 ते ₹10,000 पर्यंत आर्थिक मदत.",
    eligibility: "Students of Class 9 to 12 studying in Delhi recognized schools.", eligibilityMr: "दिल्लीतील मान्यताप्राप्त शाळांमध्ये इयत्ता 9 ते 12 मध्ये शिकणारे विद्यार्थी.",
    documents:["Caste Certificate", "Income Certificate", "Mark Sheet"], documentsMr: ["जात प्रमाणपत्र", "उत्पन्न प्रमाणपत्र", "गुणपत्रिका"],
    status: "State-specific", category: "Education", categoryMr: "शिक्षण", link: "https://edistrict.delhigovt.nic.in", verified: true,
    minAge: 13, maxAge: 19, targetGender: "All", incomeLimit: 200000, occupation: "Student"
  },
  {
    id: 12, name: "Pandit Dindayal Upadhyay Swayam Yojna", nameMr: "पंडित दीनदयाल उपाध्याय स्वयं योजना",
    description: "Financial assistance for tribal students for hostel and food expenses.", descriptionMr: "आदिवासी विद्यार्थ्यांना वसतिगृह आणि भोजन खर्चासाठी आर्थिक सहाय्य.",
    benefits: "Direct fund transfer for lodging, boarding, and educational materials.", benefitsMr: "निवास, भोजन आणि शैक्षणिक साहित्याकरिता थेट निधी हस्तांतरण.",
    eligibility: "Scheduled Tribe students pursuing higher education in Maharashtra.", eligibilityMr: "महाराष्ट्रात उच्च शिक्षण घेणारे अनुसूचित जमातीचे विद्यार्थी.",
    documents:["Caste Certificate", "Admission Proof", "Bank Details"], documentsMr: ["जात प्रमाणपत्र", "प्रवेश पुरावा", "बँक तपशील"],
    status: "State-specific", category: "Education", categoryMr: "शिक्षण", link: "https://tribal.maharashtra.gov.in", verified: true,
    minAge: 16, maxAge: 30, targetGender: "All", incomeLimit: 250000, occupation: "Student"
  },
  {
    id: 13, name: "TALASH Initiative", nameMr: "तलाश उपक्रम",
    description: "A digital application to track and map out-of-school children.", descriptionMr: "शाळेबाह्य मुलांचा मागोवा घेण्यासाठी आणि नोंद करण्यासाठी डिजिटल अनुप्रयोग.",
    benefits: "Mainstreaming out-of-school children back into the education system.", benefitsMr: "शाळेबाह्य मुलांना पुन्हा शिक्षण व्यवस्थेत आणण्यास मदत.",
    eligibility: "State education departments and field workers.", eligibilityMr: "राज्य शिक्षण विभाग आणि क्षेत्रीय कर्मचारी.",
    documents:["Child Enrollment Data", "Field Reports"], documentsMr: ["मुलांची नोंदणी माहिती", "क्षेत्रीय अहवाल"],
    status: "Needs verification", category: "Social Welfare", categoryMr: "समाज कल्याण", link: "", verified: false,
    minAge: 6, maxAge: 14, targetGender: "All", incomeLimit: 9999999, occupation: "Any"
  },
  {
    id: 14, name: "Pradhan Mantri Fasal Bima Yojana", nameMr: "प्रधानमंत्री फसल विमा योजना",
    description: "Government sponsored crop insurance scheme for farmers.", descriptionMr: "शेतकऱ्यांसाठी शासन प्रायोजित पीक विमा योजना.",
    benefits: "Financial protection against crop loss due to natural calamities.", benefitsMr: "नैसर्गिक आपत्तींमुळे होणाऱ्या पीक नुकसानीविरुद्ध आर्थिक संरक्षण.",
    eligibility: "Farmers growing notified crops in notified areas.", eligibilityMr: "अधिसूचित क्षेत्रात अधिसूचित पिके घेणारे शेतकरी.",
    documents:["Aadhaar Card", "Land Records", "Bank Account", "Sowing Certificate"], documentsMr:["आधार कार्ड", "जमिनीचे कागदपत्र", "बँक खाते", "पेरणी प्रमाणपत्र"],
    status: "Active", category: "Farmer", categoryMr: "शेतकरी", link: "https://pmfby.gov.in", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Farmer"
  },
  {
    id: 15, name: "Setu Bharatam Scheme", nameMr: "सेतु भारतम् योजना",
    description: "MoRTH initiative for replacement of level crossings with Over/Under bridges.", descriptionMr: "लेव्हल क्रॉसिंगच्या जागी उड्डाणपूल/भुयारी पूल उभारण्यासाठी रस्ते वाहतूक मंत्रालयाचा उपक्रम.",
    benefits: "Improved road safety, reduced traffic, and better connectivity.", benefitsMr: "रस्ता सुरक्षितता वाढते, वाहतूक कमी होते आणि संपर्क सुधारतो.",
    eligibility: "State governments and infrastructure development agencies.", eligibilityMr: "राज्य सरकारे आणि पायाभूत सुविधा विकास संस्था.",
    documents:["Project Proposal", "Feasibility Report"], documentsMr: ["प्रकल्प प्रस्ताव", "व्यवहार्यता अहवाल"],
    status: "Active", category: "Housing", categoryMr: "पायाभूत सुविधा", link: "https://morth.nic.in", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Any"
  },
  {
    id: 16, name: "Annadata Sukhibhava Scheme (AP)", nameMr: "अन्नदाता सुखीभाव योजना (आंध्र प्रदेश)",
    description: "Farmer support scheme from Andhra Pradesh providing income support.", descriptionMr: "आंध्र प्रदेशातील शेतकऱ्यांना उत्पन्न सहाय्य देणारी योजना.",
    benefits: "Direct financial assistance to eligible farming families.", benefitsMr: "पात्र शेतकरी कुटुंबांना थेट आर्थिक मदत.",
    eligibility: "Landholding and recognized tenant farmers in Andhra Pradesh.", eligibilityMr: "आंध्र प्रदेशातील जमीनधारक आणि मान्यताप्राप्त भाडेकरू शेतकरी.",
    documents:["Aadhaar Card", "Land Records", "Bank Account"], documentsMr:["आधार कार्ड", "जमिनीचे कागदपत्र", "बँक खाते"],
    status: "State-specific", category: "Farmer", categoryMr: "शेतकरी", link: "https://annadathasukhibhava.ap.gov.in", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Farmer"
  },
  {
    id: 17, name: "PM E-DRIVE Scheme", nameMr: "पीएम ई-ड्राइव्ह योजना",
    description: "Promotes electric mobility through subsidies for Electric Vehicles.", descriptionMr: "इलेक्ट्रिक वाहनांसाठी अनुदान आणि चार्जिंग पायाभूत सुविधांद्वारे ई-मोबिलिटीला प्रोत्साहन.",
    benefits: "Incentives for EV buyers and financial support for infrastructure developers.", benefitsMr: "ईव्ही खरेदीदारांसाठी प्रोत्साहन आणि पायाभूत सुविधा विकासकांसाठी आर्थिक सहाय्य.",
    eligibility: "Individual EV buyers, Original Equipment Manufacturers (OEMs).", eligibilityMr: "वैयक्तिक ईव्ही खरेदीदार, उत्पादक आणि फ्लीट ऑपरेटर.",
    documents:["Purchase Invoice", "ID Proof", "Registration Documents"], documentsMr:["खरेदी बिल", "ओळखपत्र", "नोंदणी कागदपत्रे"],
    status: "Active", category: "Employment", categoryMr: "व्यवसाय", link: "https://heavyindustries.gov.in", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Any"
  },
  {
    id: 18, name: "PM Vishwakarma", nameMr: "पीएम विश्वकर्मा",
    description: "Comprehensive support for traditional artisans and craftspeople.", descriptionMr: "पारंपरिक कारागीर आणि हस्तकला करणाऱ्यांसाठी सर्वसमावेशक सहाय्य.",
    benefits: "Skill training, ₹15,000 toolkit incentive, and collateral-free credit assistance.", benefitsMr: "कौशल्य प्रशिक्षण, ₹15,000 टूलकिट प्रोत्साहन आणि तारणमुक्त कर्ज सहाय्य.",
    eligibility: "Traditional artisans working in 18 identified trades.", eligibilityMr: "ओळखल्या गेलेल्या 18 पारंपरिक व्यवसायांमध्ये काम करणारे कारागीर.",
    documents:["Aadhaar Card", "Bank Account", "Occupation Proof/Ration Card"], documentsMr:["आधार कार्ड", "बँक खाते", "व्यवसाय पुरावा/रेशन कार्ड"],
    status: "Active", category: "Employment", categoryMr: "रोजगार", link: "https://pmvishwakarma.gov.in", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Business"
  },
  {
    id: 19, name: "E-Shram Yojana", nameMr: "ई-श्रम योजना",
    description: "National database and welfare scheme for unorganized sector workers.", descriptionMr: "असंघटित क्षेत्रातील कामगारांसाठी राष्ट्रीय डेटाबेस आणि कल्याण योजना.",
    benefits: "Accidental insurance cover and routing of social security benefits.", benefitsMr: "अपघात विमा संरक्षण आणि सामाजिक सुरक्षा लाभांचा मार्ग.",
    eligibility: "Any worker in the unorganized sector aged 16-59 years.", eligibilityMr: "16 ते 59 वयोगटातील असंघटित क्षेत्रातील कोणताही कामगार.",
    documents:["Aadhaar Card", "Active Mobile Number", "Bank Account"], documentsMr:["आधार कार्ड", "सक्रिय मोबाईल क्रमांक", "बँक खाते"],
    status: "Active", category: "Employment", categoryMr: "रोजगार", link: "https://eshram.gov.in", verified: true,
    minAge: 16, maxAge: 59, targetGender: "All", incomeLimit: 9999999, occupation: "Unemployed"
  },
  {
    id: 20, name: "PM SVANidhi", nameMr: "पीएम स्वनिधी",
    description: "Micro-credit facility scheme for street vendors.", descriptionMr: "फेरीवाल्यांसाठी सूक्ष्म कर्ज सुविधा योजना.",
    benefits: "Collateral-free working capital loan up to ₹50,000 with interest subsidy.", benefitsMr: "व्याज अनुदानासह ₹50,000 पर्यंत तारणमुक्त कार्यकारी भांडवल कर्ज.",
    eligibility: "Urban street vendors.", eligibilityMr: "शहरी फेरीवाले.",
    documents:["Aadhaar Card", "Vendor Certificate/ID Card", "Bank Account"], documentsMr:["आधार कार्ड", "विक्रेता प्रमाणपत्र/ओळखपत्र", "बँक खाते"],
    status: "Active", category: "Employment", categoryMr: "रोजगार", link: "https://pmsvanidhi.mohua.gov.in", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Business"
  },
  {
    id: 21, name: "Mukhyamantri Mahila Udyami Yojana (Bihar)", nameMr: "मुख्यमंत्री महिला उद्योजक योजना (बिहार)",
    description: "Bihar state scheme to promote women entrepreneurship.", descriptionMr: "महिला उद्योजकता आणि स्टार्टअपला प्रोत्साहन देणारी बिहार राज्य योजना.",
    benefits: "Business loan up to ₹10 lakh with 50% subsidy (₹5 lakh grant).", benefitsMr: "₹10 लाखांपर्यंत व्यवसाय कर्ज, त्यावर 50% अनुदान.",
    eligibility: "Women residents of Bihar aged 18-50 with minimum 10+2 education.", eligibilityMr: "बिहारमधील 18 ते 50 वयोगटातील किमान 10+2 शिक्षण असलेल्या महिला.",
    documents:["Educational Proof", "Caste Certificate", "Project Report", "Aadhaar"], documentsMr:["शैक्षणिक पुरावा", "जात प्रमाणपत्र", "प्रकल्प अहवाल", "आधार कार्ड"],
    status: "State-specific", category: "Women", categoryMr: "महिला", link: "https://udyami.bihar.gov.in", verified: true,
    minAge: 18, maxAge: 50, targetGender: "Female", incomeLimit: 9999999, occupation: "Business"
  },
  {
    id: 22, name: "Annapurna Scheme", nameMr: "अन्नपूर्णा योजना",
    description: "Food security scheme for senior citizens not covered under the national pension scheme.", descriptionMr: "राष्ट्रीय पेन्शन योजनेअंतर्गत लाभ न मिळणाऱ्या ज्येष्ठ नागरिकांसाठी अन्न सुरक्षा योजना.",
    benefits: "10 kg of food grains per month provided completely free of cost.", benefitsMr: "दर महिन्याला 10 किलो धान्य मोफत दिले जाते.",
    eligibility: "Senior citizens (65+ years) eligible for National Old Age Pension but not receiving it.", eligibilityMr: "राष्ट्रीय वृद्धापकाळ पेन्शनसाठी पात्र पण लाभ न मिळणारे 65 वर्षांवरील ज्येष्ठ नागरिक.",
    documents:["Age Proof", "BPL/Ration Card", "Income Certificate"], documentsMr:["वयाचा पुरावा", "बीपीएल/रेशन कार्ड", "उत्पन्न प्रमाणपत्र"],
    status: "Active", category: "Social Welfare", categoryMr: "समाज कल्याण", link: "https://nfsa.gov.in", verified: true,
    minAge: 65, maxAge: 120, targetGender: "All", incomeLimit: 50000, occupation: "Unemployed"
  },
  {
    id: 23, name: "Kisan Suvidha", nameMr: "किसान सुविधा",
    description: "Omnibus mobile app and web portal for farmers to access agricultural info.", descriptionMr: "शेतकऱ्यांना कृषी माहिती मिळवण्यासाठी मोबाईल अॅप आणि वेब पोर्टल.",
    benefits: "Real-time access to weather, market prices, plant protection, and advisories.", benefitsMr: "हवामान, बाजारभाव, पीक संरक्षण आणि सल्ला यांची तत्काळ माहिती.",
    eligibility: "All Indian farmers and agricultural stakeholders.", eligibilityMr: "सर्व भारतीय शेतकरी आणि कृषी क्षेत्राशी संबंधित व्यक्ती.",
    documents:["Mobile Number for registration"], documentsMr: ["नोंदणीसाठी मोबाईल क्रमांक"],
    status: "Active", category: "Farmer", categoryMr: "शेतकरी", link: "https://kisansuvidha.gov.in", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Farmer"
  },
  {
    id: 24, name: "National Bamboo Mission", nameMr: "राष्ट्रीय बांबू अभियान",
    description: "Promotes holistic growth of the bamboo sector and increases area under bamboo cultivation.", descriptionMr: "बांबू क्षेत्राचा सर्वांगीण विकास आणि बांबू लागवडीचे क्षेत्र वाढवते.",
    benefits: "Financial assistance for nurseries, plantation, and bamboo processing units.", benefitsMr: "रोपवाटिका, लागवड आणि बांबू प्रक्रिया युनिटसाठी आर्थिक सहाय्य.",
    eligibility: "Farmers, artisans, and entrepreneurs in the bamboo sector.", eligibilityMr: "बांबू क्षेत्रातील शेतकरी, कारागीर आणि उद्योजक.",
    documents:["Land Records", "Project Plan", "Bank Details"], documentsMr:["जमिनीची कागदपत्रे", "प्रकल्प योजना", "बँक तपशील"],
    status: "Active", category: "Farmer", categoryMr: "शेतकरी", link: "https://nbm.nic.in", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Farmer"
  },
  {
    id: 25, name: "Stand-Up India Scheme", nameMr: "स्टँड-अप इंडिया योजना",
    description: "Promotes entrepreneurship among women and SC/ST communities.", descriptionMr: "महिला आणि अनुसूचित जाती/जमाती समुदायांमध्ये उद्योजकतेला प्रोत्साहन देते.",
    benefits: "Bank loans between ₹10 lakh and ₹1 Crore for setting up greenfield enterprises.", benefitsMr: "नवीन उद्योग सुरू करण्यासाठी ₹10 लाख ते ₹1 कोटीपर्यंत बँक कर्ज.",
    eligibility: "SC/ST and/or women entrepreneurs above 18 years of age.", eligibilityMr: "18 वर्षांवरील एससी/एसटी आणि/किंवा महिला उद्योजक.",
    documents:["Identity Proof", "Caste Certificate", "Business Plan"], documentsMr: ["ओळखपत्र", "जात प्रमाणपत्र", "व्यवसाय योजना"],
    status: "Active", category: "Employment", categoryMr: "व्यवसाय", link: "https://www.standupmitra.in", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Business"
  },
  {
    id: 26, name: "UPSC Online Portal", nameMr: "यूपीएससी ऑनलाईन पोर्टल",
    description: "Official portal for interaction between UPSC and job aspirants.", descriptionMr: "UPSC आणि नोकरी इच्छुक उमेदवारांमधील संवादासाठी अधिकृत पोर्टल.",
    benefits: "Streamlines recruitment processes, exam applications, and admit card downloads.", benefitsMr: "भरती प्रक्रिया, परीक्षेचे अर्ज आणि प्रवेशपत्र डाउनलोड सुलभ करते.",
    eligibility: "Indian citizens applying for Union Public Service Commission exams.", eligibilityMr: "यूपीएससी परीक्षांसाठी अर्ज करणारे भारतीय नागरिक.",
    documents:["Educational Certificates", "ID Proof", "Photographs"], documentsMr:["शैक्षणिक प्रमाणपत्रे", "ओळखपत्र", "छायाचित्रे"],
    status: "Active", category: "Education", categoryMr: "शिक्षण", link: "https://upsconline.nic.in", verified: true,
    minAge: 21, maxAge: 32, targetGender: "All", incomeLimit: 9999999, occupation: "Student"
  },
  {
    id: 27, name: "Jal Jeevan Mission", nameMr: "जल जीवन मिशन",
    description: "Mission to provide safe drinking water through individual household tap connections.", descriptionMr: "प्रत्येक घरात नळ जोडणीद्वारे सुरक्षित आणि पुरेसे पिण्याचे पाणी देण्याचे अभियान.",
    benefits: "Clean drinking water access at home for better health and sanitation.", benefitsMr: "चांगले आरोग्य आणि स्वच्छतेसाठी घरपोच स्वच्छ पिण्याचे पाणी.",
    eligibility: "Rural households across India without existing functional tap connections.", eligibilityMr: "ज्या ग्रामीण घरांमध्ये कार्यरत नळ जोडणी नाही अशी घरे.",
    documents: ["Residence Details", "Aadhaar Card"], documentsMr: ["निवास माहिती", "आधार कार्ड"],
    status: "Active", category: "Housing", categoryMr: "पायाभूत सुविधा", link: "https://jaljeevanmission.gov.in", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Any"
  },
  {
    id: 28, name: "PM Surya Ghar Muft Bijli Yojana", nameMr: "पीएम सूर्य घर मोफत वीज योजना",
    description: "Rooftop solar scheme providing up to 300 units of free electricity every month.", descriptionMr: "दर महिन्याला 300 युनिटपर्यंत मोफत वीज देणारी रूफटॉप सौर योजना.",
    benefits: "Heavy subsidies for solar panels and massive reduction in electricity bills.", benefitsMr: "सौर पॅनलसाठी मोठे अनुदान आणि वीज बिलात मोठी बचत.",
    eligibility: "Residential households with a suitable roof and valid electricity connection.", eligibilityMr: "योग्य छप्पर आणि वैध वीज जोडणी असलेली निवासी घरे.",
    documents:["Aadhaar Card", "Electricity Bill", "Bank Account Passbook"], documentsMr:["आधार कार्ड", "वीज बिल", "बँक पासबुक"],
    status: "Active", category: "Housing", categoryMr: "घरकुल", link: "https://pmsuryaghar.gov.in", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Any"
  },
  {
    id: 29, name: "PM-AASHA", nameMr: "पीएम-आशा",
    description: "Ensures remunerative prices to farmers for their produce.", descriptionMr: "शेतकऱ्यांना त्यांच्या उत्पन्नासाठी योग्य मोबदला मिळावा यासाठी योजना.",
    benefits: "Price support and procurement mechanisms for pulses, oilseeds, and copra.", benefitsMr: "डाळी, तेलबिया आणि खोबरे यांसाठी किंमत समर्थन आणि खरेदी व्यवस्था.",
    eligibility: "Farmers producing notified crops in participating states.", eligibilityMr: "सहभागी राज्यांमध्ये अधिसूचित पिके घेणारे शेतकरी.",
    documents:["Aadhaar Card", "Bank Account", "Land Registration Details"], documentsMr:["आधार कार्ड", "बँक खाते", "जमीन नोंदणी तपशील"],
    status: "Active", category: "Farmer", categoryMr: "शेतकरी", link: "https://agricoop.gov.in", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Farmer"
  },
  {
    id: 30, name: "Ayushman Bharat PM-JAY", nameMr: "आयुष्मान भारत पीएम-जय",
    description: "World's largest health insurance scheme fully financed by the government.", descriptionMr: "शासन वित्तपुरवठा करणारी जगातील सर्वात मोठी आरोग्य विमा योजना.",
    benefits: "Health cover of ₹5 lakhs per family per year.", benefitsMr: "कुटुंबाला दरवर्षी ₹5 लाखांपर्यंत आरोग्य संरक्षण.",
    eligibility: "Vulnerable families identified by the SECC database.", eligibilityMr: "SECC डेटाबेसद्वारे ओळखलेली वंचित कुटुंबे.",
    documents:["Aadhaar Card", "Ration Card", "PM-JAY e-Card"], documentsMr:["आधार कार्ड", "रेशन कार्ड", "पीएम-जय ई-कार्ड"],
    status: "Active", category: "Health", categoryMr: "आरोग्य", link: "https://pmjay.gov.in", verified: true,
    minAge: 0, maxAge: 120, targetGender: "All", incomeLimit: 200000, occupation: "Any"
  },
  {
    id: 31, name: "PM-KISAN", nameMr: "पीएम-किसान",
    description: "Direct income support scheme for landholding farmer families.", descriptionMr: "जमीनधारक शेतकरी कुटुंबांसाठी थेट उत्पन्न सहाय्य योजना.",
    benefits: "₹6000 per year directly credited to bank accounts in three equal installments.", benefitsMr: "वर्षाला ₹6000 थेट बँक खात्यात तीन हप्त्यांत जमा.",
    eligibility: "Landholding farmer families with clear title.", eligibilityMr: "स्पष्ट मालकी हक्क असलेली जमीनधारक शेतकरी कुटुंबे.",
    documents: ["Aadhaar Card", "Bank Account", "Land Records"], documentsMr:["आधार कार्ड", "बँक खाते", "जमीन कागदपत्रे"],
    status: "Active", category: "Farmer", categoryMr: "शेतकरी", link: "https://pmkisan.gov.in", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Farmer"
  },
  {
    id: 32, name: "Project Mausam", nameMr: "प्रोजेक्ट मौसम",
    description: "Cultural initiative to connect countries of the Indian Ocean world.", descriptionMr: "हिंद महासागर परिसरातील देशांना जोडणारा सांस्कृतिक उपक्रम.",
    benefits: "Research collaboration, archaeological studies, and maritime heritage preservation.", benefitsMr: "संशोधन सहकार्य, पुरातत्त्व अभ्यास आणि सागरी वारसा जतनास मदत.",
    eligibility: "Academic institutions, researchers, and cultural bodies.", eligibilityMr: "शैक्षणिक संस्था, संशोधक आणि सांस्कृतिक संस्था.",
    documents:["Institutional Credentials", "Research Proposals"], documentsMr:["संस्थात्मक कागदपत्रे", "संशोधन प्रस्ताव"],
    status: "Active", category: "Education", categoryMr: "शिक्षण", link: "https://indiaculture.gov.in", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Student"
  },
  {
    id: 33, name: "UNNATI Scheme", nameMr: "उन्नती योजना",
    description: "Incentive scheme for sustainable industrial development in the North East Region.", descriptionMr: "ईशान्य भारतातील शाश्वत औद्योगिक विकासासाठी प्रोत्साहन योजना.",
    benefits: "Capital investment incentive, interest subvention, and manufacturing subsidies.", benefitsMr: "भांडवली गुंतवणूक प्रोत्साहन, व्याज अनुदान आणि उत्पादन अनुदान.",
    eligibility: "New and expanding industrial units in North Eastern states.", eligibilityMr: "ईशान्य राज्यांतील नवीन आणि विस्तार करणाऱ्या औद्योगिक युनिट्स.",
    documents:["Business Registration", "Detailed Project Report"], documentsMr:["व्यवसाय नोंदणी", "सविस्तर प्रकल्प अहवाल"],
    status: "Active", category: "Employment", categoryMr: "व्यवसाय", link: "https://dpiit.gov.in", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Business"
  },

  // --- NEW MAHARASHTRA & CENTRAL SCHEMES (34 to 68) ---
  {
    id: 34, name: "Mahatma Jyotirao Phule Jan Arogya Yojana (MJPJAY)", nameMr: "महात्मा ज्योतिराव फुले जन आरोग्य योजना",
    description: "Flagship health insurance scheme of Maharashtra providing free medical care.", descriptionMr: "महाराष्ट्राची प्रमुख आरोग्य विमा योजना जी मोफत वैद्यकीय उपचार देते.",
    benefits: "Cashless medical treatment up to ₹1.5 Lakhs (up to ₹5 Lakhs for specific diseases).", benefitsMr: "₹१.५ लाखांपर्यंत कॅशलेस उपचार (काही आजारांसाठी ₹५ लाखांपर्यंत).",
    eligibility: "Holders of Yellow, Orange, or Antyodaya ration cards in Maharashtra.", eligibilityMr: "पिवळे, केशरी किंवा अंत्योदय रेशन कार्डधारक.",
    documents:["Ration Card", "Aadhaar Card", "Voter ID"], documentsMr: ["रेशन कार्ड", "आधार कार्ड", "मतदान ओळखपत्र"],
    status: "Active", category: "Health", categoryMr: "आरोग्य", link: "https://www.jeevandayee.gov.in/", verified: true,
    minAge: 0, maxAge: 120, targetGender: "All", incomeLimit: 100000, occupation: "Any"
  },
  {
    id: 35, name: "Majhi Kanya Bhagyashree Scheme", nameMr: "माझी कन्या भाग्यश्री योजना",
    description: "Maharashtra govt scheme to improve the sex ratio and promote girls' education.", descriptionMr: "मुलींचे शिक्षण आणि जन्मदर वाढवण्यासाठी महाराष्ट्र सरकारची योजना.",
    benefits: "Financial aid of ₹50,000 deposited in the bank after family planning on birth of a girl child.", benefitsMr: "मुलगी झाल्यावर कुटुंब नियोजन केल्यास ₹५०,००० ची आर्थिक मदत.",
    eligibility: "Maharashtra residents. Family income up to ₹7.5 Lakh.", eligibilityMr: "महाराष्ट्राचे रहिवासी. उत्पन्न ₹७.५ लाखांपर्यंत.",
    documents: ["Birth Certificate", "Income Certificate", "Domicile"], documentsMr:["जन्म प्रमाणपत्र", "उत्पन्न प्रमाणपत्र", "रहिवासी दाखला"],
    status: "Active", category: "Women", categoryMr: "महिला", link: "https://womenchild.maharashtra.gov.in/", verified: true,
    minAge: 0, maxAge: 18, targetGender: "Female", incomeLimit: 750000, occupation: "Any"
  },
  {
    id: 36, name: "Chief Minister Employment Generation Programme (CMEGP)", nameMr: "मुख्यमंत्री रोजगार निर्मिती कार्यक्रम (CMEGP)",
    description: "Promotes entrepreneurship among youth by providing financial assistance for micro-enterprises.", descriptionMr: "तरुणांमध्ये उद्योजकतेला प्रोत्साहन देण्यासाठी सूक्ष्म उद्योगांना आर्थिक मदत.",
    benefits: "Bank loans up to ₹50 Lakhs for manufacturing and ₹10 Lakhs for service sector with 15-35% subsidy.", benefitsMr: "उत्पादनासाठी ₹५० लाख आणि सेवा क्षेत्रासाठी ₹१० लाखांपर्यंत कर्ज, १५-३५% अनुदानासह.",
    eligibility: "Age 18-45 years. 7th pass minimum.", eligibilityMr: "वय १८-४५ वर्षे. किमान ७ वी पास.",
    documents:["Aadhaar", "Education Certificate", "Project Report", "Caste Certificate"], documentsMr:["आधार कार्ड", "शैक्षणिक प्रमाणपत्र", "प्रकल्प अहवाल", "जात प्रमाणपत्र"],
    status: "Active", category: "Employment", categoryMr: "व्यवसाय", link: "https://maha-cmegp.gov.in/", verified: true,
    minAge: 18, maxAge: 45, targetGender: "All", incomeLimit: 9999999, occupation: "Business"
  },
  {
    id: 37, name: "Nanaji Deshmukh Krishi Sanjivani Yojana (PoCRA)", nameMr: "नानाजी देशमुख कृषी संजीवनी योजना",
    description: "To promote climate-resilient agriculture in drought-prone villages of Maharashtra.", descriptionMr: "महाराष्ट्रातील दुष्काळग्रस्त गावांमध्ये हवामान-अनुकूल शेतीला प्रोत्साहन देणे.",
    benefits: "Subsidies for micro-irrigation, seed production, farm ponds, and horticulture.", benefitsMr: "ठिबक सिंचन, शेततळे, आणि फळबाग लागवडीसाठी अनुदान.",
    eligibility: "Small and marginal farmers from selected drought-prone villages.", eligibilityMr: "निवडलेल्या गावांमधील अल्प व अत्यल्प भूधारक शेतकरी.",
    documents:["7/12 Extract", "8A Extract", "Aadhaar Card linked to Bank"], documentsMr:["७/१२ उतारा", "८अ उतारा", "बँक संलग्न आधार कार्ड"],
    status: "Active", category: "Farmer", categoryMr: "शेतकरी", link: "https://dbt.mahapocra.gov.in/", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Farmer"
  },
  {
    id: 38, name: "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti", nameMr: "राजर्षी छत्रपती शाहू महाराज शिक्षण शुल्क शिष्यवृत्ती",
    description: "Reimbursement of tuition fees for economically weaker section students pursuing professional courses.", descriptionMr: "व्यावसायिक अभ्यासक्रम शिकणाऱ्या आर्थिकदृष्ट्या दुर्बल विद्यार्थ्यांच्या शिक्षण शुल्काची प्रतिपूर्ती.",
    benefits: "50% reimbursement of tuition fees and exam fees.", benefitsMr: "शिक्षण आणि परीक्षा शुल्कात ५०% सवलत.",
    eligibility: "Admitted through CAP round. Family income less than ₹8 Lakhs.", eligibilityMr: "कॅप राऊंडद्वारे प्रवेश. कौटुंबिक उत्पन्न ₹८ लाखांपेक्षा कमी.",
    documents:["Income Certificate", "CAP Allotment Letter", "Domicile"], documentsMr:["उत्पन्न प्रमाणपत्र", "कॅप प्रवेश पत्र", "रहिवासी दाखला"],
    status: "Active", category: "Education", categoryMr: "शिक्षण", link: "https://mahadbtmahait.gov.in/", verified: true,
    minAge: 16, maxAge: 30, targetGender: "All", incomeLimit: 800000, occupation: "Student"
  },
  {
    id: 39, name: "Gopinath Munde Shetkari Apghat Vima Yojana", nameMr: "गोपीनाथ मुंडे शेतकरी अपघात विमा योजना",
    description: "Accident insurance scheme for farmers in Maharashtra.", descriptionMr: "महाराष्ट्रातील शेतकऱ्यांसाठी अपघात विमा योजना.",
    benefits: "Compensation of ₹2 Lakhs in case of accidental death or permanent disability.", benefitsMr: "अपघाती मृत्यू किंवा कायमचे अपंगत्व आल्यास ₹२ लाखांची भरपाई.",
    eligibility: "All registered farmers in Maharashtra aged between 10 to 75 years.", eligibilityMr: "महाराष्ट्रातील १० ते ७५ वयोगटातील सर्व नोंदणीकृत शेतकरी.",
    documents:["7/12 Extract", "Death/Disability Certificate", "FIR Report"], documentsMr:["७/१२ उतारा", "मृत्यू/अपंगत्व प्रमाणपत्र", "एफआयआर अहवाल"],
    status: "Active", category: "Farmer", categoryMr: "शेतकरी", link: "https://krishi.maharashtra.gov.in/", verified: true,
    minAge: 10, maxAge: 75, targetGender: "All", incomeLimit: 9999999, occupation: "Farmer"
  },
  {
    id: 40, name: "Magel Tyala Shet Tale", nameMr: "मागेल त्याला शेततळे",
    description: "Water conservation scheme providing farm ponds on demand to farmers.", descriptionMr: "शेतकऱ्यांना मागणीनुसार शेततळे उपलब्ध करून देणारी जलसंधारण योजना.",
    benefits: "Subsidy up to ₹50,000 for constructing a farm pond.", benefitsMr: "शेततळे उभारणीसाठी ₹५०,००० पर्यंत अनुदान.",
    eligibility: "Minimum 0.60 hectare land ownership.", eligibilityMr: "किमान ०.६० हेक्टर जमीन असणे आवश्यक.",
    documents:["7/12 Extract", "Aadhaar Card", "Bank Passbook"], documentsMr:["७/१२ उतारा", "आधार कार्ड", "बँक पासबुक"],
    status: "Active", category: "Farmer", categoryMr: "शेतकरी", link: "https://egs.mahaonline.gov.in/", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Farmer"
  },
  {
    id: 41, name: "Ramai Awas Yojana", nameMr: "रमाई आवास योजना",
    description: "Housing scheme for Scheduled Castes (SC) and Nav-Bouddha communities.", descriptionMr: "अनुसूचित जाती (SC) आणि नव-बौद्ध समुदायांसाठी घरकुल योजना.",
    benefits: "Financial aid of ₹1.20 Lakh to ₹2.50 Lakh to build houses.", benefitsMr: "घर बांधण्यासाठी ₹१.२० लाख ते ₹२.५० लाख मदत.",
    eligibility: "Must belong to SC/Nav-Bouddha category, living in kutcha house.", eligibilityMr: "SC/नव-बौद्ध प्रवर्गातील असावे, कच्च्या घरात राहणारे असावेत.",
    documents: ["Caste Certificate", "Gram Panchayat NOC", "Aadhaar Card"], documentsMr:["जात प्रमाणपत्र", "ग्रामपंचायत ना हरकत प्रमाणपत्र", "आधार कार्ड"],
    status: "Active", category: "Housing", categoryMr: "घरकुल", link: "https://sjsa.maharashtra.gov.in/", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 300000, occupation: "Any"
  },
  {
    id: 42, name: "Asmita Yojana", nameMr: "अस्मिता योजना",
    description: "Provides subsidized sanitary napkins to rural women and school girls.", descriptionMr: "ग्रामीण महिला आणि शालेय मुलींना सवलतीच्या दरात सॅनिटरी नॅपकिन्स पुरवते.",
    benefits: "Sanitary pads at ₹5 for school girls and subsidized rates for rural women.", benefitsMr: "शालेय मुलींसाठी ₹५ मध्ये आणि महिलांसाठी सवलतीच्या दरात पॅड्स.",
    eligibility: "Zilla Parishad school girls (Age 11-19) and rural women.", eligibilityMr: "जिल्हा परिषद शाळेतील मुली (वय ११-१९) आणि ग्रामीण महिला.",
    documents:["School ID / Aadhaar"], documentsMr: ["शाळेचे ओळखपत्र / आधार कार्ड"],
    status: "Active", category: "Women", categoryMr: "महिला", link: "https://mahaasmita.mahaonline.gov.in/", verified: true,
    minAge: 11, maxAge: 50, targetGender: "Female", incomeLimit: 9999999, occupation: "Any"
  },
  {
    id: 43, name: "Shravanbal Seva Rajya Nivruttivetan Yojana", nameMr: "श्रावणबाळ सेवा राज्य निवृत्तीवेतन योजना",
    description: "State pension scheme for elderly people from low-income families.", descriptionMr: "अल्प उत्पन्न असलेल्या कुटुंबातील वृद्ध व्यक्तींसाठी राज्य निवृत्तीवेतन योजना.",
    benefits: "Monthly financial assistance of ₹1000.", benefitsMr: "दरमहा ₹१००० ची आर्थिक मदत.",
    eligibility: "Age 65 and above. Annual income up to ₹21,000.", eligibilityMr: "वय ६५ वर्षे किंवा त्याहून अधिक. वार्षिक उत्पन्न ₹२१,००० पर्यंत.",
    documents: ["Age Proof", "Income Certificate", "Residence Proof"], documentsMr:["वयाचा पुरावा", "उत्पन्न प्रमाणपत्र", "रहिवासी पुरावा"],
    status: "Active", category: "Social Welfare", categoryMr: "समाज कल्याण", link: "https://sjsa.maharashtra.gov.in/", verified: true,
    minAge: 65, maxAge: 120, targetGender: "All", incomeLimit: 21000, occupation: "Senior Citizen"
  },
  {
    id: 44, name: "Bhausaheb Fundkar Phalbag Lagwad Yojana", nameMr: "भाऊसाहेब फुंडकर फळबाग लागवड योजना",
    description: "Promotes horticulture and fruit farming in Maharashtra.", descriptionMr: "महाराष्ट्रात फळबाग लागवडीला प्रोत्साहन देणे.",
    benefits: "100% subsidy for planting fruit trees.", benefitsMr: "फळझाडे लावण्यासाठी १००% अनुदान.",
    eligibility: "Farmers with land between 0.20 Ha to 6 Ha.", eligibilityMr: "०.२० हेक्टर ते ६ हेक्टर जमीन असलेले शेतकरी.",
    documents: ["7/12 Extract", "8A Extract", "Aadhaar linked to Bank"], documentsMr:["७/१२ उतारा", "८अ उतारा", "बँक संलग्न आधार कार्ड"],
    status: "Active", category: "Farmer", categoryMr: "शेतकरी", link: "https://mahadbtmahait.gov.in/", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Farmer"
  },
  {
    id: 45, name: "Dr. Babasaheb Ambedkar Krishi Swavalamban Yojana", nameMr: "डॉ. बाबासाहेब आंबेडकर कृषी स्वावलंबन योजना",
    description: "Supports SC/Nav-Bouddha farmers to create sustainable irrigation facilities.", descriptionMr: "SC/नव-बौद्ध शेतकऱ्यांना शाश्वत सिंचन सुविधा निर्माण करण्यासाठी मदत.",
    benefits: "Financial assistance for new wells, pump sets, and drip irrigation.", benefitsMr: "नवीन विहीर, पंप संच आणि ठिबक सिंचनासाठी आर्थिक मदत.",
    eligibility: "SC/Nav-Bouddha farmers with annual income up to ₹1.5 Lakhs.", eligibilityMr: "वार्षिक उत्पन्न ₹१.५ लाखांपर्यंत असलेले SC/नव-बौद्ध शेतकरी.",
    documents:["Caste Certificate", "Income Certificate", "7/12 Extract"], documentsMr:["जात प्रमाणपत्र", "उत्पन्न प्रमाणपत्र", "७/१२ उतारा"],
    status: "Active", category: "Farmer", categoryMr: "शेतकरी", link: "https://mahadbtmahait.gov.in/", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 150000, occupation: "Farmer"
  },
  {
    id: 46, name: "Pramod Mahajan Kaushalya Vikas Yojana", nameMr: "प्रमोद महाजन कौशल्य विकास योजना",
    description: "Skill development scheme for unemployed youth in Maharashtra.", descriptionMr: "महाराष्ट्रातील बेरोजगार तरुणांसाठी कौशल्य विकास योजना.",
    benefits: "Free skill training and job placement assistance.", benefitsMr: "मोफत कौशल्य प्रशिक्षण आणि नोकरी मिळविण्यासाठी मदत.",
    eligibility: "Unemployed youth aged 15-45 years.", eligibilityMr: "१५-४५ वयोगटातील बेरोजगार तरुण.",
    documents:["Aadhaar", "Educational Proof", "Passport Photo"], documentsMr: ["आधार कार्ड", "शैक्षणिक पुरावा", "पासपोर्ट फोटो"],
    status: "Active", category: "Education", categoryMr: "शिक्षण", link: "https://kaushalya.mahaswayam.gov.in/", verified: true,
    minAge: 15, maxAge: 45, targetGender: "All", incomeLimit: 9999999, occupation: "Unemployed"
  },
  {
    id: 47, name: "Nav Tejaswini Yojana", nameMr: "नव तेजस्विनी योजना",
    description: "Empowerment scheme for rural women through self-help groups (SHGs).", descriptionMr: "स्वयं-सहाय्य गटांच्या (SHGs) माध्यमातून ग्रामीण महिलांचे सक्षमीकरण.",
    benefits: "Low-interest loans and skill development for rural enterprises.", benefitsMr: "कमी व्याजाचे कर्ज आणि ग्रामीण उद्योगांसाठी कौशल्य विकास.",
    eligibility: "Women belonging to rural SHGs in Maharashtra.", eligibilityMr: "महाराष्ट्रातील ग्रामीण SHG मधील महिला.",
    documents:["SHG Membership Proof", "Aadhaar Card", "Bank Passbook"], documentsMr: ["बचत गटाचे प्रमाणपत्र", "आधार कार्ड", "बँक पासबुक"],
    status: "Active", category: "Women", categoryMr: "महिला", link: "https://mavimindia.org/", verified: true,
    minAge: 18, maxAge: 60, targetGender: "Female", incomeLimit: 9999999, occupation: "Any"
  },
  {
    id: 48, name: "Bal Sangopan Yojana", nameMr: "बाल संगोपन योजना",
    description: "Financial support to foster parents for the care of orphaned/vulnerable children.", descriptionMr: "अनाथ/असुरक्षित मुलांच्या काळजीसाठी पालकत्व स्वीकारणाऱ्या कुटुंबांना आर्थिक मदत.",
    benefits: "₹1125 per month per child for up to 18 years.", benefitsMr: "१८ वर्षांपर्यंत प्रत्येक मुलासाठी दरमहा ₹११२५.",
    eligibility: "Orphaned children, children of single parents in crisis.", eligibilityMr: "अनाथ मुले, संकटात असलेल्या एकट्या पालकांची मुले.",
    documents: ["Child's Birth Certificate", "Income Certificate of Guardian"], documentsMr:["मुलाचे जन्म प्रमाणपत्र", "पालकांचे उत्पन्न प्रमाणपत्र"],
    status: "Active", category: "Social Welfare", categoryMr: "समाज कल्याण", link: "https://womenchild.maharashtra.gov.in/", verified: true,
    minAge: 0, maxAge: 18, targetGender: "All", incomeLimit: 100000, occupation: "Any"
  },
  {
    id: 49, name: "Annasaheb Patil Loan Interest Subsidy Scheme", nameMr: "अण्णासाहेब पाटील कर्ज व्याज परतावा योजना",
    description: "Interest subsidy for Maratha youth to start businesses.", descriptionMr: "मराठा तरुणांना व्यवसाय सुरू करण्यासाठी कर्ज व्याज परतावा.",
    benefits: "Full interest refund on business loans up to ₹10 Lakhs.", benefitsMr: "₹१० लाखांपर्यंतच्या व्यवसाय कर्जावरील संपूर्ण व्याज परतावा.",
    eligibility: "Economically weaker Maratha youth. Age limit for men 45, women 50.", eligibilityMr: "आर्थिकदृष्ट्या दुर्बल मराठा तरुण. पुरुषांसाठी ४५ तर महिलांसाठी ५० वर्षे वयोमर्यादा.",
    documents: ["Income Certificate", "Caste Certificate", "Project Report"], documentsMr:["उत्पन्न प्रमाणपत्र", "जात प्रमाणपत्र", "प्रकल्प अहवाल"],
    status: "Active", category: "Employment", categoryMr: "व्यवसाय", link: "https://mahaswayam.gov.in/", verified: true,
    minAge: 18, maxAge: 50, targetGender: "All", incomeLimit: 800000, occupation: "Business"
  },
  {
    id: 50, name: "Dr. Punjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna", nameMr: "डॉ. पंजाबराव देशमुख वसतिगृह निर्वाह भत्ता योजना",
    description: "Maintenance allowance for students staying in hostels for professional courses.", descriptionMr: "व्यावसायिक अभ्यासक्रमासाठी वसतिगृहात राहणाऱ्या विद्यार्थ्यांसाठी निर्वाह भत्ता.",
    benefits: "₹20,000 to ₹30,000 per year for hostel expenses.", benefitsMr: "वसतिगृहाच्या खर्चासाठी प्रतिवर्ष ₹२०,००० ते ₹३०,०००.",
    eligibility: "Children of registered laborers or Alpabudharak farmers. Income below ₹8 Lakhs.", eligibilityMr: "नोंदणीकृत मजूर किंवा अल्पभूधारक शेतकऱ्यांची मुले. उत्पन्न ₹८ लाखांपेक्षा कमी.",
    documents:["Hostel Certificate", "Income Certificate", "Registered Laborer Certificate"], documentsMr:["वसतिगृह प्रमाणपत्र", "उत्पन्न प्रमाणपत्र", "मजूर प्रमाणपत्र"],
    status: "Active", category: "Education", categoryMr: "शिक्षण", link: "https://mahadbtmahait.gov.in/", verified: true,
    minAge: 16, maxAge: 25, targetGender: "All", incomeLimit: 800000, occupation: "Student"
  },
  {
    id: 51, name: "Savitribai Phule Scholarship for VJNT/SBC/SC Girls", nameMr: "सावित्रीबाई फुले शिष्यवृत्ती (VJNT/SBC/SC मुलींसाठी)",
    description: "Encourages girls from backward classes to pursue education.", descriptionMr: "मागासवर्गीय मुलींना शिक्षण घेण्यासाठी प्रोत्साहन देणे.",
    benefits: "Monthly scholarship of ₹100 for 10 months (Class 5 to 10).", benefitsMr: "१० महिन्यांसाठी दरमहा ₹१०० शिष्यवृत्ती (इयत्ता ५ ते १०).",
    eligibility: "Girls studying in Class 5 to 10 belonging to SC/VJNT/SBC.", eligibilityMr: "SC/VJNT/SBC प्रवर्गातील ५ वी ते १० वी मध्ये शिकणाऱ्या मुली.",
    documents:["School Bonafide", "Caste Certificate"], documentsMr:["शाळेचे बोनाफाईड", "जात प्रमाणपत्र"],
    status: "Active", category: "Education", categoryMr: "शिक्षण", link: "https://sjsa.maharashtra.gov.in/", verified: true,
    minAge: 10, maxAge: 16, targetGender: "Female", incomeLimit: 9999999, occupation: "Student"
  },
  {
    id: 52, name: "Post Matric Scholarship to OBC Students", nameMr: "ओबीसी विद्यार्थ्यांसाठी मॅट्रिकोत्तर शिष्यवृत्ती",
    description: "Financial assistance to OBC students studying post-matriculation courses.", descriptionMr: "मॅट्रिकोत्तर अभ्यासक्रम शिकणाऱ्या ओबीसी विद्यार्थ्यांना आर्थिक मदत.",
    benefits: "Maintenance allowance and tuition fee reimbursement.", benefitsMr: "निर्वाह भत्ता आणि शिक्षण शुल्काची प्रतिपूर्ती.",
    eligibility: "OBC students with family income less than ₹1.5 Lakhs.", eligibilityMr: "कौटुंबिक उत्पन्न ₹१.५ लाखांपेक्षा कमी असलेले ओबीसी विद्यार्थी.",
    documents:["Caste Certificate", "Income Certificate", "Previous Marksheet"], documentsMr: ["जात प्रमाणपत्र", "उत्पन्न प्रमाणपत्र", "मागील गुणपत्रिका"],
    status: "Active", category: "Education", categoryMr: "शिक्षण", link: "https://mahadbtmahait.gov.in/", verified: true,
    minAge: 15, maxAge: 30, targetGender: "All", incomeLimit: 150000, occupation: "Student"
  },
  {
    id: 53, name: "Pradhan Mantri Awas Yojana (Urban & Rural)", nameMr: "प्रधानमंत्री आवास योजना (शहरी आणि ग्रामीण)",
    description: "Housing for All mission providing affordable houses.", descriptionMr: "सर्वांसाठी घरे मिशन अंतर्गत परवडणारी घरे पुरवणे.",
    benefits: "Interest subsidy up to ₹2.67 Lakh on home loans or direct construction aid.", benefitsMr: "गृहकर्जावर ₹२.६७ लाखांपर्यंत व्याज अनुदान किंवा थेट बांधकाम मदत.",
    eligibility: "First-time home buyers belonging to EWS, LIG, or MIG categories.", eligibilityMr: "EWS, LIG किंवा MIG प्रवर्गातील प्रथमच घर घेणारे नागरिक.",
    documents:["Aadhaar", "Income Proof", "Property Documents"], documentsMr:["आधार कार्ड", "उत्पन्नाचा पुरावा", "मालमत्तेची कागदपत्रे"],
    status: "Active", category: "Housing", categoryMr: "घरकुल", link: "https://pmaymis.gov.in/", verified: true,
    minAge: 18, maxAge: 70, targetGender: "All", incomeLimit: 1800000, occupation: "Any"
  },
  {
    id: 54, name: "Pradhan Mantri Ujjwala Yojana", nameMr: "प्रधानमंत्री उज्ज्वला योजना",
    description: "Provides free LPG gas connections to women of BPL families.", descriptionMr: "दारिद्र्यरेषेखालील कुटुंबातील महिलांना मोफत LPG गॅस जोडणी देते.",
    benefits: "Free LPG connection and subsidy on refills.", benefitsMr: "मोफत गॅस कनेक्शन आणि रिफिलवर सबसिडी.",
    eligibility: "Adult woman belonging to an eligible poor household.", eligibilityMr: "पात्र गरीब कुटुंबातील प्रौढ महिला.",
    documents:["BPL Ration Card", "Aadhaar Card", "Bank Account"], documentsMr: ["बीपीएल रेशन कार्ड", "आधार कार्ड", "बँक खाते"],
    status: "Active", category: "Women", categoryMr: "महिला", link: "https://www.pmuy.gov.in/", verified: true,
    minAge: 18, maxAge: 100, targetGender: "Female", incomeLimit: 100000, occupation: "Any"
  },
  {
    id: 55, name: "Mudra Yojana (PMMY)", nameMr: "मुद्रा योजना (PMMY)",
    description: "Micro-finance scheme for small business owners and startups.", descriptionMr: "लघु व्यावसायिक आणि स्टार्टअप्ससाठी सूक्ष्म कर्ज योजना.",
    benefits: "Loans up to ₹10 Lakhs without collateral.", benefitsMr: "तारणाशिवाय ₹१० लाखांपर्यंत कर्ज.",
    eligibility: "Any individual running a non-farm small enterprise.", eligibilityMr: "शेतीव्यतिरिक्त लघु उद्योग चालवणारी कोणतीही व्यक्ती.",
    documents:["Aadhaar", "Business Plan", "Bank Statement"], documentsMr:["आधार कार्ड", "व्यवसाय योजना", "बँक स्टेटमेंट"],
    status: "Active", category: "Employment", categoryMr: "व्यवसाय", link: "https://www.mudra.org.in/", verified: true,
    minAge: 18, maxAge: 65, targetGender: "All", incomeLimit: 9999999, occupation: "Business"
  },
  {
    id: 56, name: "Swadhar Yojana", nameMr: "स्वाधार योजना",
    description: "Provides boarding/lodging allowance to SC students who cannot get hostel admission.", descriptionMr: "वसतिगृहात प्रवेश न मिळालेल्या SC विद्यार्थ्यांना निवास आणि भोजन भत्ता.",
    benefits: "Up to ₹51,000 per year for living expenses.", benefitsMr: "राहण्याच्या खर्चासाठी प्रतिवर्ष ₹५१,००० पर्यंत मदत.",
    eligibility: "SC students enrolled in post-matric courses. Income below ₹2.5 Lakhs.", eligibilityMr: "मॅट्रिकोत्तर अभ्यासक्रमात शिकणारे SC विद्यार्थी. उत्पन्न ₹२.५ लाखांपेक्षा कमी.",
    documents:["Caste Certificate", "Income Certificate", "Rent Agreement"], documentsMr:["जात प्रमाणपत्र", "उत्पन्न प्रमाणपत्र", "भाडे करार"],
    status: "Active", category: "Education", categoryMr: "शिक्षण", link: "https://sjsa.maharashtra.gov.in/", verified: true,
    minAge: 16, maxAge: 30, targetGender: "All", incomeLimit: 250000, occupation: "Student"
  },
  {
    id: 57, name: "Sukanya Samriddhi Yojana", nameMr: "सुकन्या समृद्धी योजना",
    description: "High-interest savings scheme for the girl child under 'Beti Bachao Beti Padhao'.", descriptionMr: "'बेटी बचाओ बेटी पढाओ' अंतर्गत मुलींसाठी उच्च व्याज देणारी बचत योजना.",
    benefits: "High interest rate (approx 8%) and tax benefits under Section 80C.", benefitsMr: "उच्च व्याजदर (सुमारे ८%) आणि प्राप्तिकर कलम ८० सी अंतर्गत सवलत.",
    eligibility: "Parents of a girl child below 10 years of age.", eligibilityMr: "१० वर्षांपेक्षा कमी वयाच्या मुलींचे पालक.",
    documents:["Child Birth Certificate", "Parent's Aadhaar", "PAN Card"], documentsMr:["मुलीचे जन्म प्रमाणपत्र", "पालकांचे आधार कार्ड", "पॅन कार्ड"],
    status: "Active", category: "Women", categoryMr: "महिला", link: "https://www.indiapost.gov.in/", verified: true,
    minAge: 0, maxAge: 10, targetGender: "Female", incomeLimit: 9999999, occupation: "Any"
  },
  {
    id: 58, name: "Janani Suraksha Yojana (JSY)", nameMr: "जननी सुरक्षा योजना (JSY)",
    description: "Promotes institutional delivery among poor pregnant women to reduce maternal mortality.", descriptionMr: "माता मृत्यूदर कमी करण्यासाठी गरीब गर्भवती महिलांना रुग्णालयात प्रसूतीसाठी प्रोत्साहन.",
    benefits: "Cash assistance of ₹700 (urban) to ₹1400 (rural) upon institutional delivery.", benefitsMr: "रुग्णालयात प्रसूती झाल्यावर ₹७०० (शहरी) ते ₹१४०० (ग्रामीण) रोख मदत.",
    eligibility: "BPL pregnant women aged 19 and above.", eligibilityMr: "१९ वर्षे आणि त्यावरील बीपीएल गर्भवती महिला.",
    documents:["BPL Card", "Mother Child Protection Card", "Bank Account"], documentsMr:["बीपीएल कार्ड", "माता-बाल संरक्षण कार्ड", "बँक खाते"],
    status: "Active", category: "Health", categoryMr: "आरोग्य", link: "https://nhm.gov.in/", verified: true,
    minAge: 19, maxAge: 50, targetGender: "Female", incomeLimit: 100000, occupation: "Any"
  },
  {
    id: 59, name: "Indira Gandhi National Old Age Pension Scheme", nameMr: "इंदिरा गांधी राष्ट्रीय वृद्धापकाळ निवृत्तीवेतन योजना",
    description: "Central pension scheme for elderly people living below the poverty line.", descriptionMr: "दारिद्र्यरेषेखालील वृद्ध लोकांसाठी केंद्रीय निवृत्तीवेतन योजना.",
    benefits: "Monthly pension of ₹200 to ₹500 from Central Govt (State adds extra).", benefitsMr: "केंद्र सरकारकडून दरमहा ₹२०० ते ₹५०० पेन्शन (राज्य सरकार अतिरिक्त रक्कम जोडते).",
    eligibility: "BPL citizens aged 60 years or above.", eligibilityMr: "६० वर्षे किंवा त्याहून अधिक वयाचे बीपीएल नागरिक.",
    documents:["BPL Certificate", "Age Proof", "Bank Account"], documentsMr:["बीपीएल प्रमाणपत्र", "वयाचा पुरावा", "बँक खाते"],
    status: "Active", category: "Senior Citizen", categoryMr: "ज्येष्ठ नागरिक", link: "https://nsap.nic.in/", verified: true,
    minAge: 60, maxAge: 120, targetGender: "All", incomeLimit: 50000, occupation: "Senior Citizen"
  },
  {
    id: 60, name: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)", nameMr: "दीनदयाल उपाध्याय ग्रामीण कौशल्य योजना",
    description: "Skill training and placement program for rural youth.", descriptionMr: "ग्रामीण तरुणांसाठी कौशल्य प्रशिक्षण आणि रोजगार कार्यक्रम.",
    benefits: "Free skill training, free food & accommodation, and guaranteed job placement.", benefitsMr: "मोफत कौशल्य प्रशिक्षण, मोफत भोजन आणि निवास, आणि नोकरीची हमी.",
    eligibility: "Rural youth aged between 15 and 35 years from poor families.", eligibilityMr: "गरीब कुटुंबातील १५ ते ३५ वयोगटातील ग्रामीण तरुण.",
    documents:["Aadhaar", "BPL Card / Income Certificate", "Education Certificate"], documentsMr:["आधार कार्ड", "बीपीएल कार्ड / उत्पन्न प्रमाणपत्र", "शैक्षणिक प्रमाणपत्र"],
    status: "Active", category: "Employment", categoryMr: "रोजगार", link: "http://ddugky.gov.in/", verified: true,
    minAge: 15, maxAge: 35, targetGender: "All", incomeLimit: 100000, occupation: "Unemployed"
  },
  {
    id: 61, name: "PM-KUSUM Scheme", nameMr: "पीएम-कुसुम योजना",
    description: "Subsidy for setting up standalone solar pumps and grid-connected solar power plants.", descriptionMr: "सौर पंप बसवण्यासाठी आणि ग्रीड-कनेक्टेड सौर ऊर्जा प्रकल्पांसाठी अनुदान.",
    benefits: "60% subsidy on standalone solar agriculture pumps.", benefitsMr: "सौर कृषी पंपांवर ६०% सबसिडी.",
    eligibility: "Farmers with reliable water sources but no grid electricity connection.", eligibilityMr: "खात्रीशीर पाण्याचा स्रोत असलेले परंतु वीज जोडणी नसलेले शेतकरी.",
    documents:["7/12 Extract", "Aadhaar Card", "Bank Account"], documentsMr:["७/१२ उतारा", "आधार कार्ड", "बँक खाते"],
    status: "Active", category: "Farmer", categoryMr: "शेतकरी", link: "https://pmkusum.mnre.gov.in/", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Farmer"
  },
  {
    id: 62, name: "Mahila Samman Bachat Patra", nameMr: "महिला सन्मान बचत पत्र",
    description: "One-time small savings scheme specifically for women and girls.", descriptionMr: "विशेषतः महिला आणि मुलींसाठी एकरकमी लघु बचत योजना.",
    benefits: "Fixed interest rate of 7.5% per annum for 2 years (Max deposit ₹2 Lakh).", benefitsMr: "२ वर्षांसाठी वार्षिक ७.५% निश्चित व्याजदर (कमाल ठेव ₹२ लाख).",
    eligibility: "Any woman or guardian of a minor girl.", eligibilityMr: "कोणतीही महिला किंवा अल्पवयीन मुलीचे पालक.",
    documents: ["Aadhaar Card", "PAN Card", "KYC Documents"], documentsMr:["आधार कार्ड", "पॅन कार्ड", "केवायसी कागदपत्रे"],
    status: "Active", category: "Women", categoryMr: "महिला", link: "https://www.indiapost.gov.in/", verified: true,
    minAge: 0, maxAge: 100, targetGender: "Female", incomeLimit: 9999999, occupation: "Any"
  },
  {
    id: 63, name: "Rashtriya Vayoshri Yojana", nameMr: "राष्ट्रीय वयोश्री योजना",
    description: "Provides physical aids and assisted-living devices for senior citizens belonging to BPL category.", descriptionMr: "दारिद्र्यरेषेखालील ज्येष्ठ नागरिकांना शारीरिक सहाय्य आणि जीवनोपयोगी उपकरणे पुरवते.",
    benefits: "Free distribution of walking sticks, hearing aids, wheelchairs, spectacles, etc.", benefitsMr: "काठी, श्रवणयंत्र, व्हीलचेअर, चष्मा इ. चे मोफत वाटप.",
    eligibility: "Senior citizens (60+) belonging to BPL category.", eligibilityMr: "बीपीएल प्रवर्गातील ज्येष्ठ नागरिक (६०+).",
    documents:["BPL Card", "Aadhaar Card", "Medical Certificate for disability/ageing issues"], documentsMr:["बीपीएल कार्ड", "आधार कार्ड", "अपंगत्व/वृद्धत्वाच्या समस्येसाठी वैद्यकीय प्रमाणपत्र"],
    status: "Active", category: "Senior Citizen", categoryMr: "ज्येष्ठ नागरिक", link: "https://sje.nic.in/", verified: true,
    minAge: 60, maxAge: 120, targetGender: "All", incomeLimit: 50000, occupation: "Senior Citizen"
  },
  {
    id: 64, name: "National Family Benefit Scheme (NFBS)", nameMr: "राष्ट्रीय कुटुंब लाभ योजना",
    description: "Lump sum financial assistance to BPL households on the death of the primary breadwinner.", descriptionMr: "कुटुंबातील प्रमुख कमावणाऱ्या व्यक्तीच्या मृत्यूनंतर बीपीएल कुटुंबांना एकरकमी आर्थिक मदत.",
    benefits: "One-time financial assistance of ₹20,000.", benefitsMr: "₹२०,००० ची एकरकमी आर्थिक मदत.",
    eligibility: "BPL families where the deceased breadwinner was between 18 and 59 years old.", eligibilityMr: "बीपीएल कुटुंबे जिथे मृत कमावणाऱ्या व्यक्तीचे वय १८ ते ५९ च्या दरम्यान होते.",
    documents:["Death Certificate", "BPL Certificate", "Aadhaar of Applicant"], documentsMr:["मृत्यू प्रमाणपत्र", "बीपीएल प्रमाणपत्र", "अर्जदाराचे आधार कार्ड"],
    status: "Active", category: "Social Welfare", categoryMr: "समाज कल्याण", link: "https://nsap.nic.in/", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 50000, occupation: "Unemployed"
  },
  {
    id: 65, name: "Eklavya Model Residential Schools (EMRS)", nameMr: "एकलव्य मॉडेल निवासी शाळा",
    description: "Quality residential schools for Scheduled Tribes (ST) students in remote areas.", descriptionMr: "दुर्गम भागातील अनुसूचित जमाती (ST) च्या विद्यार्थ्यांसाठी दर्जेदार निवासी शाळा.",
    benefits: "Free education, lodging, boarding, and sports facilities from Class 6 to 12.", benefitsMr: "इयत्ता ६ वी ते १२ वी पर्यंत मोफत शिक्षण, निवास, भोजन आणि क्रीडा सुविधा.",
    eligibility: "ST category students passing class 5.", eligibilityMr: "५ वी उत्तीर्ण झालेले एसटी प्रवर्गातील विद्यार्थी.",
    documents:["Caste Certificate", "Class 5 Passing Certificate", "Aadhaar"], documentsMr:["जात प्रमाणपत्र", "५ वी उत्तीर्ण प्रमाणपत्र", "आधार कार्ड"],
    status: "Active", category: "Education", categoryMr: "शिक्षण", link: "https://tribal.nic.in/", verified: true,
    minAge: 10, maxAge: 18, targetGender: "All", incomeLimit: 9999999, occupation: "Student"
  },
  {
    id: 66, name: "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)", nameMr: "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी कायदा (मनरेगा)",
    description: "Ensures livelihood security in rural areas by providing at least 100 days of wage employment.", descriptionMr: "किमान १०० दिवसांचा रोजगार उपलब्ध करून देऊन ग्रामीण भागात उपजीविकेची हमी.",
    benefits: "Guaranteed 100 days of unskilled manual work per financial year at statutory minimum wage.", benefitsMr: "विहित किमान वेतनावर आर्थिक वर्षात १०० दिवसांच्या अकुशल श्रमाची हमी.",
    eligibility: "Adult members of rural households willing to do unskilled manual work.", eligibilityMr: "अकुशल काम करण्यास तयार असलेले ग्रामीण कुटुंबातील प्रौढ सदस्य.",
    documents:["Job Card", "Aadhaar Card", "Bank Account Details"], documentsMr:["जॉब कार्ड", "आधार कार्ड", "बँक खात्याचा तपशील"],
    status: "Active", category: "Employment", categoryMr: "रोजगार", link: "https://nrega.nic.in/", verified: true,
    minAge: 18, maxAge: 65, targetGender: "All", incomeLimit: 9999999, occupation: "Unemployed"
  },
  {
    id: 67, name: "Sharad Pawar Gram Samruddhi Yojana", nameMr: "शरद पवार ग्राम समृद्धी योजना",
    description: "Aims to double farmers' income by providing grants for allied agricultural activities.", descriptionMr: "शेतकऱ्यांचे उत्पन्न दुप्पट करण्यासाठी पूरक कृषी व्यवसायांना अनुदान.",
    benefits: "Grants for cow/buffalo sheds, goat rearing sheds, and poultry sheds.", benefitsMr: "गाय/म्हैस गोठा, शेळीपालन शेड आणि कुक्कुटपालन शेडसाठी अनुदान.",
    eligibility: "Farmers with Job Cards registered under MGNREGA in Maharashtra.", eligibilityMr: "महाराष्ट्रातील मनरेगा अंतर्गत नोंदणीकृत जॉब कार्ड असलेले शेतकरी.",
    documents:["MGNREGA Job Card", "7/12 Extract", "Gram Panchayat Resolution"], documentsMr:["मनरेगा जॉब कार्ड", "७/१२ उतारा", "ग्रामपंचायत ठराव"],
    status: "Active", category: "Farmer", categoryMr: "शेतकरी", link: "https://egs.mahaonline.gov.in/", verified: true,
    minAge: 18, maxAge: 100, targetGender: "All", incomeLimit: 9999999, occupation: "Farmer"
  },
  {
    id: 68, name: "Lek Ladki Yojana", nameMr: "लेक लाडकी योजना",
    description: "Financial incentive for girls born in yellow or orange ration card holder families in Maharashtra.", descriptionMr: "महाराष्ट्रातील पिवळे किंवा केशरी रेशन कार्डधारक कुटुंबात जन्मलेल्या मुलींसाठी आर्थिक प्रोत्साहन.",
    benefits: "Total benefit of ₹1.01 Lakh given in stages from birth till the age of 18.", benefitsMr: "जन्मापासून ते १८ वर्षे वयापर्यंत टप्प्याटप्प्याने एकूण ₹१.०१ लाख दिले जातात.",
    eligibility: "Girls born after April 1, 2023, in Yellow/Orange ration card families.", eligibilityMr: "१ एप्रिल २०२३ नंतर पिवळ्या/केशरी रेशन कार्ड कुटुंबात जन्मलेल्या मुली.",
    documents:["Birth Certificate", "Ration Card", "Aadhaar of Parents"], documentsMr:["जन्म प्रमाणपत्र", "रेशन कार्ड", "पालकांचे आधार कार्ड"],
    status: "Active", category: "Women", categoryMr: "महिला", link: "https://womenchild.maharashtra.gov.in/", verified: true,
    minAge: 0, maxAge: 18, targetGender: "Female", incomeLimit: 100000, occupation: "Any"
  }
];

module.exports = schemes;