import styles from "../styles/components/CompletedChallengesContainer.module.css";

interface CompletedChallengesProps {
  challenges: string;
}

export function CompletedChallenges(props: CompletedChallengesProps) {
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios Completos:</span>
      <span>{props.challenges}</span>
    </div>
  );
}
