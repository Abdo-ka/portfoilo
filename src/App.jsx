import { useState } from "react";
import "./App.css";
import {
  FaCode,
  FaDatabase,
  FaGitAlt,
  FaProjectDiagram,
  FaGithub,
} from "react-icons/fa";
import assets from "./assets/my_image.jpg";
import {
  SiFirebase,
  SiFlutter,
  SiSwagger,
  SiMailboxdotorg,
} from "react-icons/si";
import CardItem from "./carditems";

function App() {
  const [isHovering, setIsHovering] = useState(false);

  const skillsData = [
    {
      icon: <SiFlutter />,
      title: "Flutter Development",
      description: "Building custom widgets and more.",
      skills: [
        "Building custom widgets",
        "Implementing user interfaces and experiences",
        "Utilizing Flutter packages and plugins",
        "State Management: BLoC, Cubit, Provider",
      ],
    },
    {
      icon: <FaCode />,
      title: "Programming",
      description: "Languages and paradigms.",
      skills: ["Dart (OOP, SOLID Principles)", "Node.js", "Kotlin"],
    },
    {
      icon: <SiSwagger />,
      title: "API Integration",
      description: "Working with APIs and tools.",
      skills: ["RESTful APIs", "Tools: Swagger, Postman"],
    },
    {
      icon: <SiFirebase />,
      title: "Firebase",
      description: "Working with Firebase services.",
      skills: [
        "Notifications",
        "Authentication",
        "Crashlytics",
        "Dynamic Links",
      ],
    },
    {
      icon: <FaDatabase />,
      title: "Storage",
      description: "Managing data storage.",
      skills: ["Shared Preferences", "Drift", "Secure Shared Preferences"],
    },
    {
      icon: <FaGitAlt />,
      title: "Version Control",
      description: "Code collaboration tools.",
      skills: ["GitHub, GitLab", "CodeMagic (CI/CD)"],
    },
    {
      icon: <FaProjectDiagram />,
      title: "Project Management",
      description: "Organizing and managing projects.",
      skills: ["Trello, Jira", "Design Patterns: TDD, MVVM, MVC"],
    },
  ];

  const handleHover = (hovering) => {
    setIsHovering(hovering);
  };

  return (
    <div className="app">
      <div className={`card ${isHovering ? "hover-effect" : ""}`}>
        <div className="titleWithImage">
          <h2 className="title">Abd Alrahman Kanawati</h2>
          <img src={assets} alt="logo" className="image" />
        </div>
        <h5 className="description">Mobile Application Developer</h5>
        <h3>Skills</h3>
        <div className="skills-section">
          {skillsData.map((item, index) => (
            <CardItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              skills={item.skills}
              onHover={handleHover}
            />
          ))}
        </div>
        <div className="buttonBetween">
          <button
            className="button"
            onClick={() =>
              (window.location = "mailto:kanawatiabdalrahman@gmail.com")
            }
          >
            Conteact me <SiMailboxdotorg />
          </button>
          <button
            className="button"
            onClick={() => window.open("https://github.com/Abdo-ka", "_blank")}
          >
            Github <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
