import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import {
  ArticleSlicesImage,
  ArticleSlicesSlide_Show,
  FrontpageSlicesSlide_Show,
  PageSlicesImage
} from "../../prismic-types";
import Image from "next/image";
import {PrismicImage} from "../../prismic/types/image";
import styles from "./CarouselSlice.module.scss";
import {Button} from "../button/Button";
import {UIBreakpoints} from "../../types/ui";


type CarouselSliceProps = {
  slice: FrontpageSlicesSlide_Show | ArticleSlicesSlide_Show;
};

const columns = {
  mobile: 12,
  tablet: 12,
  desktop: 6,
  wide: 6,
} as UIBreakpoints;
export const CarouselSlice = ({slice}: CarouselSliceProps) => {
  const images = [] as PrismicImage[];
  for (let i = 1; i < 5; i++) {
    images.push(slice.variation?.items[0]['image' + i]);
  }

  return (
    <div className={styles.container}>
      <div className={styles.headings}>
          <h1
            className={styles.container__title}>{slice.variation?.primary?.title[0]?.text}</h1>
          <Button className={styles.btn}>Sjá nánar</Button>

      </div>
      <Carousel className={styles.carousel}>
        {images.map((image, i) => {
          return (
            <div key={i} className={styles.carousel__item}>
              <Image src={image?.url || ""} width={image?.dimensions?.width}
                     height={image?.dimensions?.height} alt={"img"}
                     className={styles.carousel__image}/>
            </div>
          )
        })}
      </Carousel>
    </div>
  );
}

