import { IOverallScoreUI } from "../../models/overallScore.model";
import styles from "../../styles/OverallScore.module.css";
import { Col, Row } from "react-bootstrap";

export default function OverallScoreUi({ xp, totalScore }: IOverallScoreUI) {
  return (
    <Row>
      <Col sm={4}>
        <div>
          <div className={styles.scoreHeader}>Total Score</div>
          <div className={styles.score}>{totalScore.toLocaleString()} pts</div>
        </div>
      </Col>
      <Col sm={4}>
        <div>
          <div className={styles.scoreHeader}>Experience</div>
          <div className={styles.score}>{xp.toLocaleString()} xp</div>
        </div>
      </Col>
      <Col sm={4}>
        <div>
          <div className={styles.scoreHeader}>Rank</div>
          <div className={styles.score}>{setRank(xp)}</div>
        </div>
      </Col>
    </Row>
  );

  function setRank(points: number) {
    if (points < 250) {
      return "Recruit";
    }

    if (points > 250 && points < 500) {
      return "Private";
    }

    if (points > 500 && points < 1000) {
      return "PFC";
    }

    if (points > 1000) {
      return "SGT";
    }
  }
}
