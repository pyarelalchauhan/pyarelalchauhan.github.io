// ---------------------------------------------------------------------------
// Single source of truth for all site content.
// Edit this file to update the portfolio, components read from here.
// Mirrors the master CV (Application_Apply/_shared/CV_master).
// ---------------------------------------------------------------------------

export const profile = {
  name: "Pyare Lal Chauhan",
  role: "Ph.D. Research Scholar, 3D Vision, LiDAR & Geospatial Deep Learning",
  affiliation: {
    lab: "GeoAI4Cities Lab",
    labUrl: "https://geoai4cities.com/",
    department: "Data Science and Engineering",
    departmentUrl: "https://dse.iiserb.ac.in/",
    institute: "Indian Institute of Science Education and Research, Bhopal",
    instituteUrl: "https://www.iiserb.ac.in/",
    advisor: "Dr. Vaibhav Kumar",
    advisorUrl: "https://sites.google.com/view/vaibhavkumar1/home",
  },
  thesis:
    "LiDAR Point Cloud Perception for Emergency Vehicle Accessibility and Quality-of-Life Mapping in Urban Environments",
  // One-line research statement shown in the hero.
  tagline:
    "I develop deep learning methods for 3D point clouds, LiDAR, and multi-source geospatial data to better understand and plan urban environments.",
  location: "Bhopal, Madhya Pradesh, India",
  email: "pyare22@iiserb.ac.in",
  phone: "+91 9566095406",
  orcid: "0009-0002-0793-9240",
  // Default CV, plus a version that includes citation metrics.
  resume: "/resume.pdf",
  resumeWithMetrics: "/resume_with_metrics.pdf",
  // Headshot lives in /public/images
  photo: "/images/pyare-headshot.jpg",
  founderOf: "Netrica.AI",
  socials: {
    googleScholar:
      "https://scholar.google.com/citations?user=iYZ74nAAAAAJ&hl=en",
    orcid: "https://orcid.org/0009-0002-0793-9240",
    researchgate: "https://www.researchgate.net/profile/Pyare-Chauhan",
    github: "https://github.com/pyarelalchauhan",
    linkedin: "https://www.linkedin.com/in/pyarelaldse/",
  },
};

export interface NewsItem {
  date: string; // display string, e.g. "Jun 2026"
  text: string;
  url?: string;
}

// Newest first.
export const news: NewsItem[] = [
  {
    date: "Jun 2026",
    text: "New journal paper in Applied Intelligence on deep-learning semantic segmentation of subsampled LiDAR point clouds.",
    url: "https://doi.org/10.1007/s10489-026-07282-2",
  },
  {
    date: "Feb 2026",
    text: "Founded Netrica.AI (Netrica Pvt. Ltd.), an applied-AI venture for urban planning, incubated at IISER Bhopal and IISER Pune.",
    url: "#venture",
  },
  {
    date: "Jan 2026",
    text: "Ke-MLS, a large-scale Indian urban mobile-LiDAR dataset, published in Environment and Planning B.",
    url: "https://doi.org/10.1177/23998083261430812",
  },
  {
    date: "2025",
    text: "Three journal papers published across the Int. J. of Applied Earth Observation & Geoinformation and Neurocomputing.",
    url: "#publications",
  },
  {
    date: "2023",
    text: "Won First Prize at the IEEE-GRSS Student Hackathon and reached the Top 5 at the DST-SOI-Microsoft Geospatial Hackathon.",
    url: "#awards",
  },
];

// Short bio paragraphs for the About section.
export const about: string[] = [
  `I am a Ph.D. research scholar in the ${profile.affiliation.lab} at ${profile.affiliation.institute}, advised by ${profile.affiliation.advisor}. My work sits at the intersection of 3D computer vision and geospatial science.`,
  `My doctoral research, "${profile.thesis}", develops deep learning models for semantic segmentation of mobile LiDAR point clouds, domain adaptation across urban scenes, and the fusion of LiDAR, street-view imagery, and other 2D and 3D geospatial data for applications such as pedestrian-oriented route planning and urban quality-of-life assessment.`,
];

export const researchInterests: string[] = [
  "Urban Perception Modeling",
  "2D & 3D Computer Vision",
  "LiDAR Point Cloud Processing",
  "Deep Learning for Remote Sensing",
  "Semantic Segmentation",
  "Large Language Models",
  "Urban Computing",
  "Geospatial AI",
];

export type PubType = "Journal" | "Conference";

