import styles from "../../styles/PlayArea.module.css";
import { IVolume } from "../../models/volume.model";

export default function VolumeUI({ handleAudio, sound }: IVolume) {
  return (
    <div className={styles.audioControl} onClick={handleAudio}>
      {sound ? (
        <i className="fa fa-volume-high" style={{ color: "white" }} />
      ) : (
        <i className="fa fa-volume-xmark" style={{ color: "gray" }} />
      )}
    </div>
  );
}
