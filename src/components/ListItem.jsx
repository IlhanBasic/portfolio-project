import { Link, animateScroll as scroll } from 'react-scroll';
export default function ListItem({ label, href,blank }) {
  return (
    <li>
      {!blank && <Link to={href}  spy={true} smooth={true} duration={1000}>
      {label}
      </Link>}
      {blank && <a href={href} target='_blank'>
        {label}
        </a>}
    </li>
  );
}
