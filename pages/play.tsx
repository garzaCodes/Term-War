import { DEFAULTS } from "../constants/defaults.constant";
import OverallScoreUi from "../ui/score/overallScore.ui";
import { Col, Container, Row } from "react-bootstrap";
import KeyboardUI from "../ui/keyboard/keyboard.ui";
import PlayAreaUI from "../ui/playArea/playArea.ui";
import { useEffect, useRef, useState } from "react";
import GameService from "../services/game.service";
import { IKey } from "../models/keyboard.model";
import { IToken } from "../models/token.model";
import styles from "../styles/Play.module.css";
import { WordList } from "../constants/words";
import LevelUI from "../ui/levels/level.ui";
import Head from "next/head";

const wordList = WordList;

export default function Game() {
  // CURRENT WORD
  const [word, setWord] = useState<string>("");

  // KEYBOARD STATE
  const [keySelectionHistory, setKeySelectionHistory] = useState<string[]>([]);
  const [keyButtons, setKeyButtons] = useState<IKey[]>(
    DEFAULTS.keyboardConstant
  );
  const [correctChars, setCorrectChars] = useState<string[]>([]);

  // GAME STATE
  const [totalHealth, setTotalHealth] = useState<boolean[]>(
    DEFAULTS.totalHealthXP
  );
  const [usedHints, setUsedHints] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [level, setLevel] = useState<number>(0);

  // AUDIO
  const [victoryMusic, setVictoryMusic] = useState<HTMLAudioElement | null>(
    null
  );
  const [defeatMusic, setDefeatMusic] = useState<HTMLAudioElement | null>(null);
  const [fireMissile, setFireMissile] = useState<HTMLAudioElement | null>(null);
  const [impact, setImpact] = useState<HTMLAudioElement | null>(null);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const [sound, setSound] = useState<boolean>(false);

  // GAME SCORING
  const [totalScore, setTotalScore] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [hits, setHits] = useState<number>(DEFAULTS.maxHP);
  const [xp, setXP] = useState<number>(0);

  useEffect(() => {
    setVictoryMusic(new Audio("/victory.mp3"));
    setDefeatMusic(new Audio("/defeat.mp3"));
    setFireMissile(new Audio("/myCannon.mp3"));
    setImpact(new Audio("/impact.mp3"));
  }, []);

  init();

  return (
    <div>
      <Head>
        <title>Game - Flame Thrower Pickle</title>
      </Head>
      <main className={styles.game}>
        <audio
          ref={audioPlayerRef}
          src="bgmusic.mp3"
          id={"gameAudio"}
          loop={true}
        />

        <Container fluid className={styles.gameContainer}>
          <Row>
            <Col lg={8} sm={12}>
              <div className={"d-block d-lg-none"}>
                <Row>
                  <Col sm={6} slot={"start"}>
                    <LevelUI currentLevel={level} />
                  </Col>
                  <Col sm={6} slot={"end"} style={{ textAlign: "right" }}>
                    <OverallScoreUi xp={xp} totalScore={totalScore} />
                  </Col>
                </Row>
              </div>

              <PlayAreaUI
                correctGuesses={correctChars}
                totalHealth={totalHealth}
                handleMedic={regenHealth}
                handleAudio={toggleAudio}
                handleToken={handleToken}
                resetGame={resetGame}
                gameOver={gameOver}
                gameWon={gameWon}
                score={score}
                sound={sound}
                word={word}
                key={word}
              />
            </Col>
            <Col lg={4} sm={12}>
              <Col>
                <KeyboardUI
                  handleSelect={handleKeySelect}
                  buttons={keyButtons}
                  gameOver={gameOver}
                  level={level}
                  word={word}
                  hint={hint}
                  key={word}
                />
              </Col>
              <Col className={"mt-4 d-none d-lg-block"}>
                <OverallScoreUi xp={xp} totalScore={totalScore} />
              </Col>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );

  // GAME METHODS

  function init() {
    if (!word) {
      setWord(getWord());
    }
  }

  function getWord() {
    return wordList[
      Math.floor(Math.random() * wordList.length)
    ].word.toUpperCase();
  }

  function hint() {
    const usedChars: string[] = [
      ...new Set([...usedHints, ...keySelectionHistory]),
    ];
    const hintChar: string = GameService.getHint(word, usedChars);

    if (hintChar) {
      setUsedHints((usedHints) => {
        const newHints = [...usedHints, hintChar];
        return newHints;
      });
      handleKeySelect(hintChar, true);
    }
  }

  function checkWord(correctGuesses: string[], word: string) {
    const guesses: string[] = [...new Set(correctGuesses)];
    const answer: string[] = [...new Set(word.split(""))];
    const isWinner = guesses.sort().join("") === answer.sort().join("");

    if (isWinner) {
      GameService.playVictoryMusic(sound, audioPlayerRef, victoryMusic);
      calculateWordScore(score, hits);
      endGame(true);
    }
  }

  function handleKeySelect(
    key: string,
    isCorrect: boolean,
    currentWord: string = word
  ) {
    if (!keySelectionHistory.includes(key)) {
      setKeySelectionHistory((prevState) => {
        const newArr: string[] = [...prevState, key];

        return newArr;
      });

      setKeyButtons((keyButtons) => {
        return keyButtons.map((button) => {
          return rebuildKeyButtons(button, key, isCorrect, currentWord);
        });
      });
    }
  }

  function handleToken(token: IToken) {
    if (token.type === "Cluster") {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          hint();
        }, 800);
      }
    }
    if (token.type === "Hint") {
      hint();
    }
  }

  function rebuildKeyButtons(
    button: IKey,
    key: string,
    isCorrect: boolean,
    word: string
  ) {
    if (button.key === key) {
      button.usable = false;

      if (isCorrect) {
        GameService.fireMissile(sound, fireMissile);

        button.isCorrect = true;
        setScore((score) => score + 100);
        checkAnswer(key, word);
      } else {
        hit();
      }
    }

    return button;
  }

  function checkAnswer(key: string, word: string) {
    setCorrectChars((chars) => {
      let newChars = [...chars, key];
      checkWord(newChars, word);
      return newChars;
    });
  }

  function calculateWordScore(score: number, hits: number) {
    let newScore = score * hits + hits * 10;
    setTotalScore(totalScore + newScore);
    setScore(newScore);

    setXP(xp + 100);
  }

  function endGame(gameWon = false) {
    setGameOver(true);
    setGameWon(gameWon);
  }

  function toggleAudio() {
    setSound((sound) => {
      const newState = !sound;
      GameService.playGameMusic(newState, audioPlayerRef, defeatMusic);
      return newState;
    });
  }

  // HEALTH METHODS

  function hit() {
    let newHealth = [...totalHealth];

    if (hits > 1) {
      GameService.takeHit(sound, impact);

      setHits(hits - 1);
    } else if (hits === 1) {
      GameService.playDefeatMusic(sound, audioPlayerRef, defeatMusic);
      setGameOver(true);
    }

    setTotalHealth(
      newHealth.map((bar, i) => {
        if (i >= hits - 1) {
          return false;
        }
        return true;
      })
    );
  }

  function regenHealth(healPoints: number) {
    let loops = healPoints;
    setHits(hits + healPoints);
    setGameOver(false);

    const newHealth = totalHealth.map((bar) => {
      if (!bar && loops > 0) {
        loops--;
        return true;
      }
      return bar;
    });

    setTotalHealth(newHealth);
  }

  function resetGame(gameWon: boolean) {
    const newButtons = keyButtons.map((button) => {
      button.key = button.key;
      button.isCorrect = false;
      button.usable = true;
      return button;
    });

    if (gameWon) {
      setLevel(level + 1);
    }

    setTotalHealth(DEFAULTS.totalHealthXP);
    setKeySelectionHistory([]);
    setHits(DEFAULTS.maxHP);
    setKeyButtons(newButtons);
    setCorrectChars([]);
    setGameOver(false);
    setGameWon(false);
    setUsedHints([]);
    setWord(getWord());
    setScore(0);

    GameService.playGameMusic(sound, audioPlayerRef, defeatMusic);
  }
}
