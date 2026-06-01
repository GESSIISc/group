export interface TeamMember {
  designation: string;
  currentStatus?: string;
  duration?: string;
  externalLink?: string;
  name: string;
  bio: string;
  imageSrc: string;
  email?: string;
}
export const currentTeam: TeamMember[] = [
  {
    designation: "Assistant Professor",
    name: "Bramha Dutt Vishwakarma",
    bio: "I have a bachelors degree in Electronics and Communication Engineering, a masters in Geomatics Engineering, and a PhD in Geodesy. In my masters thesis I worked on analyzing GRACE timeseries and in my PhD I developed data-driven methods to process level 2 GRACE data at catchment scale. I work with multiple Earth observation datasets to estimate various surface processes that are related to ongoing climate change. In my free time I like to play outdoor sports.",
    imageSrc: "./assets/images/team/BramhaDV.webp"
  },
  {
    designation: "DST INSPIRE Faculty",
    name: "Maya Raghunath Suryawanshi",
    bio: "I hold a Ph.D. from the Space Applications Centre, ISRO, with a background in Physics from the University of Mumbai. My doctoral and postdoctoral work (Lancaster University, UK) focused on polar ice sheets using satellite altimetry. Later, at IISc, I expanded into terrestrial hydrology, using GRACE data to validate and downscale water storage anomalies over India. I now aim to integrate satellite observations with hydrological modeling to study water dynamics.",
    imageSrc: "./assets/images/team/MayaRS.webp",
    email: "mayas@IISc.ac.in"
  },
  {
    designation: "DST INSPIRE Faculty",
    name: "Jisha Joseph",
    bio: "I completed my B.Tech in Civil Engineering from National Institute of Technology Calicut, followed by an integrated M.Tech and Ph.D. in Water Resources Engineering from Indian Institute of Technology Bombay. During my Ph.D., I developed an irrigation module tailored to Indian agricultural systems, incorporating multiple crop varieties, flood irrigation practices, a dedicated mechanism for paddy cultivation, and groundwater abstraction. I then pursued a postdoctoral position at Potsdam Institute for Climate Impact Research in the Hydroclimatic Risk Group, where I worked with the Soil and Water Integrated Model (SWIM). My work focused on large-scale hydrological modelling over Europe, including climate attribution and assessing changes in river flow regimes under future climate scenarios.My current research focuses on developing sustainable adaptation strategies for water-stressed regions of India. Building on my experience in hydroclimatic modelling and irrigation dynamics, I aim to assess how changes in crop patterns, irrigation practices, and water management can reduce groundwater water stress under future climate scenarios.",
    imageSrc: "./assets/images/team/Dr.JishaJoseph.webp",
    email: "jishajoseph@IISc.ac.in"
  },
  {
    designation: "Postdoctoral Researcher",
    name: "Retinder Kour",
    bio: "I have a PhD in remote sensing from Birla Institute of Technology Mesra, Jharkhand and a master's in remote sensing and GIS from University of Jammu, J&K. For both my master and PhD thesis, I worked on snow cover dynamics and climate change impact on the hydrological regime of Chenab basin, western Himalayas. My research areas include snow/glacier dynamics and characterization using optical and thermal remote sensing datasets, future projections of climate variables using empirical‐statistical downscaling methods, and hydrological modelling. I enjoy painting in my spare time.",
    imageSrc: "./assets/images/team/RetinderK.webp",
    email: "retinderkour@IISc.ac.in"
  },
  {
    designation: "Postdoctoral Researcher",
    name: "K Satish Kumar",
    bio: 'I hold a B.Tech degree in Civil Engineering and an M.Tech in Water Resources Engineering from Maulana Azad National Institute of Technology (MANIT), Bhopal. I completed my Ph.D. at the National Institute of Technology (NIT), Warangal, where my research focused on "Drought Assessment in South Indian River Basins using Reconstructed GRACE Data to Examine Terrestrial Water Storage and Teleconnections." Following my doctoral studies, I joined the Indian Institute of Science (IISc), Bangalore, as an IoE Post-Doctoral Fellow, where I worked on understanding and estimating hydrological components using GRACE satellite datasets, as well as improving water budget closure. Currently, I am engaged in a project on the development and integration of a dynamic and interactive aquifer layer into CFSv2 to enhance extended-range monsoon prediction.',
    imageSrc: "./assets/images/team/KSatishKumar.webp",
    email: "ksatishkumar@IISc.ac.in"
  },
  {
    designation: "Postdoctoral Researcher",
    name: "Manmit Kumar Singh",
    bio: `I have a Bachelor of Engineering degree in Civil Engineering, a Master of Technology in Climate Science and Technology, and a Ph.D. in Civil Engineering from the Earth System Science and Engineering Division. In my master's thesis, I focused on the interannual variability of surface marine chlorophyll (SMC) and its impact on chlorophyll concentration using MODIS data and ROMS simulations. For my Ph.D. thesis, I used advanced geospatial techniques to study snow geophysical parameters, focusing specifically on parts of the Northeastern Indian Himalayas. I work with multiple Earth observation and remote sensing datasets including SAR polarimetry, InSAR, and hyperspectral data to study rapidly changing cryospheric processes under climate pressure.`,
    imageSrc: "./assets/images/team/ManmitKumarSingh.webp",
    email: "manmitk@IISc.ac.in"
  },
  {
    designation: "PhD Student",
    name: "Vivek Yadav",
    bio: "Hello, I am a PhD student in the GESS group at ICWaR, IISc. I am from the Ghazipur district of eastern Uttar Pradesh. I completed my bachelor’s in civil engineering from BIET, Jhansi. In my B. Tech project I designed a Raw Water Treatment Plant for the Institute. As a seminar project, I looked into the impacts of Farakka Barrage & Institutional decisions on annual flooding in the Bihar state. Besides, I like reading non-fiction books and all outdoor sports. My research interests are Hydro-Climatology, Hydrology, and Remote Sensing.",
    imageSrc: "./assets/images/team/VivekY.webp",
    email: "viveky@IISc.ac.in"
  },
  {
    designation: "PhD Student",
    name: "Balaram Shaw",
    bio: "I have completed BTech (2020) in Civil Engineering and MTech (2022) from NIT Calicut in Water Resources Engineering, and currently a PhD student at ICWaR,  IISc. During my master's degree, I worked on “Drought Analysis using multiple drought index and Copula theory for semi-arid region in India.” When I don’t study, I observe nature and try to be better. My research interest includes but is not limited to Stochastic Hydrology, Hydrological Extremes, and Surface Water Hydrology.",
    imageSrc: "./assets/images/team/BalaramShaw.webp",
    email: "balaramshaw@IISc.ac.in"
  },
  {
    designation: "PhD Student",
    name: "Chethan V A",
    bio: "Hi, I'm a PhD student in the GESS group at ICWaR, Indian Institute of Science (IISc), Bengaluru. My academic journey began with a Bachelor's degree in Agricultural Engineering from the University of Agricultural Sciences, GKVK, Bengaluru (2021), followed by a Master's degree in Remote Sensing and GIS with a specialization in Water Resources from IIRS-ISRO, Dehradun (2023), where I worked on downscaling terrestrial water storage changes for improved basin-scale groundwater and drought assessment. My doctoral research explores GRACE Level-1B data processing, tidal aliasing, and background model error propagation through stochastic modelling — sitting at an exciting intersection of satellite geodesy, remote sensing, and hydrological modelling. When I'm not immersed in research, you'll find me out playing outdoor sports!",
    imageSrc: "./assets/images/team/ChethanVA.webp",
    email: "chethanv@IISc.ac.in"
  },
  {
    designation: "PhD Student",
    name: "Vandana S",
    bio: "Hi! I am a PhD student in the GESS group. I did my bachelor’s in Applied Electronics and Instrumentation Engineering from LBSITW, Kerala University, and later completed my master’s in Geoinformatics from TERI SAS, Delhi. Here at ICWaR, I have been working on developing an algorithm for satellite remote sensing to monitor coastal sea levels. I am really interested in radar remote sensing and its applications in oceanography and the atmospheric sciences. Outside of research, I love traveling, singing, and reading.",
    imageSrc: "./assets/images/team/VandanaS.webp",
    email: "vandanas1@IISc.ac.in"
  },
  {
    designation: "PhD Student",
    name: "Abhirup Pal",
    bio: "I am pursuing a PhD from the Interdisciplinary Centre for Water Research (ICWaR), Indian Institute of Science (IISc), supported by a GATE fellowship. I completed my BSc in Statistics from Maulana Azad College, University of Calcutta, and my MSc in Statistics from Bangalore University, where my master’s project focused on time series modeling using ARCH, GARCH, and Causality analysis.  My research focuses on applying Bayesian frameworks to hydrological and climate-related problems. I am particularly interested in uncertainty quantification, signal detection, and spatio-temporal modeling, inspired by recent developments in climate signal analysis and sea-level rise attribution. My broader interests include probability theory, frequentist inference, regression analysis, time series, and Bayesian statistics.",
    imageSrc: "./assets/images/team/AbhirupPal.webp",
    email: "abhiruppal@IISc.ac.in"
  },
  {
    designation: "PhD Student",
    name: "Dnyaneshwar Gawai",
    bio: "I am deeply fascinated by the magical capabilities of Synthetic Aperture Radar (SAR) remote sensing and its potential applications in hydrological studies, especially in addressing the pressing challenges posed by climate change. My academic journey began with a Bachelor's degree in Civil Engineering, followed by a Master's in Aquacultural Engineering from IIT Kharagpur. During my Master's, I worked on SAR imagery to detect coastal aquatic structures, which sparked my passion for radar-based remote sensing. In  MTech second year, I was honoured to receive the prestigious DLR-DAAD Fellowship, which enabled a research visit to the German Aerospace Center (DLR), Germany. There, I completed my Master's thesis under the mentorship of leading SAR expertise. Currently, I am pursuing my PhD at ICWaR, IISc Bangalore, where I continue to explore and delve deeper into the world of SAR remote sensing.",
    imageSrc: "./assets/images/team/DGawai.webp",
    email: "dnyaneshwarg@IISc.ac.in"
  },
  {
    designation: "PhD Student",
    name: "Alok Kumar",
    bio: "Hi Everyone, I am a passionate researcher with a Master’s degree (MSc.) in Environmental Science from Jawaharlal Nehru University, New Delhi. I have worked on a year-long dissertation project where I tried to study 'Nature-based Solutions, such as Urban Green Spaces for Mitigating Air Pollution and Understanding How Plants Tolerate Abiotic Stressors'. Parallel to this, I developed a keen interest in Earth System Sciences during my MSc degree. Hence, I joined ICWaR in August 2025 to explore the hidden associations of Major Water Resources with Other Components of the Earth system. Apart from academic enthusiasm, I love to write poems, satires and some stories.",
    imageSrc: "./assets/images/team/AlokKumar.webp",
    email: "alokk@IISc.ac.in"
  },
  {
    designation: "PhD Student",
    name: "Prajakta Avinash Shinde",
    bio: "Hi, I am a PhD student in the GESS group at ICWaR. I hold a bachelor’s degree in Agricultural Engineering from CAET, Dapoli and a master’s in Remote Sensing and GIS with a Water Resources specialization in IIRS-ISRO,Dehradun. During my master’s I worked on ‘Modelling groundwater level fluctuations using machine learning and MODFLOW’. My research interests include hydrological modelling, remote sensing and groundwater systems. And currently I am exploring the applications of GRACE and other satellite-derived datasets for groundwater assessment, monitoring and sustainable management.",
    imageSrc: "./assets/images/team/PrajaktaAS.webp",
    email: "prajaktas@IISc.ac.in"
  },
  {
    designation: "PhD Student",
    name: "Mrinal Goswami",
    bio: "Hi! I am a researcher from the mountains, and growing up, I witnessed the impacts of climate change on fragile mountain ecosystems, which inspired me to pursue environmental research. I hold a BSc (Hons.) in Forestry, followed by an MSc in Environmental Science from Jawaharlal Nehru University. During my master’s dissertation, I developed forest fire susceptibility maps for Champawat, Uttarakhand, using machine learning algorithms and explored the relationship between forest fires and human–wildlife conflict. Later, while working on an International Union for Conservation of Nature project focused on conserving the Aravalli landscape, I developed a strong interest in understanding how water shapes ecosystem and social dynamics. I am currently exploring ecohydrology as part of my PhD at the Interdisciplinary Centre for Water Research. My interests lie in remote sensing, machine learning, and understanding how subtle environmental changes influence complex natural processes. Beyond research, I enjoy birdwatching, reading, and trekking.",
    imageSrc: "./assets/images/team/MrinalGoswami.webp",
    email: "mrinalg@IISc.ac.in"
  },
  {
    designation: "Joint PhD Student",
    name: "Amiya Kumar Sur",
    bio: "Hi, I am a Joint PhD student at the Interdisciplinary Centre for Water Research (ICWaR), IISc and the University of Manchester, UK. I completed my bachelor’s degree in Computer Science and Engineering, followed by an MSc in Data Science (Environmental Analytics) from the University of Leeds as a Chevening Scholar. During my master’s dissertation, I worked on groundwater level forecasting in the Memphis Aquifer using deep learning models to understand groundwater dynamics and the influence of hydroclimatic variables on water table fluctuations. My PhD research focuses on the intersection of machine learning and climate science, particularly developing physics-informed AI for hydrological and land surface models. Currently, I am exploring simplified representations of irrigation parameterization within Earth System Models, to reduce resulting biases in energy-water fluxes and improve predictive modelling for sustainable water resource management. My broader research interests include understanding hydro-climatology,  Earth system processes and data-driven policy making. Outside academics, I enjoy hiking and community outreach activities related to climate awareness and education for marginalised communities.",
    imageSrc: "./assets/images/team/AmiyaKumarSur.webp",
    email: "amiyakumars@IISc.ac.in"
  },
  {
    designation: "Project Associate",
    name: "Lipika Dutta",
    bio: "I am a Project Associate at the Interdisciplinary Centre for Water Research (ICWaR), IISc Bengaluru, where I work on glacier–lake interactions through the IGLOO-IWR project. My current work involves the SHAKTI model within the Ice Sheet System Model (ISSM) framework and Delta-K interferometry for snow water retrieval. My broader interest lies in polar regions and understanding how ice systems respond to a changing climate through the lens of microwave remote sensing. My academic background spans a B.Sc. and M.Sc. in Geography from Presidency University, Kolkata, and a Post-Graduate Diploma in Remote Sensing and GIS from IIRS–ISRO, Dehradun. During my PG Diploma. Outside research, I enjoy reading and traveling.",
    imageSrc: "./assets/images/team/Lipika_Dutta.webp",
    email: "lipikad@IISc.ac.in"
  },
  {
    designation: "Program Assistant",
    name: "Kritagya Kumar Singh Tomar",
    bio: "I am a Program Assistant at the ICWaR at the Indian Institute of Science, where I work on linked problems in hydrology and cryosphere science. I completed a BA (Honours) in Geography from Banaras Hindu University in 2023, followed by an MA in Geography with a specialization in Hydrology from the University of Mumbai in 2025. My master’s work applied the Water Accounting Plus framework to basin-scale hydrology to understand flow partitioning, evapotranspiration, and water use for decision-relevant assessment. This led to my role at the Centre for Public Policy at the Indian Institute of Management Bangalore, where I used transformer-based models to study environmental behavior and climate-linked decisions. I now work on the ISRO-funded IGLOO-IHR project, which examines glacier-lake interactions and GLOF risk in the Indian Himalayan region, with a focus on subglacial hydrology and its control on ice flow, including large glacier systems in Antarctica and the Himalaya. My research connects glaciology, hydrology, and computational modeling, with a focus on transforming sparse observations into interpretable structures and moving from pixels to processes in complex Earth systems.",
    imageSrc: "./assets/images/team/Kritagya_Tomar.webp",
    email: "kritagyat@IISc.ac.in"
  }
];
export const alumni: TeamMember[] = [
  {
    designation: "Junior Research Fellow",
    duration: "(July 2024 - August 2025)",
    currentStatus: "Doctoral Researcher at IRD, France",
    name: "Pavan Kumar Amgoth",
    bio: " Pavan completed his master's thesis in the GESS group at ICWaR. His work focused on developing a Storage Budget Framework using GRACE and GRACE-FO satellite data to analyse terrestrial water storage changes and their hydrological components across global basins.",
    imageSrc: "./assets/images/team/PavanKA.webp",
  },
  {
    designation: "Postdoctoral Researcher",
    duration: "(March 2022 - April 2025)",
    currentStatus: "Post Doctoral Scientist at Umeå University",
    name: "Arindan Mandal",
    bio: "Dr. Arindan’s research at ICWaR focused on the interaction between glaciers and climate in the Himalayan region. As part of his postdoctoral work, he conducted physically-based mass balance modelling of glaciers in the Ladakh and Karakoram regions. He initially joined ICWaR as an IOE Postdoctoral Fellow and later secured the prestigious National Post Doctoral Fellowship (NPDF), awarded by the Science and Engineering Research Board (SERB), Government of India.",
    imageSrc: "./assets/images/team/ArindanM.webp",
  },
  {
    designation: "Junior Research Fellow",
    duration: "(August 2023 - June 2024)",
    currentStatus: "Graduate Engineer at AtkinsRéalis",
    name: "Aayushi Kochar",
    bio: "Aayushi Kochar completed her Master’s thesis in the GESS Group at ICWaR. Her work focused on exploring the use of Linear Time-Invariant (LTI) system modeling to estimate soil moisture dynamics and quantify irrigation water volumes across India by analyzing the discrepancy between model predictions and satellite observations during non-precipitation periods.",
    imageSrc: "./assets/images/team/AayushiK.webp",
  },
  {
    designation: "Postdoctoral Researcher",
    duration: "(November 2022 - September 2023)",
    currentStatus: "Sr Research Engineer at Verisk Analytics India Pvt. Ltd.",
    name: "Pushkar Sharma",
    bio: "Dr. Pushkar Sharma worked as an IOE Postdoctoral Fellow at ICWaR. His research focused on the Budyko framework for the estimation of evapotranspiration.",
    imageSrc: "./assets/images/team/PushkarS.webp"
  },
  {
    designation: "Senior Project Associate",
    duration: "(June 2022 - August 2023)",
    currentStatus: "PhD Student at the University of Twente, The Netherlands",
    name: "Amin Shakya",
    bio: "Amin Shakya worked as a Senior Project Associate at ICWaR, contributing to the ISRO–IISc Space Technologies Cell project. His work focused on the downscaling of GRACE gravimetric satellite hydrological products for the Indian region.",
    imageSrc: "./assets/images/team/AminShakya.webp"
  },
  {
    designation: "C V Raman Postdoctoral Fellow",
    duration: "(November 2022 - March 2023)",
    currentStatus: "Faculty at IIT Roorkee",
    name: "Abhishek",
    bio: "Dr. Abhishek worked as a C V Raman Postdoctoral Fellow at ICWaR. His research focused on GRACE-based terrestrial water storage estimation, remote sensing and machine learning methods, and the identification of hydro-climatic extremes.",
    imageSrc: "./assets/images/team/Abhishek.webp"
  }
];
