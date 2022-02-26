import { IToken, ITokenBar } from "../../models/token.model";
import TokenService from "../../services/tokenService";
import styles from "../../styles/Token.module.css";
import { useState } from "react";
import TokenUI from "./token.ui";

export default function TokenBarUi({ handleToken, word }: ITokenBar) {
  const [tokens, setTokens] = useState(TokenService.getTokens());

  const tokenElems = tokens.map((p: IToken) => {
    return (
      <TokenUI handleToken={updateToken} word={word} key={p.type} token={p} />
    );
  });

  return (
    <div className={styles.PowerUpsCtn}>
      <div>{tokenElems}</div>
    </div>
  );

  function updateToken(token: IToken) {
    setTokens(
      tokens.map((p: IToken) => {
        if (p.type === token.type) {
          p.count -= 1;
        }
        return p;
      })
    );

    handleToken(token);
  }
}
