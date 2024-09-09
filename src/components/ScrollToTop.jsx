import { Link, animateScroll as scroll } from "react-scroll";
import upImg from '../assets/up.png'
import { useContext } from "react";
import { LightMode } from "../context/switch-context";
export default function ScrollToTop() {
    const ctxValue = useContext(LightMode);
    return (
    <button>
      <Link to={"root"} spy={true} smooth={true} duration={1000}>
        <img className={`scroll-button ${ctxValue.checked?'light':''}`} src={upImg}  alt="up button"/>
      </Link>
    </button>
  );
}
