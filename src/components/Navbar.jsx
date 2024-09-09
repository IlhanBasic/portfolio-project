import { useContext } from "react";
import logoImg from "../assets/man.png";
import ListItem from "./ListItem.jsx";
import Switch from './SwitchButton.jsx';
import data from './informations.js';
import { LightMode } from "../context/switch-context.jsx";
export default function Navbar() {
  const ctxValue = useContext(LightMode);
  return (
    <div className={`navbar ${ctxValue.checked?'light':''}`}>
      <a href="">
        <img src={logoImg} alt="logo img" width={50} height={50}/>
      </a>
      
      <nav>
        <ul className={`navigation-list ${ctxValue.checked?'light':''}`}>
          <ListItem label='HOME' href='root'/>
          <ListItem label='ABOUT' href='about'/>
          <ListItem label='PROJECTS' href='projects'/>
          <ListItem label='CONTACT' href='contact'/>
          <ListItem label='RESUME' href='./IlhanCV.pdf' blank/>
        </ul>
      </nav>
      <Switch/>
    </div>
  );
}
