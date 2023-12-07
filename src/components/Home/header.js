import React from "react";

import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./css/header.module.css";
import clsx from "clsx";

const floatingDivs = [
  {
    img_path: "img/header/s03.png",
    headline: "Anmeldung",
    text: "Die Anmeldung öffnet bald! Schau im Januar nochmal vorbei.",
    button_text: "Anmeldung",
    button_link: "#",
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
      <div className={styles.roundImage}>
        <img
          className={styles.floatingHeaderDivImage}
          src={props.img_path}
          alt="Logo"
        />
      </div>
      <div className={styles.floatingHeaderDivTextField}>
        <h4>{props.headline}</h4>
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

  return (
    <header>
      <div className={styles.headerBackground}>
        <div className={styles.headerImageContainer}>
          <img
            src={HDLogo}
            alt="HeidelbergMan Logo"
            style={{ width: "30rem", margin: "0 auto" }}
          />
        </div>

        <h1 className={styles.headerTagline} style={{ fontSize: "3rem" }}>
          {" "}
          Sonntag, 28. Juli 2024
        </h1>

        <div className={styles.buttons}>
          <div className={styles.button}>
            <Link className="button button--primary button--lg" to="/blog">
              News
            </Link>
          </div>
        </div>

        <div className={styles.floatingHeaderDivGroup}>
          {floatingDivs.map((div, index) => (
            <FloatingDiv key={index} {...div} />
          ))}
        </div>
      </div>

      <video className={styles.headerBackgroundVideo} autoPlay loop muted>
        <source src="vids/HDman_teaser.mp4" type="video/mp4" />
        <source src="vids/HDman_teaser.webm" type="video/webm" />
      </video>
    </header>
  );
}