export interface Publication {
  authors: string; // use **Name** to bold the highlighted author; trailing * = equal contribution
  title: string;
  venue: string;
  short?: string; // short venue label shown on the thumbnail badge (e.g. "JAG")
  year: number;
  type: PubType;
  doi?: string;
  url: string;
  code?: string;
  image?: string; // teaser thumbnail in /public/images
  imageFit?: "cover" | "contain"; // "contain" shows the whole figure (use for wide diagrams); defaults to "cover"
  summary?: string; // one-line "what we did" shown under the venue
}

// Newest first.
export const publications: Publication[] = [
  {
    authors: "**Pyare Lal Chauhan**, Aakash Singh Bais, Vaibhav Kumar",
    title:
      "Performance analysis of subsampled LiDAR point clouds using deep learning based semantic segmentation",
    venue: "Applied Intelligence, vol. 56, Article 273",
    short: "Appl. Intell.",
    year: 2026,
    type: "Journal",
    doi: "10.1007/s10489-026-07282-2",
    url: "https://doi.org/10.1007/s10489-026-07282-2",
    code: "https://github.com/geoai4cities/LiDAR-Subsampling-Benchmark",
    image: "/images/lidar_subsampling_pointclouds.png",
    summary:
      "Benchmarks how point-cloud subsampling and compression strategies trade off semantic-segmentation accuracy against compute cost for airborne and mobile LiDAR.",
  },
  {
    authors: "Vaibhav Kumar, Bharat Lohani, **Pyare Lal**, Aakash Singh Bais, Aditya",
    title:
      "Ke-MLS: A large-scale labeled mobile LiDAR data set from Indian urban region",
    venue: "Environment and Planning B: Urban Analytics and City Science",
    short: "Env. Plan. B",
    year: 2026,
    type: "Journal",
    doi: "10.1177/23998083261430812",
    url: "https://doi.org/10.1177/23998083261430812",
    image: "/images/kemls_seg.png",
    summary:
      "Introduces Ke-MLS, a large-scale labeled mobile-LiDAR dataset of Indian urban streetscapes for point-cloud segmentation research.",
  },
  {
    authors: "**Pyare Lal Chauhan**, Tanishq Kumar Baswal, Vaibhav Kumar",
    title:
      "A data-driven framework for pedestrian-oriented route planning leveraging deep learning and spatial perception",
    venue:
      "International Journal of Applied Earth Observation and Geoinformation, vol. 144, Article 104932",
    short: "IJAEOG",
    year: 2025,
    type: "Journal",
    doi: "10.1016/j.jag.2025.104932",
    url: "https://doi.org/10.1016/j.jag.2025.104932",
    code: "https://github.com/geoai4cities/svi_perception",
    image: "/images/pedestrian_route_planning.png",
    summary:
      "Plans pedestrian routes optimized for human perception (safe, lively, beautiful) by combining street-view imagery with deep learning and spatial data.",
  },
  {
    authors: "Ayush Dabra, **Pyare Lal Chauhan**, Vaibhav Kumar",
    title:
      "Deep learning and multi-source 2D and 3D geospatial data for urban quality of life assessment",
    venue:
      "International Journal of Applied Earth Observation and Geoinformation, vol. 144, Article 104838",
    short: "IJAEOG",
    year: 2025,
    type: "Journal",
    doi: "10.1016/j.jag.2025.104838",
    url: "https://doi.org/10.1016/j.jag.2025.104838",
    image: "/images/uqol_methodology.png",
    summary:
      "Fuses multi-source 2D and 3D geospatial data with deep learning to map and assess urban quality of life.",
  },
  {
    authors: "Anurag Nihal*, **Pyare Lal***, Vaibhav Kumar",
    title:
      "Urban multi-domain mixing (UMDMix) based unsupervised domain adaptation for LiDAR semantic segmentation",
    venue: "Neurocomputing, Article 131526",
    short: "Neurocomputing",
    year: 2025,
    type: "Journal",
    doi: "10.1016/j.neucom.2025.131526",
    url: "https://doi.org/10.1016/j.neucom.2025.131526",
    code: "https://github.com/geoai4cities/umdmix-uda",
    image: "/images/umdmix_mixing.png",
    imageFit: "contain",
    summary:
      "Proposes UMDMix, an unsupervised domain-adaptation method that mixes urban LiDAR domains to transfer semantic segmentation across cities.",
  },
  {
    authors: "**Pyare Lal Chauhan**, J. Vijaywargiya, A. M. Ramiya",
    title:
      "Addressing class imbalance challenge in semantic segmentation of ALS data through performance analysis of RandLA-Net and PointNet++",
    venue: "IEEE India Geoscience and Remote Sensing Symposium (InGARSS)",
    short: "IEEE InGARSS",
    year: 2023,
    type: "Conference",
    doi: "10.1109/InGARSS59135.2023.10490326",
    url: "https://ieeexplore.ieee.org/document/10490326",
    image: "/images/point_cloud_seg.png",
    summary:
      "Examines class imbalance in airborne-LiDAR (ALS) semantic segmentation, comparing RandLA-Net and PointNet++.",
  },
];

