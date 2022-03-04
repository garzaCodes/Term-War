import { IOverallScoreUI } from "../../models/overallScore.model";
import styles from "../../styles/OverallScore.module.css";
import { Col, Image, Row } from "react-bootstrap";
import GameService from "../../services/game.service";

export default function OverallScoreUi({ xp, totalScore, rank }: IOverallScoreUI) {


  return (
    <Row>
      <Col sm={4}>
        <div>
          <div className={styles.scoreHeader}>Rank</div>
          <div className={styles.score}>
            <Image src={rank?.image} height={25}/> {" "}
            {rank?.title}
          </div>
        </div>
      </Col>
      <Col sm={4}>
        <div>
          <div className={styles.scoreHeader}>Total Score</div>
          <div className={styles.score}>{totalScore?.toLocaleString()} pts</div>
        </div>
      </Col>
      <Col sm={12}>
        <div>
          <div className={styles.scoreHeader}>Experience</div>
          <div className={styles.score}>{xp?.toLocaleString()} xp</div>
        </div>
      </Col>
    </Row>
  );


}
