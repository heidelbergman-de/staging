import React from "react";
import { useCountdown } from "./hooks/useCountdown";
import styles from "./css/countdown.module.css";

const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className={styles.countdownDiv}>
      <p className={styles.showCounterP}>{value}</p>
      <span className={styles.showCounterSpan}>{type}</span>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds, text }) => {
  return (
    <div>
      <div className={styles.countDownHeader}>{text}</div>
      <div className={styles.showCounter}>
        <DateTimeDisplay value={days} type={"Tagen"} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Stunden"} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Minuten"} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Sekunden"} />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate, text, expiredNotice }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return expiredNotice;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        text={text}
      />
    );
  }
};

export default CountdownTimer;