export interface OpenSourceItem {
  name: string;
  description: string;
  url?: string;
}

export const openSource: OpenSourceItem[] = [
  {
    name: "Ke-MLS",
    description:
      "Co-creator of a large-scale labeled mobile LiDAR dataset for the Indian urban region.",
    url: "https://lidaverse.com/datasets/?id=9",
  },
  {
    name: "Street-View Imagery Human Perception",
    description:
      "Code for street-view imagery human-perception modeling and pedestrian-oriented route planning (svi_perception).",
    url: "https://github.com/geoai4cities/svi_perception",
  },
  {
    name: "LiDAR Subsampling Benchmark",
    description:
      "Benchmark code for subsampling strategies in LiDAR semantic segmentation (LiDAR-Subsampling-Benchmark).",
    url: "https://github.com/geoai4cities/LiDAR-Subsampling-Benchmark",
  },
  {
    name: "Urban Multi-Domain Mixing (UMDMix)",
    description:
      "Code for unsupervised domain adaptation in LiDAR semantic segmentation via urban multi-domain mixing (umdmix-uda).",
    url: "https://github.com/geoai4cities/umdmix-uda",
  },
  {
    name: "Reasoning from Scratch",
    description:
      "A from-scratch implementation exploring reasoning in large language models (reasoning-from-scratch).",
    url: "https://github.com/pyarelalchauhan/reasoning-from-scratch",
  },
];

export const venture = {
  name: "Netrica.AI",
  legalName: "Netrica Pvt. Ltd.",
  role: "Founder",
  logo: "/images/netrica-logo.png",
  incubator:
    "IISER Bhopal (IICE) and IISER Pune (AIC) incubation centres",
  period: "Feb 2026 - Present",
  tagline:
    "An early-stage AI venture building applied-intelligence solutions for urban planning, incubated at IISER Bhopal and IISER Pune.",
  // Photos of the venture's early journey.
  images: [
    {
      src: "/images/netrica-commencement.jpg",
      alt: "Netrica.AI commencement at IICE, IISER Bhopal",
      caption: "Commencement at IICE, IISER Bhopal",
    },
    {
      src: "/images/netrica-sig-grant.jpg",
      alt: "Receiving the SIG grant at the Industry-Academia Conclave",
      caption: "SIG grant, Industry-Academia Conclave",
    },
    {
      src: "/images/netrica-aic-iiserpune.jpg",
      alt: "Recognition at the Atal Incubation Centre (AIC), IISER Pune",
      caption: "Atal Incubation Centre (AIC), IISER Pune",
    },
  ] as { src: string; alt: string; caption?: string }[],
};

export interface Experience {
  title: string;
  org: string;
  orgUrl?: string;
  period: string;
  points: string[];
  advisor?: { name: string; url?: string };
}

export const experience: Experience[] = [
  {
    title: "Doctoral Researcher",
    org: "GeoAI4Cities Lab, IISER Bhopal",
    orgUrl: profile.affiliation.labUrl,
    period: "Aug 2022 - Present",
    advisor: {
      name: profile.affiliation.advisor,
      url: profile.affiliation.advisorUrl,
    },
    points: [
      "Deep learning for LiDAR semantic segmentation in urban environments; emergency-vehicle accessibility mapping using 3D geospatial data.",
      "Cross-city perception modeling (Mumbai-Paris) and multi-source 2D/3D fusion for urban quality-of-life with a Global-South corrective framing.",
      "Unsupervised domain adaptation for cross-domain LiDAR semantic segmentation.",
    ],
  },
  {
    title: "M.Tech. Research",
    org: "IIST Thiruvananthapuram",
    orgUrl: "https://iist.ac.in/",
    period: "2020 - 2022",
    advisor: {
      name: "Dr. A. M. Ramiya",
      url: "https://sites.google.com/view/ramiya-iist",
    },
    points: [
      "Semantic segmentation of airborne LiDAR with deep learning (RandLA-Net, PointNet++); addressed class-imbalance in ALS classification.",
    ],
  },
  {
    title: "Research Intern",
    org: "Indian Institute of Soil & Water Conservation (IISWC), Dehradun",
    orgUrl: "https://iiswc.icar.gov.in/",
    period: "Jun 2022 - Aug 2022",
    points: [
      "Land-use / land-cover classification and change detection on Sentinel-2 and Landsat imagery; NDVI/EVI time-series workflows on Google Earth Engine.",
    ],
  },
  {
    title: "Data Science Intern",
    org: "GalaxEye Pvt. Ltd., Chennai",
    orgUrl: "https://galaxeye.space/",
    period: "Feb 2022 - May 2022",
    points: [
      "Road-network detection and pre-fire risk prediction using Sentinel-1 (SAR) and Sentinel-2 (optical) imagery; vegetation-cover-change pipelines in Python.",
    ],
  },
];

