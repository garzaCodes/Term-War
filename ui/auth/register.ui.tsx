import { useState } from "react";
import { useAuth } from "../../firebase/authContext";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

export default function RegisterUi({ showRegister }: { showRegister: any }) {
  const [passwordComp, setPasswordComp] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { signUpWithEmail } = useAuth();
  const router = useRouter();

  return (
    <div>
      <p style={{ color: "#09c" }}>Register for a new account.</p>

      <div className={"form-group"}>
        <input
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder={"Email Account"}
          className={"form-control"}
          value={email}
          type="email"
        />
      </div>

      <div className={"form-group"}>
        <input
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          className={"form-control mt-3"}
          placeholder={"Password"}
          value={password}
          type="password"
        />
      </div>

      <div className={"form-group"}>
        <input
          onChange={(event) => {
            setPasswordComp(event.target.value);
          }}
          className={"form-control mt-3"}
          placeholder={"Password"}
          value={passwordComp}
          type="password"
        />
      </div>

      <div className={"d-grid gap-2 mt-3"}>
        <Button variant="primary" onClick={register}>
          Register
        </Button>
      </div>

      <div className={"d-grid gap-2 mt-3"}>
        <Button variant="link" onClick={back}>
          Back
        </Button>
      </div>
    </div>
  );

  function register(e: any) {
    e.preventDefault();

    signUpWithEmail(email, password).then((res) => {
      console.log(res);
    });
  }

  function back(e: any) {
    e.preventDefault();

    showRegister(false);
  }
}
