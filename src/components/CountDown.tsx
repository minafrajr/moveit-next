import styles from "../styles/components/CountDown.module.css";

interface CountDownProps {
  minute1: string;
  minute2: string;
  seconds1: string;
  seconds2: string;
}
export function CountDown(props: CountDownProps) {
  return (
    <div className={styles.countDownContainer}>
      <div>
        <span>{props.minute1}</span>
        <span>{props.minute2}</span>
      </div>
      <span>:</span>
      <div>
        <span>{props.seconds1}</span>
        <span>{props.seconds2}</span>
      </div>
    </div>
  );
}
