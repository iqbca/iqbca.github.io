const platforms = {

  hero: {

    badge: "PLATFORMS",

    title: [
      "Enterprise",
      "Platforms",
    ],

    description:
      "A collection of enterprise-grade platforms designed for investment analytics, workflow automation and financial technology. Each platform demonstrates practical solutions built using modern software engineering principles.",

  },

  platforms: [

    {

      name: "MIZAN Analytics",

      route: "/platforms/mizan",

      status: "Production Project",

      category: "Investment Analytics Platform",

      description:
        "Institutional portfolio analytics platform built using Python, PostgreSQL, React and Power BI. Designed for investment performance reporting, benchmark comparison, attribution analysis and portfolio analytics.",

      technologies: [

        "Python",
        "PostgreSQL",
        "React",
        "Power BI",
        "SQL",
        "Chart.js",

      ],

      color: "from-blue-600 to-cyan-500",

    },

    {

      name: "AI Trading Signal System",

      route: "/platforms/signal-system",

      status: "Research Platform",

      category: "Market Intelligence",

      description:
        "Artificial Intelligence driven market monitoring platform generating actionable trading signals using technical indicators, sentiment analysis and automated workflows.",

      technologies: [

        "Python",
        "Machine Learning",
        "APIs",
        "SQL",
        "Automation",

      ],

      color: "from-cyan-500 to-emerald-500",

    },

    {

      name: "Workflow Automation",

      route: "#",

      status: "Internal Tools",

      category: "Automation Suite",

      description:
        "Collection of VBA, Python and SQL automation utilities built to eliminate repetitive operational tasks and improve reporting efficiency.",

      technologies: [

        "Python",
        "VBA",
        "Excel",
        "SQL",

      ],

      color: "from-indigo-500 to-blue-600",

    },

  ],

};

export default platforms;