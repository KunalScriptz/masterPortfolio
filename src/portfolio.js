/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kunal's Portfolio",
  description:
    "I build impactful end-to-end solutions, specializing in sustainable social and technical systems and Generative AI. Expertise in RAG, LLM frameworks, and LLMOps from development to deployment.",
  og: {
    title: "Kunal's Portfolio",
    type: "website",
    url: "https://kunalx-is.a.dev/",
  },
};

//Home Page
const greeting = {
  title: "Kunal K",
  logo_name: "Kunal",
  nickname: "KunalScriptz",
  subTitle:
    "I build impactful end-to-end solutions, specializing in sustainable social and technical systems and Generative AI. Expertise in RAG, LLM frameworks, and LLMOps from development to deployment.",
  resumeLink:
    "https://drive.google.com/file/d/1TP2X0EdEHfzcDvnGWsgMa_Je-_fwmu0L/view?usp=sharing",
  portfolio_repository: "https://github.com/KunalScriptz",
  githubProfile: "https://github.com/KunalScriptz",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/KunalScriptz",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kunal152001/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:kunal1520018@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/Kunal_2001x/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Leveraging LLM frameworks (LangChain, LlamaIndex, CrewAI) for Gen AI solutions",
        "⚡ Experience in Computer Vision and NLP projects, including fine-tuning models and developing applications",
        "⚡ Developing predictive models to forecast output based on real-time interval data",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    // {
    //   title: "Full Stack Development",
    //   fileName: "FullStackImg",
    //   skills: [
    //     "⚡ Building responsive website front end using React-Redux",
    //     "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
    //     "⚡ Creating application backend in Node, Express & Flask",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "HTML5",
    //       fontAwesomeClassname: "simple-icons:html5",
    //       style: {
    //         color: "#E34F26",
    //       },
    //     },
    //     {
    //       skillName: "CSS3",
    //       fontAwesomeClassname: "fa-css3",
    //       style: {
    //         color: "#1572B6",
    //       },
    //     },
    //     {
    //       skillName: "Sass",
    //       fontAwesomeClassname: "simple-icons:sass",
    //       style: {
    //         color: "#CC6699",
    //       },
    //     },
    //     {
    //       skillName: "JavaScript",
    //       fontAwesomeClassname: "simple-icons:javascript",
    //       style: {
    //         backgroundColor: "#000000",
    //         color: "#F7DF1E",
    //       },
    //     },
    //     {
    //       skillName: "ReactJS",
    //       fontAwesomeClassname: "simple-icons:react",
    //       style: {
    //         color: "#61DAFB",
    //       },
    //     },
    //     {
    //       skillName: "NodeJS",
    //       fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
    //       style: {
    //         color: "#339933",
    //       },
    //     },
    //     {
    //       skillName: "NPM",
    //       fontAwesomeClassname: "simple-icons:npm",
    //       style: {
    //         color: "#CB3837",
    //       },
    //     },
    //     {
    //       skillName: "Yarn",
    //       fontAwesomeClassname: "simple-icons:yarn",
    //       style: {
    //         color: "#2C8EBB",
    //       },
    //     },
    //     {
    //       skillName: "Gatsby",
    //       fontAwesomeClassname: "simple-icons:gatsby",
    //       style: {
    //         color: "#663399",
    //       },
    //     },
    //     {
    //       skillName: "Flutter",
    //       fontAwesomeClassname: "simple-icons:flutter",
    //       style: {
    //         color: "#02569B",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms and On-prem Machine H100 GPUs",
        "⚡ Orchestrating and managing containerized applications using Kubernetes (K8s)",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud.",
        "⚡ Implementing Azure DevOps pipelines for continuous integration and continuous deployment (CI/CD)",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/kunal1520018",
    },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/kunal1505",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "VIT University, Vellore",
      subtitle: "Master's in Software Engineering (Dual Degree)",
      logo_path: "vit_logo3.png",
      alt_name: "VIT",
      duration: "2018 - 2023",
      descriptions: [
        "⚡ I have studied core & advanced software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I had also participated in Hackathon events in University (VinnovateIT).",
      ],
      website_link: "https://vit.ac.in",
    },
    // {
    //   title: "Indiana University Bloomington",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Getting Started with Deep Learning",
      subtitle: "- Nvidia",
      logo_path: "NVLogo_2D_thmb.png",
      certificate_link:
        "https://learn.nvidia.com/certificates?id=wm4TO4tQQwKiToZ8El4DoA",
      alt_name: "Nvidia Academy",
      color_code: "#FFFFFF",
    },
    {
      title: "Neo4j Certified Professional",
      subtitle: "- Neo4j",
      logo_path: "Neo4j-logo_color.png",
      certificate_link:
        "https://graphacademy.neo4j.com/u/89e72221-8d3f-440b-b3c4-cb0d86bf6284/neo4j-certification/",
      alt_name: "Neo4j",
      color_code: "#FFFFFF",
    },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#FFFFFF",
    // },
    {
      title: "AI Infrastructure and Operations Fundamentals",
      subtitle: "- Nvidia",
      logo_path: "NVLogo_2D_thmb.png",
      certificate_link:
        "https://drive.google.com/file/d/1wOTz1LoZr4WGyigMSoC6iW3A-opn8sTL/view?usp=sharing",
      alt_name: "Nvidia Academy",
      color_code: "#FFFFFF",
    },
    {
      title: "Fundamentals of Accelerated Computing with CUDA Python",
      subtitle: "- Nvidia",
      logo_path: "NVLogo_2D_thmb.png",
      certificate_link:
        "https://learn.nvidia.com/certificates?id=p7czaswqTLqUsIRtROneSA",
      alt_name: "Nvidia Academy",
      color_code: "#FFFFFF",
    },
    {
      title: "Big Data (BDA) Foundation",
      subtitle: "- NASSCOM FutureSkills",
      logo_path: "FUTURESKILLS_LOGO.png",
      certificate_link:
        "https://fsp-assessment-certificates.s3-ap-southeast-1.amazonaws.com/KunalK-65124849.pdf",
      alt_name: "FUTURESKILLS_LOGO",
      color_code: "#FFFFFF",
    },
    {
      title: "AWS Cloud Quest: Cloud Practitioner",
      subtitle: "- Amazon Web Services Training and Certification",
      logo_path: "Amazon_Web_Services_Logo.png",
      certificate_link:
        "https://www.credly.com/badges/c7853675-32e4-424f-87ec-929da00ee3be/linked_in_profile",
      alt_name: "AWS",
      color_code: "#FFFFFF",
    },
    {
      title: "Generative AI Fundamentals",
      subtitle: "- Databricks",
      logo_path: "Databricks_Logo.png",
      certificate_link:
        "https://credentials.databricks.com/7287ca48-1420-4be0-9330-324cd605519b",
      alt_name: "Databricks",
      color_code: "#FFFFFF",
    },

    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.credly.com/badges/5ce3c251-7cb7-42d3-9615-60da590a7868?source=linked_in_profile",
      alt_name: "Microsoft",
      color_code: "#FFFFFF",
    },
    {
      title: "Microsoft Certified: Power Platform Fundamentals",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.credly.com/badges/4f3af0b1-c826-40a9-866c-48cc53c4dc7b",
      alt_name: "Microsoft",
      color_code: "#FFFFFF",
    },
    {
      title: "Databases and SQL for Data Science with Python",
      subtitle: "- coursera",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/NRNX2FRMHEVB",
      alt_name: "www.coursera.org",
      color_code: "#FFFFFF",
    },

    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Started my professional journey as an intern and earned a Pre-Placement Offer (PPO) through consistent performance and impactful contributions. Since then, I've been working as a Data Scientist, specializing in building scalable Generative AI solutions, RAG pipelines, and deploying LLMs in production environments. Passionate about solving real-world problems with AI and delivering end-to-end intelligent systems.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Data Scientist",
          company: "Worley",
          company_url: "https://www.worley.com/",
          logo_path: "worley_logo.png",
          duration: "June 2023 - Present",
          location: "Navi Mumbai, India",
          description:
            "Led development of enterprise-grade Retrieval-Augmented Generation (RAG) systems, integrating vector databases and Azure OpenAI to enhance information retrieval.  Developed an Embeddings as a Service (EaaS) pipeline for live data, ensuring real-time updates in the vector database to maintain up-to-date information for RAG applications. Leveraged NVIDIA H100 GPUs in an on-prem cluster to self-host LLMs, embedding models, and reranker models from Nvidia NIM. Processed unstructured data, leveraging Generative AI to extract specific information from large volumes of documents and comparing it with user-provided information.",
          color: "#000000",
        },
        // {
        //   title: "Associate AI Engineer",
        //   company: "Legato Health Technology",
        //   company_url: "https://legatohealthtech.com/",
        //   logo_path: "legato_logo.png",
        //   duration: "June 2020 - Aug 2021",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
        //   color: "#0879bf",
        // },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Scientist Intern",
          company: "Worley",
          company_url: "https://www.worley.com/",
          logo_path: "worley_logo.png",
          duration: "Sept 2022 - May 2023",
          location: "Navi Mumbai, India",
          description:
            "Developed predictive models to forecast output based on real time interval data. Conducted exploratory data analysis (EDA) with data cleaning, visualization, and correlation analysis. I had also Conducted sentiment analysis on user feedback data using NLP techniques to classify feedback as positive, neutral, or negative. Developed an AI Chatbot using MS Copilot Studio and Azure OpenAI API and also Implemented Open AI moderation to ensure compliance with policies and user input standards.",
          color: "#000000",
        },
        // {
        //   title: "Data Science Research Intern",
        //   company: "Delhivery Pvt. Ltd.",
        //   company_url: "https://www.delhivery.com/",
        //   logo_path: "delhivery_logo.png",
        //   duration: "May 2019 - Sept 2019",
        //   location: "Gurgaon, Haryana",
        //   description:
        //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //   color: "#ee3c26",
        // },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        // {
        //   title: "Google Explore ML Facilitator",
        //   company: "Google",
        //   company_url: "https://about.google/",
        //   logo_path: "google_logo.png",
        //   duration: "June 2019 - April 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
        //   color: "#4285F4",
        // },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2021 - PRESENT",
          location: "Work From Home",
          description:
            "Actively contributing to open-source projects across the AI and developer tooling ecosystem. Contributions include popular projects like LibreChat and an AI-powered file organizer. Also built personal projects such as an AI chatbot integrated with Telegram using Ollama, showcasing hands-on experience with LLMs and messaging APIs.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "coder-animated.png",
    description:
      "I am available on almost every social media, so you can message me and I will reply within 12 hours. I can help you with ML, AI, CloudOps, LLMOps, Opensource Development, Architect Design planning for your usecase.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://medium.com/@kunal1520018",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Mumbai, Maharashtra, India",
    locality: "Maharashtra",
    country: "India",
    region: "Mumbai",
    postalCode: "421204",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/z3kbcF455gjbMFzt5",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
