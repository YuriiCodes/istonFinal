import {prismicSliceToImageSlice} from "../../prismic/slices/Image/ImageSlice";
import {FrontpageSlicesMarketing_Block, PageSlicesImage} from "../../prismic-types";

type MarketingBlockSliceProps = {
  s: FrontpageSlicesMarketing_Block;
}
export const MarketingBlockSlice = ({s}: MarketingBlockSliceProps) => {
  return (
    <>
      <h1>Marketing block</h1>
      {prismicSliceToImageSlice(s as PageSlicesImage)}
      <pre>{JSON.stringify(s)}</pre>
    </>
  )
}
