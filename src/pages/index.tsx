import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar points="100" percent="50" />
      <section>
        <div>
          <Profile profileLevel="15" />
          <CompletedChallenges challenges="12" />
          <CountDown minute1="2" minute2="5" seconds1="0" seconds2="0" />
        </div>
        <div></div>
      </section>
    </div>
  );
}
