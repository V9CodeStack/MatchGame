import "./index.css";

const websiteLogo =
  "https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png";

const timer =
  "https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png";

const NavBar = (props) => {
  const { score, timerInSeconds } = props;

  return (
    <nav className="nav-bar-container">
      <img className="img" alt="website logo" src={websiteLogo} />
      <div className="score-timer-container">
        <p className="para">
          Score: <span className="score">{score}</span>
        </p>
        <div className="timer-card">
          <img className="timer-img" alt="timer" src={timer} />
          <p className="para para-timer">{`${timerInSeconds} sec`}</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
