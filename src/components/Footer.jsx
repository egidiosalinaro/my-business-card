import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import github from '../assets/github.svg';

export default function Footer() {
  return (
    <footer>
      <a href="https://twitter.com/egidiosalinaro">
        <img className="social-icon" src={twitter}></img>
      </a>
      <a href="https://www.facebook.com/egidio.salinaro/">
        <img className="social-icon" src={facebook}></img>
      </a>
      <a href="https://www.instagram.com/egidiosalinaro/">
        <img className="social-icon" src={instagram}></img>
      </a>
      <a href="https://github.com/egidiosalinaro">
        <img className="social-icon" src={github}></img>
      </a>
    </footer>
  );
}
