import { Button, Col, Row } from "react-bootstrap";
import attackShip from "../public/attackShip.png";
import styles from "../styles/Home.module.css";
import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
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
              type="email"
              className={"form-control"}
            />
          </div>

          <div className={"form-group"}>
            <input
              placeholder={"Password"}
              type="password"
              className={"form-control mt-3"}
            />
          </div>

          <Link href={"/play"}>
            <div className={"d-grid gap-2 mt-3"}>
              <Button variant={"secondary"}>Sign In</Button>
            </div>
          </Link>

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
};

export default Home;