export const teaching = {
  role: "Teaching Assistant, IISER Bhopal",
  courses: [
    { name: "Artificial Intelligence (DSE313)", url: "https://github.com/pyarelalchauhan/DSE313_AI" },
    { name: "Spatial Data Science (DSE416)" },
    { name: "Accelerated Applied AI" },
    { name: "Applied Optimization" },
  ] as { name: string; url?: string }[],
};

export interface Education {
  degree: string;
  institute: string;
  location: string;
  field: string;
  period: string;
  grade: string;
  logo: string;
}

export const education: Education[] = [
  {
    degree: "Ph.D.",
    institute: "Indian Institute of Science Education and Research",
    location: "Bhopal, Madhya Pradesh",
    field: "Data Science and Engineering",
    period: "2022 - Present",
    grade: "CGPA 9.0",
    logo: "/images/iiserb.png",
  },
  {
    degree: "M.Tech.",
    institute: "Indian Institute of Space Science and Technology",
    location: "Thiruvananthapuram, Kerala",
    field: "Geoinformatics",
    period: "2020 - 2022",
    grade: "CGPA 8.69",
    logo: "/images/iisst.png",
  },
  {
    degree: "B.Tech.",
    institute: "SRM University",
    location: "Chennai, Tamil Nadu",
    field: "Civil Engineering",
    period: "2012 - 2016",
    grade: "CGPA 9.17",
    logo: "/images/srm.png",
  },
];

export interface Award {
  title: string;
  detail: string;
  year: string;
  url?: string;
}

export const awards: Award[] = [
  {
    title: "First Prize, IEEE-GRSS Student Hackathon",
    detail: "Winner at the IEEE GRSS Student Hackathon, Bangalore.",
    year: "2023",
    url: "https://www.linkedin.com/posts/pyarelaldse_ieeegrss-banglore-sustainabledevelopmentgoals-activity-7058733838289506304-QLcW",
  },
  {
    title: "Top 5, DST-SOI-Microsoft Geospatial Research Hackathon",
    detail: "Top-5 team in the Geospatial Research Hackathon, IIIT Hyderabad.",
    year: "2023",
    url: "https://www.indianweb2.com/2023/06/winners-of-dst-geospatial-hackathon-2023.html",
  },
  {
    title: "ACM India Anveshan Setu Fellowship",
    detail: "Selected for the ACM India Anveshan Setu Fellowship.",
    year: "2023",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7024619832989954048",
  },
  {
    title: "Travel Grant, IndoML Symposium",
    detail: "Travel grant for the IndoML Symposium, IIT Gandhinagar.",
    year: "2022",
  },
];

export interface Writing {
  title: string;
  description: string;
  url: string;
}

// Currently on Notion, swap these for your own blog once migrated.
export const writing: Writing[] = [
  {
    title: "Docker setup & NVIDIA toolkit installation",
    description:
      "A practical guide to setting up Docker with GPU support for deep learning workflows.",
    url: "https://pyarelaldse.notion.site/Docker-Documentation-fbc0fecd5a6e42be953a823ae92fc4bd",
  },
  {
    title: "Notes & blog",
    description: "Assorted technical notes and writing.",
    url: "https://pyarelaldse.notion.site/My-Blogs-ef674d95d3cb44c3b318d96e25f33aad",
  },
];

export const skills: { label: string; items: string }[] = [
  { label: "Programming", items: "Python, MATLAB" },
  { label: "Deep Learning", items: "PyTorch, TensorFlow, Point Cloud Networks" },
  { label: "Geospatial", items: "Google Earth Engine, QGIS, ArcGIS, CloudCompare, Open3D" },
  { label: "Remote Sensing", items: "Sentinel-2, Landsat, Sentinel-1 SAR, LiDAR (ALS/MLS) processing" },
  { label: "Tools", items: "Git, Docker, LaTeX, Linux" },
  { label: "Languages", items: "Hindi (native), English (professional)" },
];

// Google Drive folder with PDFs of all papers (from the CV).
export const allPapersUrl =
  "https://drive.google.com/drive/folders/1M7FkledowRbZmnEr-FXBjfBJQgA9Gkpp";

export const siteUrl = "https://pyarelalchauhan.github.io";
