import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import Head from "next/head";

import styles from "../styles/pages/Home.module.css";
import { ChallengeBox } from "../components/ChallengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Moveit</title>
      </Head>
      <ExperienceBar points="100" percent="50" />
      <section>
        <div>
          <Profile profileLevel="15" />
          <CompletedChallenges challenges="12" />
          <CountDown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}
