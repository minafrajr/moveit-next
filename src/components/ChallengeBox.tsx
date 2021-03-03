import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const hasChallengeActive = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasChallengeActive ? (
        <div className={styles.callengeActive}>
          <header>Ganhe 400xp</header>
          <main>
            <img src="icons/body.svg" alt="body" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>
          <footer>
            <button type="button" className={styles.challengeFailedButton}>
              Falhei
            </button>
            <button type="button">Completei</button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance um level completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
