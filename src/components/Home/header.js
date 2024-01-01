import React from "react";

import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./css/header.module.css";
import clsx from "clsx";

import CountdownTimer from "./countdown.js";

const floatingDivs = [
  {
    img_path: "img/header/s03.png",
    headline: "Anmeldung",
    text: "Die Anmeldung öffnet am 01.01.2024 um 12:00 Uhr.",
    button_text: "Anmeldung",
    button_link: "https://heidelbergman2024.racepedia.de/",
  },
  {
    img_path: "img/header/s01.png",
    headline: "Strecke",
    text: "1.600 m Schwimmen im malerischen Neckar, 36 km Rennradfahren hinauf zum majestätischen Königstuhl und 10 km Laufen am Philosophenweg.",
    button_text: "Strecke",
    button_link: "/Strecke/Uebersicht",
  },
  {
    img_path: "img/header/s02.png",
    headline: "Ergebnisse",
    text: "Die Ergebnisse des letzten HEIDELBERGMAN findest du hier.",
    button_text: "Ergebnisse",
    button_link: "/Wettkampf/Ergebnisse/",
  },
];

function FloatingDiv(props) {
  return (
    <div className={styles.floatingHeaderDiv}>
      <div className={styles.floatingDivRoundImageContainer}>
        <img
          className={styles.floatingHeaderDivImage}
          src={props.img_path}
          alt="Logo"
        />
      </div>
      <div className={styles.floatingHeaderDivTextField}>
        <h4 className={styles.floatingHeaderDivTextHeader}>{props.headline}</h4>
        <p className={styles.floatingHeaderDivTextDesc}>{props.text}</p>
        <div className={styles.floatingHeaderDivButton}>
          <Link
            className={`button button--primary button--lg ${styles.floatingHeaderDivButtonStyle}`}
            to={props.button_link}
          >
            {props.button_text}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  // const root = document.documentElement;

  const HDLogo = siteConfig.customFields.HDLogo;

  const targetDate = new Date("2024-01-01T11:00:00.000Z").getTime();

  const anmeldeButton = (
    <div className={styles.buttons}>
      <div className={styles.button}>
        <Link
          className="button button--primary button--lg"
          to="https://heidelbergman2024.racepedia.de/"
        >
          Anmeldung
        </Link>
      </div>
    </div>
  );

  return (
    <header>
      <div className={styles.headerBackground}>
        <div className={styles.headerImageContainer}>
          <img
            className={styles.headerImageLogo}
            src={HDLogo}
            alt="HeidelbergMan Logo"
          />
        </div>

        <h1 className={styles.headerTagline}> Sonntag, 28. Juli 2024</h1>

        <CountdownTimer
          targetDate={targetDate}
          text="Die Anmeldung öffnet in"
          expiredNotice={anmeldeButton}
        />

        {/* <div className={styles.buttons}>
          <div className={styles.button}>
            <Link className="button button--primary button--lg" to="#">
              Anmeldung
            </Link>
          </div>
        </div> */}

        <div className={styles.floatingHeaderDivGroup}>
          {floatingDivs.map((div, index) => (
            <FloatingDiv key={index} {...div} />
          ))}
        </div>
      </div>

      <video
        className={styles.headerBackgroundVideo}
        autoPlay
        loop
        muted
        poster="img/header/no_img.jpg"
      >
        <source src="vids/HDman_teaser.mp4" type="video/mp4" />
        <source
          src="https://github.com/heidelbergman-de/heidelbergman-de.github.io/raw/main/static/vids/HDMan_teaser.webm"
          type="video/webm"
        />
      </video>
    </header>
  );
}
