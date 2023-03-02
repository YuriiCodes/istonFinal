import {ArrowLink} from "./arrowLink";
import s from "./arrowLinkWithText.module.scss"

type ArrowLinkWithTextProps = {
  to: string;
  text: string;
}
export const ArrowLinkWithText = ({to, text}: ArrowLinkWithTextProps) => {
  return (
    <div className={s.linkWithText}>
      <span>{text}</span>
      <ArrowLink to={to}/>
    </div>
  )
}
