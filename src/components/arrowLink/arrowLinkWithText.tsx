import {ArrowLink} from "./arrowLink";
import s from "./arrowLinkWithText.module.scss"

type ArrowLinkWithTextProps = {
  to: string;
  text: string;
  variation?: 'light' | 'dark';
}
export const ArrowLinkWithText = ({to, text, variation='light'}: ArrowLinkWithTextProps) => {
  const variationClass = variation === 'light' ? s.linkLight : s.linkDark;
  return (
    <div className={s.linkWithText + ' ' + variationClass}>
      <span>{text}</span>
      <ArrowLink to={to}/>
    </div>
  )
}
