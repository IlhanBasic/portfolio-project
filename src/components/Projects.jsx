import data from "./informations";
import { LightMode } from "../context/switch-context";
import { useContext } from "react";
export default function Projects() {
  const ctxValue = useContext(LightMode);
  return (
    <section id="projects" className={`projects-section ${ctxValue.checked ? "light" : ""}`}>
      <h1>
        <span>Projects</span>
      </h1>
      {data.projects.map((item) => {
        return (
          <div
            key={item.id}
            className={`project-card ${ctxValue.checked ? "light" : ""}`}
          >
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <button>
              <a href={item.link} target="_blank">
                GitHub
              </a>
            </button>
          </div>
        );
      })}
    </section>
  );
}
