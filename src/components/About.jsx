import Info from "./Info";
import { HorizontalTicker } from "react-infinite-ticker";
import TickerImgs from "./TickerImgs.jsx";
import data from "./informations.js";
import { useContext } from "react";
import { LightMode } from "../context/switch-context.jsx";
const newsTicker = (
  <HorizontalTicker duration={25000} reverse>
    <div className="skill-ticker">
      <TickerImgs />
    </div>
  </HorizontalTicker>
);
export default function About() {
  const ctxValue = useContext(LightMode);
  return (
      <section
        id="about"
        className={`about-section ${ctxValue.checked ? "light" : ""}`}
      >
        <div className="about-title">
          <span>ABOUT</span>
        </div>
        <Info title={data.aboutTitle} text={data.aboutText} />
        <Info title={data.aboutSkillsTitle} text={newsTicker} />
      </section>
  );
}
