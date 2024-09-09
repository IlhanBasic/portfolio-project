import { useContext, useRef } from "react";
import About from "./components/About.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer.jsx";
import LightModeProvider, { LightMode } from "./context/switch-context.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import useScrollPosition from "./hooks/useScrollPosition"; 

function App() {
  const ctxValue = useContext(LightMode);
  const scrollBtn = useRef();
  const bodyRef = useRef(document.body);

  if (ctxValue.checked) {
    bodyRef.current.style.backgroundColor = "#ffffff";
  } else {
    bodyRef.current.style.backgroundColor = "#333333";
  }
  const scrollPosition = useScrollPosition();
  return (
    <LightModeProvider>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Form />
      <Footer />
      {scrollPosition > 200 && <ScrollToTop />}
    </LightModeProvider>
  );
}
export default App;
