import React from "react";

import Link from "@docusaurus/Link";
import styles from "./css/sponsors.module.css";

export default function SponsorSection() {

  const imagesSponsorMain = require.context("/img/sponsor/main", true);
  const imageMainList = imagesSponsorMain.keys()
    .filter((image) => /\.(png|jpe?g|gif|svg|webm|webp)$/i.test(image))
    .map((image) => imagesSponsorMain(image));
  // const imageMainList = imagesSponsorMain.keys().map((image) => images(image));

  const imagesSponsorGold = require.context("/img/sponsor/gold", true);
  const imageGoldList = imagesSponsorGold.keys()
    .filter((image) => /\.(png|jpe?g|gif|svg|webm|webp)$/i.test(image))
    .map((image) => imagesSponsorGold(image));
  // const imageGoldList = imagesSponsorGold.keys().map((image) => images(image));

  const imagesSponsorSilver = require.context("/img/sponsor/silver", true);
  const imageSilverList = imagesSponsorSilver.keys()
    .filter((image) => /\.(png|jpe?g|gif|svg|webm|webp)$/i.test(image))
    .map((image) => imagesSponsorSilver(image));
  // const imageSilverList = imagesSponsorSilver.keys().map((image) => images(image));

  const imagesSponsorBronze = require.context("/img/sponsor/bronze", true);
  const imageBronzeList = imagesSponsorBronze.keys()
    .filter((image) => /\.(png|jpe?g|gif|svg|webm|webp)$/i.test(image))
    .map((image) => imagesSponsorBronze(image));
  // const imageBronzeList = imagesSponsorBronze.keys().map((image) => images(image));

  const imagesSponsorSupport = require.context("/img/sponsor/support", true);
  const imageSupportList = imagesSponsorSupport.keys()
    .filter((image) => /\.(png|jpe?g|gif|svg|webm|webp)$/i.test(image))
    .map((image) => imagesSponsorSupport(image));
  // const imageSupportList = imagesSponsorSupport.keys().map((image) => images(image));


  return (
    <div className={styles.sponsorSection}>
      <h1>SPONSOREN</h1>

      <div className={styles.sponsorSectionLogos}>
        <div className={styles.sponsorSubSectionLogos}>
          {imageMainList.map((image, index) => (
            <img
              key={index}
              className={styles.sponsorMainLogo}
              src={image.default}
              alt={`sponsor-${index}`}
            />
          ))}
        </div>
         <div className={styles.sponsorSubSectionLogos}>
          {imageGoldList.map((image, index) => (
            <img
              key={index}
              className={styles.sponsorGoldLogo}
              src={image.default}
              alt={`sponsor-${index}`}
            />
          ))}
        </div>
        <div className={styles.sponsorSubSectionLogos}>
          {imageSilverList.map((image, index) => (
            <img
              key={index}
              className={styles.sponsorSilverLogo}
              src={image.default}
              alt={`sponsor-${index}`}
            />
          ))}
        </div>
        <div className={styles.sponsorSubSectionLogos}>
          {imageBronzeList.map((image, index) => (
            <img
              key={index}
              className={styles.sponsorBronzeLogo}
              src={image.default}
              alt={`sponsor-${index}`}
            />
          ))}
        </div>
        <div className={styles.sponsorSubSectionLogos}>
          {imageSupportList.map((image, index) => (
            <img
              key={index}
              className={styles.sponsorSupportLogo}
              src={image.default}
              alt={`sponsor-${index}`}
            />
          ))}
        </div>
      </div>


      <div className={styles.sponsorSectionButton}></div>
      <Link
        className={`button button--primary button--lg button--outline button--block ${styles.sponsorButton}`}
        to="mailto:sponsoring@heidelbergman.de"
      >
        Sie möchten den HEIDELBERGMAN gerne unterstützen? <br />
        Dann klicken Sie einfach hier und schicken Sie uns eine Nachricht. Wir
        freuen uns darauf, <br />
        bald von Ihnen zu hören und setzen uns umgehend mit Ihnen in Verbindung.
      </Link>
    </div>
  );
}
