import face from '../assets/egidiosalinaro.jpeg';

export default function Info() {
  return (
    <>
      <img src={face} alt="Egidio Salinaro" className="face" />
      <h1>Egidio Salinaro</h1>
      <h2>Full Stack Developer</h2>
      <h4>
        <a href="https://egidiosalinaro.com/">egidiosalinaro.com</a>
      </h4>
    </>
  );
}
