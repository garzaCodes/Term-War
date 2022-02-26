import styles from "../../styles/LevelScore.module.css";
import { ILevelScore } from "../../models/levelScore.model";

export default function LevelScoreUI({ score }: ILevelScore) {
  return (
    <div className={styles.scoreCtn}>
      <div style={{ position: "relative" }}>
        <div className={styles.scoreHeader}>Score </div>
        <div className={styles.score}>{score}</div>
      </div>
    </div>
  );
}
