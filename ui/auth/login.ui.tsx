import { useAuth } from "../../firebase/authContext";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginUi({ showRegister }: { showRegister: any }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { signInWithEmail } = useAuth();
  const router = useRouter();

  return (
    <div>
      <p style={{ color: "#09c" }}>
        Sign-in to get started, or sign-up to create your account.
      </p>

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

      <div className={"d-grid gap-2 mt-3"}>
        <Button onClick={login} variant={"secondary"}>
          Sign In
        </Button>
      </div>

      <div className={"d-grid gap-2 mt-3"}>
        <Button variant={"link"} onClick={register}>
          Register
        </Button>
      </div>
    </div>
  );

  function login(e: any) {
    e.preventDefault();

    signInWithEmail(email, password).then((authUser) => {
      router.push("/play");
    });
  }

  function register() {
    showRegister(true);
  }
}
