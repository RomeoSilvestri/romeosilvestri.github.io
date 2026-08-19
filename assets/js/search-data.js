// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A selection of professional and academic projects across a variety of topics and application areas.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Research publications and ongoing manuscripts spanning machine learning, intelligent decision support, environmental modelling, and applied AI. Entries are grouped by publication status and include abstracts, full texts, and external records where available.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Here you can find my current Resume, highlighting my education, experience, and skills. The CV is regularly updated to reflect my latest achievements. You can also download a PDF version for your convenience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-finishing-my-studies-and-some-thoughts",
          title: 'Finishing my studies and some thoughts',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-started-working-as-a-researcher-at-fbk",
          title: 'Started working as a Researcher at FBK',
          description: "",
          section: "News",},{id: "news-published-my-first-conference-paper",
          title: 'Published my first conference paper',
          description: "",
          section: "News",},{id: "news-published-my-first-journal-article",
          title: 'Published my first journal article',
          description: "",
          section: "News",},{id: "projects-ai-agents-for-agritech",
          title: 'AI Agents for Agritech',
          description: "An advanced Multi-Agent Assistant leveraging AI agents, APIs, and RAG for precise agricultural insights.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/agrigraph/";
            },},{id: "projects-migration-amp-demographics",
          title: 'Migration &amp;amp; Demographics',
          description: "Bachelor&#39;s Thesis analyzing the statistical impact of international migration flows on the demographic structure of Italian provinces.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bachelor_thesis/";
            },},{id: "projects-bi-financial-dashboard",
          title: 'BI Financial Dashboard',
          description: "End-to-end design and implementation of an interactive Power BI dashboard for executive financial reporting.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dashboard/";
            },},{id: "projects-dss-for-irrigation",
          title: 'DSS for Irrigation',
          description: "Development and comparative evaluation of Fuzzy Logic (Mamdani) and Neuro-Adaptive (ANFIS) decision support systems for agriculture.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dss_irrigation/";
            },},{id: "projects-iot-data-analysis",
          title: 'IoT Data Analysis',
          description: "Classical data analysis project focused on data quality assessment and validation of an automated irrigation algorithm.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ifarming/";
            },},{id: "projects-census-quality-framework",
          title: 'Census Quality Framework',
          description: "Data quality assessment and weighting methodology for the Italian Integrated System of Registers (SIR) based on the Austrian Framework.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/istat/";
            },},{id: "projects-real-estate-forecasting",
          title: 'Real Estate Forecasting',
          description: "Master&#39;s Thesis on comparative analysis between Spatial Econometrics and Machine Learning models for housing price prediction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/master_thesis/";
            },},{id: "projects-nba-database-architecture",
          title: 'NBA Database Architecture',
          description: "Comprehensive database design project comparing Relational (SQL) and NoSQL paradigms for managing NBA sports analytics data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nba/";
            },},{id: "projects-prisma-review-with-llm-amp-rag",
          title: 'PRISMA Review with LLM &amp;amp; RAG',
          description: "Research framework designed to automate and standardize the systematic literature review process according to PRISMA 2020.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/prisma/";
            },},{id: "projects-reinforcement-learning",
          title: 'Reinforcement Learning',
          description: "A PPO agent trained in a crop-soil digital twin to learn weather-aware irrigation policies from limited field data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/reinforcement_learning/";
            },},{id: "projects-time-series-forecasting",
          title: 'Time Series Forecasting',
          description: "Time-series forecasting project comparing Statistical Models (ARIMAX) and Machine Learning for soil water content prediction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/soil_ml/";
            },},{id: "projects-full-mlops-workflow",
          title: 'Full MLOps Workflow',
          description: "Advanced data integration and predictive modeling for precision irrigation using physical and machine learning approaches.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/soilcast/";
            },},{id: "projects-spatial-interpolation",
          title: 'Spatial Interpolation',
          description: "Comparative analysis of geostatistical algorithms to transform sparse sensor data into continuous surface maps.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sp_interp/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/RomeoSilvestri_Resume_2026.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%69%6C%76%65%72%6F%6D%65%6F%39%38@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/RomeoSilvestri", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/_rom_e_o_", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/romeo-silvestri", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0008-3082-8227", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=w0nDyMYAAAAJ&hl", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
