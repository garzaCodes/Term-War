import styles from "../../styles/Keyboard.module.css";
import { useState } from "react";
import { IKeyUI } from '../../models/keyboard.model';

export default function KeyUI({ handleSelect, button, word }: IKeyUI) {
  const wordCap: string = word ? word.toUpperCase() : "";
  const [keyButton, setKeyButton] = useState(button);

  const style: string[] = [
    keyButton.isCorrect ? styles.isCorrect : "",
    !keyButton.usable ? styles.keyUsed : "",
    styles.keyButton,
  ];

  return (
    <div key={keyButton.key} className={style.join(" ")} onClick={selectKey}>
      {keyButton.key}
    </div>
  );

  function selectKey(e: any): void {
    const selected: string = e.target.innerText;
    const isCorrect: boolean = wordCap.indexOf(selected) !== -1;

    setKeyButton({
      isCorrect: isCorrect,
      key: selected,
      usable: false,
    });

    handleSelect(selected, isCorrect);
  }
}
