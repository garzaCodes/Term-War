import { IHealthMeter } from "../../models/healthbar.model";
import styles from "../../styles/Health.module.css";

export default function HealthMeterUI({ totalHealth }: IHealthMeter) {
  const containerStyle: string[] = [styles.healthbarCtn, "clearfix"];

  const healthBar: JSX.Element[] = totalHealth.map((bar, i) => {
    return (
      <div
        key={i}
        className={[styles.healthbar, bar ? styles.healthy : styles.hit].join(
          " "
        )}
      />
    );
  });

  return (
    <div className={containerStyle.join(" ")}>
      <div style={{ position: "relative" }}>
        <div className={styles.healthbarTitle}>Health</div>
        {healthBar}
      </div>
    </div>
  );
}
