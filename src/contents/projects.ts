import { Project } from "@/types";


export const projects: Project[] = [
    {
        title: 'E-commerce Platform',
        description: "Built a microservices-based e-commerce platform using Spring Boot and React. Features include Kafka-based event-driven architecture, Keycloak OAuth2, and Grafana for observability.",
        technologies: [ "Spring Boot",
          "React.js",
          "Kafka",
          "Keycloak",
          "Grafana",
          "MongoDB",
          "MySQL",
          "Docker"],
        githubLink: 'https://github.com/chandima2000/E-Commerce-Platform',
        demoLink: '',
        image: './projects/e-commerce.png',
      },
      {
        title: "AI-Powered Career Path Recommendation System",
        description:
          "Developed a career guidance system using React and Django. Integrated an ML model using Scikit-learn for personalized career predictions, sentiment analysis with NLTK, voice interaction, and chatbot via LangChain and FAISS.",
        technologies: [
          "React.js",
          "Redux",
          "Django",
          "Three.js",
          "Python",
          "Scikit-learn",
          "FAISS",
          "SQLite",
          "NLTK",
          "Langchain",
          "LLM"
        ],
        image: "./projects/career.png",
        githubLink: "https://github.com/chandima2000/career-path-recommendation-system",
        demoLink: "" 
      },
      {
        title: "My Portfolio Website",
        description:
          "A fully responsive personal portfolio website built with Next.js and Tailwind CSS. Showcases my projects, skills, education, and publications with smooth animations using Framer Motion. Features dark mode, mobile responsiveness, and a clean modern design.",
        technologies: [
          "Next.js",
          "React",
          "Tailwind CSS",
          "Framer Motion",
          "TypeScript"
        ],
        image: "./projects/portfolio.png", 
        githubLink: "https://github.com/chandima2000/my-portfolio", 
        demoLink: "https://your-portfolio-url.com" 
      },      
      {
        title: "Real Estate Marketplace",
        description:
          "Built a MERN stack real estate app with Firebase Auth and Storage. Users can perform CRUD operations on property listings. Redux Toolkit used for state management.",
        technologies: [
          "MongoDB",
          "Express.js",
          "React.js",
          "Node.js",
          "Firebase",
          "Redux Toolkit"
        ],
        image: "./projects/real-estate.png",
        githubLink: "https://github.com/chandima2000/Real-Estate-MarketPlace",
        demoLink: "https://real-estate-market-web.onrender.com/"
      },
      {
        title: "Pet Store Management Project",
        description:
          "A full-stack CRUD application using React and ASP.NET Core Web API. Integrated Entity Framework Core with SQL Server, with a responsive UI via MUI and SASS.",
        technologies: [
          "React.js",
          "ASP.NET Core",
          "SQL Server",
          "Entity Framework Core",
          "Material-UI",
          "SASS"
        ],
        image: "./projects/pet-store.png",
        githubLink: "https://github.com/chandima2000/pet-store-react-dotnet",
        demoLink: ""
      },
      {
        title: "Faculty Management System",
        description:
          "A Windows Form C# application to manage faculty data. Included admin login, and CRUD operations with SQL Server for data storage.",
        technologies: ["C#", ".NET Framework", "Windows Forms", "SQL Server"],
        image: "./projects/faculty.png",
        githubLink: "https://github.com/chandima2000/faculty-management-system",
        demoLink: ""
      },
  ];