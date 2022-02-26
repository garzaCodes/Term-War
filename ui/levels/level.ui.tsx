import { DEFAULTS } from "../../constants/defaults.constant";
import { ILevelUI } from "../../models/level.model";

export default function LevelUI({ currentLevel }: ILevelUI) {
  return (
    <h4
      style={{
        color: "white",
        fontSize: "1.3rem",
        fontFamily: "Luckiest Guy, sans-serif",
      }}
      className={"mb-3"}
    >
      Level
      <div
        style={{
          fontSize: "1.8rem",
          marginLeft: "5px",
          display: "inline-block",
        }}
      >
        {currentLevel + 1}
      </div>{" "}
      <div
        style={{ color: "#09c", marginLeft: "8px", display: "inline-block" }}
      >
        {DEFAULTS.gameLevelConstant[currentLevel].title}
      </div>
    </h4>
  );
}
