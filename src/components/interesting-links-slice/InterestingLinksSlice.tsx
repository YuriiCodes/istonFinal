import s from "./InterestingLinksSlice.module.scss";
import {FrontpageSlicesInteresting_Links} from "../../prismic-types";
import {Picture} from "../picture/Picture";
import {ArrowLinkWithText} from "../arrow-link/arrowLinkWithText";

type InterestingLinksSliceProps = {
  slice: FrontpageSlicesInteresting_Links
}
export const InterestingLinksSlice = ({slice}: InterestingLinksSliceProps) => {
  return (
    <div>
      <div className={s.imageAndTitles}>
        <div>
          <Picture src={slice.variation?.primary?.image?.url}
                   width={slice.variation?.primary?.image?.dimensions?.width}
                   height={slice.variation?.primary?.image?.dimensions?.height}
                   alt={"recent news thumbnail"}
          />
        </div>
        <div className={s.imageAndTitles__textSection}>
          <h2>{slice.variation?.primary?.title[0]?.text}</h2>
          <p>{slice.variation?.primary?.description[0]?.text}</p>
        </div>
      </div>

      {/*Links section*/}
      <div className={s.linksSection}>
        {/*1 row*/}
        <div className={s.linksSection__linkRow}>
          <div className={s.linksSection__linkRow__link}><ArrowLinkWithText to={slice.variation?.primary?.link1?.url} text={slice.variation?.primary?.link1text} /></div>
          <div className={s.linksSection__linkRow__link}><ArrowLinkWithText to={slice.variation?.primary?.link2?.url} text={slice.variation?.primary?.link2text} /></div>
        </div>

        {/*2 row*/}
        <div className={s.linksSection__linkRow}>
          <div className={s.linksSection__linkRow__link}><ArrowLinkWithText to={slice.variation?.primary?.link3?.url} text={slice.variation?.primary?.link3text} /></div>
          <div className={s.linksSection__linkRow__link}><ArrowLinkWithText to={slice.variation?.primary?.link4?.url} text={slice.variation?.primary?.link4text} /></div>
        </div>
      </div>
    </div>
  )
}
