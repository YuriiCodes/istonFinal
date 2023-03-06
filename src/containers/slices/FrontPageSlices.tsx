import {prismicSliceToVideoSlice} from 'prismic/slices/Video/VideoSlice';
import {
  FrontpageSlices, FrontpageSlicesEmbed_Album_Section,
  FrontpageSlicesHome_Hero_Slice,
  FrontpageSlicesImage,
  FrontpageSlicesMarketing_Block, FrontpageSlicesSlide_Show,
  PageSlicesVideo,
} from 'prismic-types';

import {Section} from 'components/section/Section';

import {logger} from 'utils/logger';
import {HomeHeroSlice} from "../../components/home-hero-slice/HomeHeroSlice";
import {
  MarketingBlockSlice
} from "../../components/marketing-block-slice/MarketingBlockSlice";
import {
  FrontPageImageSlice
} from "../../components/front-page-image-slice/FrontPageImageSlice";
import {CarouselSlice} from "../../components/carouselSlice/CarouselSlice";
import {EmbeddedAlbumSlice} from "../../components/EmbededAlbumSlice/EmbeddedAlbumSlice";

type Props = {
  data?: Array<FrontpageSlices>;
};

export function FrontPageSlices({data = []}: Props) {
  return (
    <>
      {data.map((s, i) => {
        const key = `slice-${s.type}-${i}`;

        switch (s.__typename) {
          case 'FrontpageSlicesHome_hero_slice': {
            const slice = s as FrontpageSlicesHome_Hero_Slice;
            return (
              <HomeHeroSlice slice={slice} key={key}/>
            );
          }

          case 'FrontpageSlicesText':
            return (
              <Section key={key}>
                <h1>Text slice</h1>
                {prismicSliceToVideoSlice(s as PageSlicesVideo)}
              </Section>
            );

          case 'FrontpageSlicesMarketing_block': {
            const slice = s as FrontpageSlicesMarketing_Block;
            return (
              <MarketingBlockSlice slice={slice} key={key}/>
            );
          }
          case 'FrontpageSlicesImage': {
            const slice = s as FrontpageSlicesImage;
            return (
              <FrontPageImageSlice key={key} slice={slice}/>
            );
          }
          case 'FrontpageSlicesSlide_show': {
            const slice = s as FrontpageSlicesSlide_Show;
            return (
              <CarouselSlice key={key} slice={slice}/>
            )
          }
          case 'FrontpageSlicesEmbed_album_section': {
            const slice = s as FrontpageSlicesEmbed_Album_Section;
            return <EmbeddedAlbumSlice key={key} slice={slice}/>
          }
          default:
            logger.info(`unknown slice type ${s.__typename}`, {metadata: {slice: s}});
            return null;
        }
      })}
    </>
  )
}
