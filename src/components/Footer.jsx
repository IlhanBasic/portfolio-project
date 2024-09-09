import fbImg from '../assets/facebook.png';
import instaImg from '../assets/instagram.png';
import gitImg from '../assets/github-sign.png';
import reactImg from '../assets/atom.png';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ReactLogo = styled.img`
  width: 25px;
  height: 25px;
  transform: rotate(${props => props.rotate}deg);
  transition: transform 0.1s linear;
  margin-left:10px;
`;

export default function Footer() {
  const [rotateLogo, setRotateLogo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotateLogo(prev => (prev + 10) % 360);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer>
      <div>
        <p>&copy; 2024 Ilhan Bašić. All rights reserved.</p>
      </div>
      <div>
        <p>
          This website was built with{" "}
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <ReactLogo rotate={rotateLogo} src={reactImg} alt="React logo" />
          </a>
        </p>
      </div>
      <div className="socials">
        <a href="https://www.instagram.com/">
          <img src={fbImg} alt="facebook logo" width={25} height={25} />
        </a>
        <a href="https://www.facebook.com/">
          <img src={instaImg} alt="instagram logo" width={25} height={25} />
        </a>
        <a href="https://github.com/">
          <img src={gitImg} alt="github logo" width={25} height={25} />
        </a>
      </div>
    </footer>
  );
}
