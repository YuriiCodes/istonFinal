import {prismicSliceToImageSlice} from 'prismic/slices/Image/ImageSlice';
import {prismicSliceToTextSlice} from 'prismic/slices/Text/TextSlice';
import {prismicSliceToVideoSlice} from 'prismic/slices/Video/VideoSlice';
import {
  ArticleSlicesText,
  FrontpageSlices, FrontpageSlicesHome_Hero_Slice, FrontpageSlicesHome_Hero_SliceDefault,
  PageSlices as PrismicPageSlices,
  PageSlicesImage,
  PageSlicesText,
  PageSlicesVideo,
} from 'prismic-types';

import {Section} from 'components/section/Section';

import {logger} from 'utils/logger';
import {HomeHeroSlice} from "../../components/home-hero-slice/HomeHeroSlice";

type Props = {
  data?: Array<FrontpageSlices>;
};

export function FrontPageSlices({data = []}: Props) {
  return (
    <>
      {data.map((s, i) => {
        const key = `slice-${s.type}-${i}`;

        switch (s.__typename) {
          case 'FrontpageSlicesHome_hero_slice':
          {
            const slice = s as FrontpageSlicesHome_Hero_Slice;
            return (
                <HomeHeroSlice slice={slice}/>
            );
          }

          case 'FrontpageSlicesText':
            return (
              <Section key={key}>
                <h1>Text slice</h1>
                {prismicSliceToVideoSlice(s as PageSlicesVideo)}
              </Section>
            );

          case 'FrontpageSlicesMarketing_block':
            return (
              <Section key={key}>
                <h1>Marketing block</h1>
                {prismicSliceToImageSlice(s as PageSlicesImage)}
              </Section>
            );
          case 'FrontpageSlicesImage':
            return (
              <Section key={key}>
                <h1>image</h1>
              </Section>
            );
          case 'FrontpageSlicesSlide_show':
            return (
              <Section key={key}>
                <h1>slideshow</h1>
              </Section>
            )
          default:
            logger.info(`unknown slice type ${s.__typename}`, {metadata: {slice: s}});
            return null;
        }
      })}
    </>
  )
}
