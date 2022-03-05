import { Col, Row } from "react-bootstrap";
import attackShip from "../public/attackShip.png";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
import LoginUi from "../ui/auth/login.ui";
import RegisterUi from "../ui/auth/register.ui";
import { useEffect, useState } from "react";

export default function Home() {
  const [showRegisterForm, setShowRegisterForm] = useState<boolean>(false);

  const form = showRegisterForm ? (
    <LoginUi showRegister={showRegister} />
  ) : (
    <RegisterUi showRegister={showRegister}/>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Term War</title>
      </Head>

      <Row>
        <Col lg={4} md={12} className={styles.loginCtn}>
          <h3 className={styles.gameTitle}>Term War</h3>
          {form}
          <div style={{ color: "#fff" }}>{showRegisterForm}</div>
        </Col>

        <Col lg={8} className={styles.ocean}>
          <div className={styles.attackShip}>
            <Image height={300} width={400} src={attackShip} alt="Ship" />
          </div>
        </Col>
      </Row>
    </div>
  );

  function showRegister(showForm: boolean) {
    console.log(showForm);
    setShowRegisterForm(showForm);
  }
}
