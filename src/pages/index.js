import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <img className={styles.heroLogo} src='img/logo/HeidelbergMan-Logo-lang.png' alt="HeidelbergMan-Logo" />
        </h1>
        <h2 className={styles.heroTagline}>{siteConfig.customFields.startDate}</h2>

        <div className={styles.buttons}>
          <div className={styles.button}>
            <Link className="button button--primary button--lg"
              to="/blog">
              News
            </Link>
          </div>
          {/* <div className={styles.button}>
            <Link
              className="button button--secondary button--lg"
              to="/Ausschreibung/Ausschreibung/">
              Ausschreibung
            </Link>
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="HeidelbergMan Heartbreak Triathlon">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}