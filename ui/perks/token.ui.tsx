import { ITokenUI } from "../../models/token.model";
import styles from "../../styles/Token.module.css";
import Image from "next/image";

export default function TokenUI({ token, handleToken }: ITokenUI) {
  return (
    <div
      className={styles.token}
      onClick={powerUpClicked}
      title={token.type}
      key={token.type}
    >
      <Image height={30} width={30} src={token.icon} alt="icon" />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {token.count}
        <span className="visually-hidden">{token.count}</span>
      </span>
    </div>
  );

  function powerUpClicked() {
    if (token.count === 0) return;
    handleToken(token);
  }
}
