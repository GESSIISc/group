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
    bio: "Hi, I am a PhD student in the GESS group at ICWaR, IISc. I hold a bachelor's degree in Agricultural Engineering from UAS, Bengaluru (2021), and a master's in Remote Sensing and GIS with a Water Resources specialization from IIRS-ISRO, Dehradun (2023). My master's research focused on 'Downscaling of Changes in Terrestrial Water Storage for Enhanced Basin-Scale Groundwater Storage and Drought Assessment'. My PhD research is centred on GRACE Level-1B processing, Tidal aliasing, and Background model errors. Other research interests include Satellite Geodesy, Remote Sensing, and Hydrological modelling. Outside of academics, I enjoy playing outdoor sports.",
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
    designation: "Junior Research Fellow",
    name: "Pavan Kumar Amgoth",
    bio: 'Hi, I’m Pavan Kumar Amgoth, a Junior Research Fellow (JRF) in the GESS group at ICWaR, IISc Bangalore. I hold a B.Tech in Civil Engineering from RGUKT, Basar (2023) and completed my M.Tech in Climate and Earth Sciences from the Centre for Atmospheric and Oceanic Sciences (CAOS), IISc (2025). My master’s research focused on developing a Storage Budget Framework using GRACE and GRACE-FO satellite data to analyse terrestrial water storage changes and their hydrological components across global basins. I work extensively with remote sensing datasets, hydrological time series, and uncertainty analysis, integrating baseflow, transpiration, and satellite-derived storage anomalies. My interests include hydroclimatic extremes, microwave remote sensing, spatial hydrology, and image-based geophysical analysis. I am particularly interested in combining satellite data with data-driven methods to study the global water cycle. Outside of research, I enjoy playing cricket and table tennis.  More at:',
    externalLink: "https://pavankz.github.io/portfolio/",
    imageSrc: "./assets/images/team/PavanKA.webp",
    email: "amgothpavan@IISc.ac.in"
  }
];
export const alumni: TeamMember[] = [
  {
    designation: "Postdoctoral Researcher",
    duration: "(March 2022 - April 2025)",
    currentStatus: "Post Doctoral Scientist at Umeå University",
    name: "Arindan Mandal",
    bio: "Dr. Arindan’s research at ICWaR focused on the interaction between glaciers and climate in the Himalayan region. As part of his postdoctoral work, he conducted physically-based mass balance modelling of glaciers in the Ladakh and Karakoram regions. He initially joined ICWaR as an IOE Postdoctoral Fellow and later secured the prestigious National Post Doctoral Fellowship (NPDF), awarded by the Science and Engineering Research Board (SERB), Government of India.",
    imageSrc: "./assets/images/team/ArindanM.webp",
  },
  {
    designation: "Postdoctoral Researcher",
    duration: "(August 2023 - June 2024)",
    currentStatus: "Graduate Engineer at AtkinsRéalis",
    name: "Aayushi Kochar",
    bio: "Ayushi Kochar completed her Master’s thesis in GESS Group at ICWaR. Her work focused on exploring the rainfall–soil moisture relationship using the Linear Time-Invariant (LTI) systems approach.",
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
