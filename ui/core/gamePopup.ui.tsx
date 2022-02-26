import { IGamePopup } from "../../models/gamePopup.model";
import styles from "../../styles/GamePopup.module.css";
import { Button } from "react-bootstrap";

export default function GamePopupUI({
  handleMedic,
  resetGame,
  gameOver,
  gameWon,
  score,
  word,
}: IGamePopup): JSX.Element | null {
  if (!gameOver && !gameWon) return null;

  const bannerTitle: string = gameWon
    ? "Campaign Successful"
    : "You were defeated";

  const scoreMsg: JSX.Element = gameWon ? (
    <div className={styles.scoreMsg}>
      You earned <span className={styles.score}>{score}</span> points.
    </div>
  ) : (
    <div className={styles.scoreMsg}>Go read Sun Tzu and come back.</div>
  );

  const wordStr: JSX.Element = gameWon ? (
    <span className={"mb-2"}>
      You correctly guessed: <span style={{ color: "#09c" }}>{word}</span>
    </span>
  ) : (
    <span></span>
  );

  return (
    <div className={styles.bannerCtn}>
      <div className={styles.banner}>
        <div className={styles.bannerTitle}>{bannerTitle}</div>

        <div className={styles.scoreMsg} style={{margin:'15px 0'}}>
          {wordStr}
          {scoreMsg}
        </div>

        <Button
          style={{ display: gameWon ? "inline-block" : "none" }}
          onClick={gameWonFn}
          variant="primary"
        >
          Go to Next Level
        </Button>

        <Button
          style={{ display: gameWon ? "none" : "inline-block" }}
          onClick={gameLostFn}
          variant="secondary"
        >
          Try Again
        </Button>

        <Button
          style={{
            marginLeft: "8px",
            display: gameWon ? "none" : "inline-block",
          }}
          onClick={getMedic}
        >
          Watch Ad to see Medic
        </Button>
      </div>
    </div>
  );

  function getMedic() {
    handleMedic(3);
  }

  function gameWonFn() {
    resetGame(true);
  }

  function gameLostFn() {
    resetGame(false);
  }
}
