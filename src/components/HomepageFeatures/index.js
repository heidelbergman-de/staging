import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    src: require('@site/static/img/misc/Genehmigungssiegel_01-19-01-02679.png').default,
  },
  {
    src: require('@site/static/img/sponsor/swhd.png').default,
    url: "https://swhd.de",
  },
  {
    title: 'Die >>für dich App',
    src: require('@site/static/img/sponsor/swhd-qr.png').default,
    description: "der Stadtwerke Heidelberg"
  },
];

function Feature({ src, title, description, url }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureImgContainer}>
        <a href={url}><img src={src} alt={title} target="blank"/></a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <section>{description}</section>
      </div>
    </div>
  );
}

export default function HomepageFeatures2() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}