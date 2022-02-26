import styles from "/styles/Answer.module.css";
import { IAnswerUIProps } from "../../models/answer.model";

export default function AnswerUI({ word, correctGuesses }: IAnswerUIProps) {
  const chars: JSX.Element[] = [...word].map((char, i) => {
    return (
      <div className={styles.character} key={i}>
        <span
          key={i}
          className={
            correctGuesses.indexOf(char) !== -1
              ? styles.visible
              : styles.notVisible
          }
        >
          {char}
        </span>
      </div>
    );
  });

  return <div className={styles.answerCtn}>{chars}</div>;
}
