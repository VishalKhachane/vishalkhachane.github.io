const calculateExperience = () => {
  const startDate = new Date('2020-01-01');
  const currentDate = new Date();

  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (months >= 6) {
    return `${years}.5+`;
  }
  return `${years}+`;
};

export const portfolioData = {
  personalInfo: {
    name: "Vishal Khachane",
    role: "Full Stack .NET Developer",
    experienceYears: calculateExperience(),
    email: "vishalkhachane111@gmail.com",
    phone: "+91-9975426190",
    location: "Pune, India",
    birthDate: "8 June 1994",
    socials: {
      linkedin: "https://www.linkedin.com/in/vishal-khachanne-4a7703194",
      github: "https://github.com/vishalkhachane?tab=repositories",
      whatsapp: "https://wa.me/919975426190"
    },
    heroDescription: `${calculateExperience()} years of experience crafting enterprise web applications with C#, ASP.NET Core, Angular, React, Docker and cloud-native solutions.`,
    about: [
      `Results-driven <strong>Full Stack Developer</strong> with <strong>${calculateExperience()} years</strong> of hands-on experience in designing, developing, and maintaining enterprise-level web applications using <strong>C#, ASP.NET, .NET Core, and the Microsoft technology stack</strong>. Proficient in <strong>ASP.NET Core MVC, RESTful APIs</strong>, and modern web development frameworks. Demonstrated expertise in <strong>HTML5, CSS3, JavaScript, jQuery, AJAX, Bootstrap, Angular 14+, and React Js</strong> for responsive UI/UX design.`,
      `Skilled in <strong>SQL Server</strong> for database development, optimization, and performance tuning. Proven ability to integrate AI technologies such as <strong>OpenAI API and Google Gemini API</strong> into scalable applications.`
    ]
  },
  stats: [
    { number: calculateExperience(), label: "Years Experience" },
    { number: "6+", label: "Projects Delivered" },
    { number: "5+", label: "Tech Stacks" }
  ],
  skills: {
    programming: ["C#", "ASP.NET", "ASP.NET MVC", ".NET Core"],
    web: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Angular 14+", "React Js"],
    database: ["SQL Server", "MySQL"],
    frameworks: ["ASP.NET MVC", ".NET Core Web API", "LINQ", "Entity Framework"],
    cloudDevops: ["Azure DevOps", "CI/CD Pipelines", "Agile / Scrum", "Docker"],
    aiTools: ["OpenAI API", "Google Gemini API", "GitHub Copilot", "Cursor IDE"]
  },
  experience: [
    {
      company: "Fujitsu",
      role: "Associate Application Developer (.NET)",
      period: "May 2023 – Present",
      points: [
        "Developed and maintained web applications using .NET Core Web API, C#, and SQL Server.",
        "Designed relational databases, optimized queries, and ensured data integrity.",
        "Integrated responsive UI components with HTML5, CSS3, JavaScript, Angular, and React.",
        "Collaborated on module integration and conducted comprehensive application flow testing.",
        "Gathered client requirements and performed periodic software upgrades and feature enhancements."
      ]
    },
    {
      company: "Tata Consultancy Services (TCS)",
      role: "Assistant System Analyst (.NET)",
      period: "May 2022 – Apr 2023",
      points: [
        "Designed and developed secure, scalable web applications using .NET Core Web API and C#.",
        "Created and maintained relational databases with stored procedures and triggers.",
        "Implemented client-side features and UI integration based on business needs.",
        "Executed module-level integration and end-to-end system testing.",
        "Participated in requirements gathering in agile development cycles."
      ]
    },
    {
      company: "JRK Infotech",
      role: "Microsoft .NET Developer",
      period: "Dec 2021 – Apr 2022",
      points: [
        "Built and maintained .NET Core web applications with RESTful APIs and SQL Server back-end.",
        "Conducted database modeling, indexing, and optimization for performance.",
        "Aligned front-end features with client requirements and corporate standards.",
        "Conducted integration and unit testing for deployed modules.",
        "Managed requirement updates and performed system maintenance and debugging."
      ]
    },
    {
      company: "CDAC",
      role: "Project Associate (Software Engineer)",
      period: "Jan 2020 – Dec 2021",
      points: [
        "Developed and supported C# .NET-based web applications for online exam platforms.",
        "Handled full-stack development including database creation, server-side logic, and testing.",
        "Conducted requirement analysis and managed continuous improvement of software components.",
        "Ensured quality delivery of modules with test coverage and system validations."
      ]
    }
  ],
  projects: [
    {
      title: "Enterprise Automated Configuration Platform",
      duration: "Apr 2026 – Present",
      tech: [".NET Core Web API", "C#", "React Js", "SQL Server", "Microservices", "Docker"],
      desc: "Scalable microservices-based web application for industrial automation hardware configuration, BOM generation, and product cross-referencing.",
      points: [
        "Developed RESTful APIs using .NET Core Web API and C#.",
        "Designed responsive UI components with React Js.",
        "Built Microservices for product configuration and BOM generation.",
        "Participated in Agile ceremonies and code reviews."
      ]
    },
    {
      title: "Banking Internal Management System",
      duration: "Apr 2025 – Mar 2026",
      tech: ["ASP.NET MVC", ".NET Core Web API", "Angular", "SQL Server"],
      desc: "Secure internal banking application automating workflow management, user role assignment, and task monitoring.",
      points: [
        "Developed secure web modules with ASP.NET MVC and .NET Core Web API.",
        "Designed responsive front-end using Angular, HTML, CSS, and Bootstrap.",
        "Implemented role-based authentication and authorization.",
        "Managed source code using TFS and Git."
      ]
    },
    {
      title: "AI-Powered File Comparison System",
      duration: "Oct 2024 – Mar 2025",
      tech: ["ASP.NET MVC", ".NET Core Web API", "GPT-4", "Gemini 1.5 Pro", "Azure DevOps", "Docker"],
      desc: "AI-powered platform comparing PDF, Excel, CSV, JSON, Images, and Text files with intelligent reporting.",
      points: [
        "Developed REST APIs and backend services with .NET Core Web API.",
        "Integrated GPT-4 and Gemini 1.5 Pro APIs for content analysis.",
        "Built CI/CD pipelines using Azure DevOps.",
        "Generated AI-powered comparison reports for auditing and validation."
      ]
    },
    {
      title: "Automobile ERP Solution System",
      duration: "May 2023 – Sep 2024",
      tech: ["ASP.NET MVC", ".NET Core Web API", "SQL Server", "Azure DevOps"],
      desc: "Enterprise ERP solution for the automobile industry managing inventory, orders, employees, and service records.",
      points: [
        "Developed ERP modules using ASP.NET MVC and .NET Core Web API.",
        "Designed employee and client portal functionalities.",
        "Developed SQL Server database schemas, stored procedures, and reports.",
        "Collaborated with business teams to implement functional requirements."
      ]
    },
    {
      title: "Banking Finance Management System",
      duration: "Apr 2025 – Mar 2026",
      tech: ["ASP.NET MVC", ".NET Core Web API", "Angular", "SQL Server"],
      desc: "Internal banking management application automating workflows, role assignment, and task monitoring.",
      points: [
        "Developed secure web modules with ASP.NET MVC and .NET Core Web API.",
        "Designed responsive front-end with Angular, HTML, CSS, and Bootstrap.",
        "Implemented role-based authentication and authorization.",
        "Managed source code using Azure Git."
      ]
    },
    {
      title: "Examination Management System",
      duration: "Jan 2020 – Dec 2021",
      tech: ["ASP.NET Web Forms", "C#", "SQL Server", "JavaScript"],
      desc: "Centralized web application for CDAC managing website administration and online examination processes.",
      points: [
        "Built examination workflows including registration, payment, and admit card generation.",
        "Developed dynamic pages using JavaScript and AJAX.",
        "Designed and optimized SQL Server database objects.",
        "Performed bug fixing, maintenance, and performance improvements."
      ]
    }
  ],
  education: [
    {
      degree: "PG-DAC",
      institute: "CDAC, Pune",
      year: "2019"
    },
    {
      degree: "MBA – Operations Management",
      institute: "AISSMS Institute of Management, Pune",
      year: "2019"
    },
    {
      degree: "B.E. – Electrical Engineering",
      institute: "JSPM College of Engineering, Pune",
      year: "2016"
    }
  ],
  services: [
    {
      title: "Enterprise Web Development",
      desc: "Developing robust and scalable enterprise-level applications utilizing ASP.NET Core, MVC, and C#.",
      icon: "code"
    },
    {
      title: "API Development & Integration",
      desc: "Designing secure, high-performance RESTful APIs and Microservices using .NET Core Web API.",
      icon: "server"
    },
    {
      title: "Full Stack Solutions",
      desc: "Building end-to-end applications seamlessly integrating SQL Server backends with Angular or React frontends.",
      icon: "layer-group"
    },
    {
      title: "AI Integration",
      desc: "Enhancing applications with AI capabilities leveraging OpenAI GPT-4 and Google Gemini APIs.",
      icon: "brain"
    }
  ]
};
