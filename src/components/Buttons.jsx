import email from '../assets/email.png';
import linkedin from '../assets/linkedin.png';

export default function Buttons() {
  return (
    <div className="buttons">
      <a href="mailto:egidiosalinaro@gmail.com">
        <button className="email">
          <img src={email} width={12} />
          Email
        </button>
      </a>
      <a href="https://www.linkedin.com/in/egidiosalinaro">
        <button className="linkedin">
          <img src={linkedin} width={12} />
          LinkedIn
        </button>
      </a>
    </div>
  );
}
