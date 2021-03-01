import styles from '../styles/components/ExperienceBar.module.css';

interface ExperienceBarProps {
  points: string;
  percent: string;
}

export function ExperienceBar(props: ExperienceBarProps) {
  return (
    <header className={styles.experienceBar}>
      <span> 0 xp</span>
      <div>
        <div style={{ width: props.percent + '%' }} />
        <span
          className={styles.currrentExperience}
          style={{ left: `${props.percent}%` }}
        >
          {props.points} xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
}
