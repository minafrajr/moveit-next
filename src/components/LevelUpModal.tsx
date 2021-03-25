import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal() {
  const { level, CloseLevelUpModal } = useContext(ChallengesContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns!</strong>
        <p>Você alcançou um novo nível!</p>
        <button type="button" onClick={CloseLevelUpModal}>
          <img src="/icons/close.svg" alt="close modal" />
        </button>
      </div>
    </div>
  );
}
