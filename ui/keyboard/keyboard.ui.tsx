import { IKey, IKeyboard } from "../../models/keyboard.model";
import { DEFAULTS } from "../../constants/defaults.constant";
import styles from "../../styles/Keyboard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LevelUI from "../levels/level.ui";
import { Col } from "react-bootstrap";
import { useState } from "react";
import KeyUI from "./key.ui";

export default function KeyboardUI({
  handleSelect,
  buttons,
  level,
  hint,
  word,
}: IKeyboard) {
  const [hintCount, setHintCount] = useState<number>(DEFAULTS.hintsAllowed);
  const [keys, setKeys] = useState<IKey[]>(buttons);

  return (
    <div>
      <Col className={"d-none d-lg-block"}>
        <LevelUI currentLevel={level} />
      </Col>

      <Col>
        <div className={[styles.keyButtonCtn, "clearfix"].join(" ")}>
          <div>
            {keys.map((key, i) => {
              return (
                <KeyUI
                  handleSelect={handleSelect}
                  button={key}
                  word={word}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </Col>
    </div>
  );

  function selectHint(e: any) {
    if (!hintCount) return;

    setHintCount(() => {
      const newHintCount = hintCount - 1;
      hint(e);
      return newHintCount;
    });
  }
}
