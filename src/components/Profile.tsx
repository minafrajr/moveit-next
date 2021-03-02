import styles from '../styles/components/Profile.module.css';

interface ProfileProps{
  profileLevel:string,
}

export function Profile(props:ProfileProps) {
  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/minafrajr.png" alt="Carlos" />
      <div>
        <strong>Carlos A. Minafra Jr</strong>
        <p>{props.profileLevel} xp</p>
      </div>
    </div>
  );
}
