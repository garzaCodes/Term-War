import { IPlayArea } from "../../models/playArea.model";
import styles from "../../styles/PlayArea.module.css";
import enemyVehicle from "../../public/enemyShip2.png";
import myVehicle from "../../public/myShip2.png";
import HealthMeterUI from "./healthBar.ui";
import GamePopUpUI from "../core/gamePopup.ui";
import AnswerUI from "./answer.ui";
import VolumeUI from "./volume.ui";
import Image from "next/image";
import LevelScoreUI from "../score/levelScore.ui";
import TokenBarUi from "../perks/tokenBar.ui";
import PromotionUI from "../core/promotion.ui";
import DefinitionUI from "../core/definition.ui";

export default function PlayAreaUI({
  showDefinition,
  clearPromotion,
  correctGuesses,
  showPromotion,
  handleAudio,
  totalHealth,
  handleMedic,
  handleToken,
  definition,
  resetGame,
  gameOver,
  gameWon,
  sound,
  score,
  rank,
  word,
}: IPlayArea) {
  const promotionModalClass = showPromotion
    ? styles.showPromotion
    : styles.hidePromotion;

  return (
    <div className={styles.playArea}>
      <div className={styles.enemyVehicle}>
        <Image height={80} width={400} src={enemyVehicle} alt="Tank" />
      </div>

      <div className={styles.myVehicle}>
        <Image height={500} width={600} src={myVehicle} alt="Tank" />
      </div>

      {/* COMPS */}

      <GamePopUpUI
        handleMedic={handleMedic}
        resetGame={resetGame}
        gameOver={gameOver}
        gameWon={gameWon}
        score={score}
        word={word}
      />
      <LevelScoreUI score={score} key={score} />
      <HealthMeterUI totalHealth={totalHealth} />
      <TokenBarUi word={word} handleToken={handleToken} />
      <VolumeUI sound={sound} handleAudio={handleAudio} />
      <AnswerUI key={word} word={word} correctGuesses={correctGuesses} />

      <DefinitionUI showDefinition={showDefinition} definition={definition} />

      <PromotionUI
        rank={rank}
        showPromotion={showPromotion}
        clearPromotion={clearPromotion}
      />
    </div>
  );
}
