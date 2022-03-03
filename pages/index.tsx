import { Button, Col, Row } from "react-bootstrap";
import attackShip from "../public/attackShip.png";
import styles from "../styles/Home.module.css";
import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../firebase/authContext";

interface IloginForm {
  email: string;
  password: string;
}

const Home: NextPage = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { signInWithEmail } = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>Term War</title>
      </Head>

      <Row>
        <Col lg={4} md={12} className={styles.loginCtn}>
          <h3 className={styles.gameTitle}>Term War</h3>
          <p style={{ color: "#09c" }}>
            Sign-in to get started, or sign-up to create your account.
          </p>

          <div className={"form-group"}>
            <input
              placeholder={"Email Account"}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className={"form-control"}
              value={email}
              type="email"
            />
          </div>

          <div className={"form-group"}>
            <input
              className={"form-control mt-3"}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
              placeholder={"Password"}
              type="password"
            />
          </div>

          <div className={"d-grid gap-2 mt-3"}>
            <Button onClick={login} variant={"secondary"}>
              Sign In
            </Button>
          </div>

          <div className={"d-grid gap-2 mt-3"}>
            <Button variant={"link"}>Register</Button>
          </div>
        </Col>

        <Col lg={8} className={styles.ocean}>
          <div className={styles.attackShip}>
            <Image height={300} width={400} src={attackShip} alt="Ship" />
          </div>
        </Col>
      </Row>
    </div>
  );

  function login(e: any) {
    e.preventDefault();

    signInWithEmail(email, password).then((authUser) => {
      router.push("/play");
    });
  }
};

export default Home;
