export interface TeamMember {
  designation: string;
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
    bio: "I hold a Ph.D. from the Space Applications Centre, ISRO, with a background in Physics from the University of Mumbai. My doctoral and postdoctoral research (Lancaster University, UK) focused on investigating polar ice sheets (Greenland and Antarctica) using satellite altimetry and assessing uncertainties in satellite measurements. Over time, my research scope broadened to include terrestrial hydrology. At the Indian Institute of Science (IISc), I began working with GRACE satellite data to validate and downscale total water storage anomalies over India. This shift has allowed me to integrate remote sensing with hydrological analysis, and now I am now keen in combining satellite observations with hydrological modeling to better understand water dynamics across Earth's surface and subsurface.",
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
  }
];
export const alumni: TeamMember[] = [
  {
    designation: "Postdoctoral Researcher",
    name: "Arindan Mandal",
    bio: "Hi, I am a Postdoctoral Fellow at ICWaR since March 2022. I received my PhD from Jawaharlal Nehru University, New Delhi in January, 2022. My interest lies in studying the interaction between glaciers and climate in the Himalayan region. As part of my postdoctoral project, I plan to conduct physically-based mass balance modelling of the Ladakh and Karakoram glaciers. To know more about me, please visit: <https://arindan.github.io>.",
    imageSrc: "./assets/images/team/ArindanM.webp",
  },
  {
    designation: "Postdoctoral Researcher",
    name: "Pushkar Sharma",
    bio: "Hi, I have been a Postdoctoral Fellow at ICWaR, IISc, since November 2022. I completed my bachelor’s in Civil Engineering from SCET, Surat. Further, I did M.E. in Hydraulic Structures from MSU, Vadodara, and PhD from IIT Bombay. In my master's, I worked on Dam break analysis and flood plain map generation; in PhD, I worked on quantifying climate and catchment effects on streamflow using the Budyko framework. I like playing Table Tennis. My research interests include hydraulic engineering and Budyko framework for estimation of evapotranspiration.",
    imageSrc: "./assets/images/team/PushkarS.webp"
  },
  {
    designation: "Senior Project Associate",
    name: "Amin Shakya",
    bio: "I have a bachelor’s degree in Civil Engineering, and a double master's degree in Water Science and Engineering from the IHE Delft Institute for Water Education, the Netherlands, and TU Dresden, Germany. My research interests lie around hydroinformatics, disaster risk management, and sociotechnical innovation. Currently, I am working at the Geodesy for Earth System Science lab at the ICWaR, IISc on the downscaling of GRACE gravimetric satellite hydrological product for the Indian region, as a part of the ISRO-IISc Space Technologies Cell project.",
    imageSrc: "./assets/images/team/AminShakya.webp"
  },
  {
    designation: "C V Raman Postdoctoral Fellow",
    name: "Abhishek",
    bio: "I have a B. Tech (2017) and M. Tech (2019) in Civil Engineering and Groundwater Hydrology, respectively, from IIT Roorkee, and Ph.D. (2022) in Water Resources Engineering from TokyoTech, Japan. I work on the global and regional hydrological cycle, groundwater and sustainability, GRACE terrestrial water storage, remote sensing and machine learning methods, and identification of hydro-climatic extremes. To know more, please visit https://www.researchgate.net/profile/Abhishek-12.",
    imageSrc: "./assets/images/team/Abhishek.webp"
  }
];
