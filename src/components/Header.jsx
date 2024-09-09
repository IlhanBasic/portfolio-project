import { useContext, useEffect, useState } from "react";
import bannerImg from "../assets/hacker.png";
import { TypeAnimation } from "react-type-animation";
import data from "./informations.js";
import { LightMode } from "../context/switch-context.jsx";
import { Link, animateScroll as scroll } from 'react-scroll';
export default function Header() {
  const ctxValue = useContext(LightMode);
  return (
      <header className={`header ${ctxValue.checked ? "light" : ""}`}>
        <div className={`hero-title ${ctxValue.checked ? "light" : ""}`}>
          <p>Hello 👋, I'm</p>
          <h1>{data.name}</h1>
          <TypeAnimation
            sequence={[data.job[0], 1000, data.job[1], 1000, data.job[2], 1000]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          <br />
          <button><Link to={'contact'}  spy={true} smooth={true} duration={1000}>Contact</Link></button>
        </div>
        <div>
          <img
            src={bannerImg}
            alt="logo img"
            className={`hero-img ${ctxValue.checked ? "light" : ""}`}
          />
        </div>
      </header>
  );
}
