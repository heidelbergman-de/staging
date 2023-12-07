import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./css/index.module.css";
import HomepageHeader from "./header.js";
import GradientIntroDiv from "./intro.js";
import NewsCarousel from "./news.js";
import ImageGallery from "./images.js";
import SponsorSection from "./sponsors.js";

export default function Home({ recentPosts }) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="HEIDELBERGMAN Triathlon"
    >
      <HomepageHeader />
      <main>
        <GradientIntroDiv />
        <NewsCarousel recentPosts={recentPosts} />
        <ImageGallery />
        <SponsorSection />
      </main>
    </Layout>
  );
}
