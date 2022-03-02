import { Button, Col, Row } from "react-bootstrap";
import attackShip from "../public/attackShip.png";
import AuthSvc from "../firebase/authentication";
import styles from "../styles/Home.module.css";
import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

interface IloginForm {
  email: string;
  password: string;
}

const Home: NextPage = () => {
  const router = useRouter();
  const [loginForm, setLoginForm] = useState<IloginForm>({
    email: "",
    password: "",
  });

  const handleEmailChange = (event: any) => {
    event.persist();

    setLoginForm((values: any) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handlePasswordChange = (event: any) => {
    event.persist();

    setLoginForm((values: any) => ({
      ...values,
      password: event.target.value,
    }));
  };

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
              onChange={handleEmailChange}
              className={"form-control"}
              value={loginForm.email}
              type="email"
            />
          </div>

          <div className={"form-group"}>
            <input
              className={"form-control mt-3"}
              onChange={handlePasswordChange}
              value={loginForm.password}
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

  function login() {
    const loginInfo: IloginForm = loginForm;

    console.log(loginInfo);

    // AuthSvc.signUnWithEmail(loginInfo.email, loginInfo.password).then(
    //   (res: any) => {
    //     console.log(res);
    //   }
    // );
  }
};

export default Home;
