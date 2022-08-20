import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures2.module.css';

const FeatureList = [
  {
    title: 'Multiple Data Sources',
    src: '/img/logo/HeidelbergMan-Logo.png',
    description: (
      <>
        <p>
          Your application may need to interact with data from a variety of
          sources: a REST server, a WebSocket stream, an IndexedDB backup, an
          in-memory source, etc.
        </p>
        <p>
          Orbit can coordinate data flows across any number of sources through a
          standard set of interfaces using normalized data structures.
        </p>
      </>
    )
  },
  {
    title: 'Multiple Data Sources',
    src: '/img/logo/HeidelbergMan-Logo.png',
    description: (
      <>
        <p>
          Your application may need to interact with data from a variety of
          sources: a REST server, a WebSocket stream, an IndexedDB backup, an
          in-memory source, etc.
        </p>
        <p>
          Orbit can coordinate data flows across any number of sources through a
          standard set of interfaces using normalized data structures.
        </p>
      </>
    )
  },
  {
    title: 'Multiple Data Sources',
    src: '/img/logo/HeidelbergMan-Logo.png',
    description: (
      <>
        <p>
          Your application may need to interact with data from a variety of
          sources: a REST server, a WebSocket stream, an IndexedDB backup, an
          in-memory source, etc.
        </p>
        <p>
          Orbit can coordinate data flows across any number of sources through a
          standard set of interfaces using normalized data structures.
        </p>
      </>
    )
  },
];

function Feature({ src, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureImgContainer}>
        <img src={src} alt={title} />
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