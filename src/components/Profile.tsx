import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileConteir}>
      <img src="http://github.com/minafrajr.png" alt="Carlos" />
      <div>
        <strong>Carlos A. Minafra Jr</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
}
