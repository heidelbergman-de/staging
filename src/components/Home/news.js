import React from "react";
import Link from "@docusaurus/Link";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Markdown from "react-markdown";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./css/news.module.css";

const NewsCard = React.forwardRef(({ id, content, metadata }, ref) => {
  let first500Chars = content
    .replace(/\(([^)]+)\)|\[([^]]+)\]/g, "").replace(/\[(.*?)\]|\!|\[|\]/g, "")
    .substring(0, 500)
    .split("\n")
    .filter((line) => !line.trim().startsWith("|"))
    .join("\n") + "...";

  const firstImg = content.match(/!\[.*\]\((.*)\)/);
  var new_img_url = null;
  if (firstImg) {
    if (firstImg[1].startsWith("http")) {
      new_img_url = firstImg[1];
    } else {
      new_img_url = firstImg[1]
        .replace("(", "")
        .replace(")", "")
        .replace("./", metadata.permalink + "/");
    }
  }

  

  const imageSrc = new_img_url || "img/header/no_img.jpg";

  return (
    <Card className={styles.newsCard} ref={ref}>
      <Card.Img
        variant="top"
        src={imageSrc}
        className={styles.newsCardImgTop}
      />
      <Card.Body>
        <h3>{metadata.title}</h3>
        <div className={styles.newsCardText}>
          <Markdown>{first500Chars}</Markdown>
        </div>
      </Card.Body>
      <Card.Footer className={styles.newsCardLink}>
        <Link variant="primary" to={metadata.permalink}>
          Mehr...
        </Link>
      </Card.Footer>
    </Card>
  );
});

export default function NewsCarousel({ recentPosts }) {
  return (
    <div style={{ margin: "2rem" }}>
      <h1 style={{ textAlign: "center", margin: "1rem" }}>News</h1>
      <div className={styles.carouselContainer}>
        <Carousel data-bs-theme="dark" className={styles.newsCarousel}>
          {recentPosts.map((post, idx) => (
            <Carousel.Item key={idx}>
              <NewsCard key={idx} {...post} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
