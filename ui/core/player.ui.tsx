import { useEffect, useState } from "react";
import { Account } from "../../models/account.model";
import style from "../../styles/Player.module.css";

export default function PlayerUI() {
  const [account, setAccount] = useState<Account | null>(null);

  useEffect(() => {
    if (!account) {
      const account: any = JSON.parse(
        window.localStorage.getItem("currentPlayer") as string
      );
      setAccount(account);
    }
  });

  return (
    <div className={style.playerCtn}>
      <div className={style.playerTitle}>
        <span style={{ marginRight: "10px" }}>{account?.username}</span>
        <i className="fa fa-chevron-circle-down" style={{ color: "#09c" }} />
      </div>

      <div className={style.backBtn}>
        <i className="fa fa-chevron-left" /> Back
      </div>
    </div>
  );
}
