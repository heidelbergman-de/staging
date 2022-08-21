import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures2 from './../../components/HomepageFeatures2/HomepageFeatures2';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <img className={styles.heroLogo} src="/img/logo/Heidelbergman-Logo-lang.png" alt="Orbit.js" />
        </h1>
        <h2 className={styles.heroTagline}>{siteConfig.customFields.startDate}</h2>

        <div className={styles.buttons}>
        <Link
            className="button button--primary button--lg"
            to="/blog">
            News
          </Link>
          {/* <Link
            className="button button--secondary button--lg"
            to="/blog">
            News
          </Link> */}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="A framework for orchestrating access, transformation, and synchronization between data sources.">
      <HomepageHeader />
    </Layout>
  );
}