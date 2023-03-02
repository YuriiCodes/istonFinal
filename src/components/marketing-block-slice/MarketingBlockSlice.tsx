import {prismicSliceToImageSlice} from "../../prismic/slices/Image/ImageSlice";
import {FrontpageSlicesMarketing_Block, PageSlicesImage} from "../../prismic-types";
import {UIBreakpoints} from "../../types/ui";
import {GridLayout, GridLayoutItem} from "../grid/GridLayout";
import {ArrowLinkWithText} from "../arrowLink/arrowLinkWithText";
import styles from "./MarketingBlockSlice.module.scss"
type MarketingBlockSliceProps = {
  slice: FrontpageSlicesMarketing_Block;
}
const columns = {
  mobile: 12,
  tablet: 12,
  desktop: 6,
  wide: 6,
} as UIBreakpoints;
export const MarketingBlockSlice = ({slice}: MarketingBlockSliceProps) => {
  return (
    <GridLayout className={styles.slice}>
      <GridLayoutItem columns={columns}>
        <h1 className={styles.text}>{slice.variation?.primary?.text}</h1>
        <ArrowLinkWithText to={"https://google.com"} text={"Sjá nánar"} variation={"dark"}/>
      </GridLayoutItem>
      <GridLayoutItem columns={columns}>
        {prismicSliceToImageSlice(slice as PageSlicesImage)}
      </GridLayoutItem>
    </GridLayout>
  )
}
