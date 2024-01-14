import React from "react";
import styles from "./css/images.module.css";

const num_images = 20;

export default function ImageGallery() {
  const images = require.context("/img/startpage/", true);

  const getImageClass = (image) => {
    // const img = new Image();
    // img.src = image.default;
    // const width = img.width;
    // const height = img.height;

    const style_list = [
      styles.gridWrapperDiv,
      styles.gridWrapperDivTall,
      styles.gridWrapperDivWide,
      styles.gridWrapperDivBig,
    ];

    const rnd_style = style_list[Math.floor(Math.random() * style_list.length)];

    return rnd_style;

    // if (width / height > 2) {
    //   return styles.gridWrapperDivWide;
    // } else if (height / width > 2) {
    //   return styles.gridWrapperDivTall;
    // } else if (width > 1024 && height > 1800) {
    //   return styles.gridWrapperDivBig;
    // } else {
    //   return styles.gridWrapperDiv;
    // }
  };

  const imageList = images
    .keys()
    .map((image) => [images(image), getImageClass(images(image))]);
  const randomImages = imageList
    .sort(() => 0.5 - Math.random())
    .slice(0, num_images);

  return (
    <div className={styles.gridWrapper}>
      {randomImages.map((image, index) => (
        <div key={index} className={image[1]}>
          <img
            key={index}
            className={styles.gridWrapperImg}
            src={image[0].default}
            alt={`image-${index}`}
          />
        </div>
      ))}
    </div>
  );
}
