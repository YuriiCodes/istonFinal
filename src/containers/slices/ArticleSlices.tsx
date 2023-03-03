import { prismicSliceToImageSlice } from 'prismic/slices/Image/ImageSlice';
import { prismicSliceToTextSlice } from 'prismic/slices/Text/TextSlice';
import { prismicSliceToVideoSlice } from 'prismic/slices/Video/VideoSlice';
import {
  ArticleSlices as PrismicArticleSlices,
  ArticleSlicesImage,
  ArticleSlicesText,
  ArticleSlicesVideo,
} from 'prismic-types';

import { Section } from 'components/section/Section';

import { logger } from 'utils/logger';
import {CarouselSlice} from "../../components/carouselSlice/CarouselSlice";

type Props = {
  data?: Array<PrismicArticleSlices>;
};

export function ArticleSlices({ data = [] }: Props) {
  return (
    <>
      {data.map((s, i) => {
        const key = `slice-${s.type}-${i}`;

        switch (s.type) {
          case 'text':
            return (
              <Section key={key}>
                {prismicSliceToTextSlice(s as ArticleSlicesText)}
              </Section>
            );

          case 'video':
            return (
              <Section key={key}>
                {prismicSliceToVideoSlice(s as ArticleSlicesVideo)}
              </Section>
            );

          case 'image':
            return (
              <Section key={key}>
                {prismicSliceToImageSlice(s as ArticleSlicesImage)}
              </Section>
            );

          default: {
            // Might be a custom slice
            if (s.__typename === 'ArticleSlicesSlide_show') {
              // console.log(JSON.stringify(s));
              // return <pre>{JSON.stringify(s)}</pre>
              // return <CarouselSlice key={key} slice={s}/>
            }
            logger.info(`unknown slice type ${s.type}`, {metadata: {slice: s}});
            return null;
          }
        }
      })}
    </>
  );
}
