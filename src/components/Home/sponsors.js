import React from "react";

import Link from "@docusaurus/Link";
import styles from "./css/sponsors.module.css";

export default function SponsorSection() {
  return (
    <div className={styles.sponsorSection}>
      <h1>SPONSOREN</h1>
      <div className={styles.sponsorSectionLogos}></div>
      <Link
        className={`button button--primary button--lg button--outline button--block ${styles.sponsorButton}`}
        to="mailto:sponsoring@heidelberman.de"
      >
        Sie möchten den HEIDELBERGMAN gerne unterstützen? <br />
        Dann klicken Sie einfach hier und schicken Sie uns eine Nachricht. Wir
        freuen uns darauf, <br />
        bald von Ihnen zu hören und setzen uns umgehend mit Ihnen in Verbindung.
      </Link>
    </div>
  );
}
