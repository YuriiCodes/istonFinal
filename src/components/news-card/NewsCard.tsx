import {Picture} from "../picture/Picture";
import {H2} from "../heading/Heading";
import {asText} from "../rich-text/RichText";
import {Link} from "../link/Link";
import {linkResolver} from "../../prismic/linkResolver";
import {Article} from 'prismic-types';
import {GridLayout, GridLayoutItem} from "../grid/GridLayout";
import {UIBreakpoints} from "../../types/ui";
import s from './NewsCard.module.scss';


type NewsCardProps = {
  news: Array<Article>
}

//we need to make the image and text take up the same amount of space and render in the same row, and in block on mobile:
const columns = {
  mobile: 12,
  tablet: 12,
  desktop: 6,
  wide: 6,
} as UIBreakpoints;

export const NewsCard = ({news}: NewsCardProps) => {
  return (
    <ul>
      {news.map((item, i) => (
        <li key={i} className={s.newsCard}>
          <GridLayout>
            <GridLayoutItem columns={columns}>
              {item.image.url &&
                <Picture src={item.image.url} alt={item.image.alt} width={590}
                         height={342}/>}
            </GridLayoutItem>
            <GridLayoutItem columns={columns} className={s.newsCard__titleBlock}>
              <div className={s.newsCard__titleBlock__titleLinkBlock}>
                <H2 className={s.newsCard__titleBlock__title}>{asText(item.title)}</H2>
                <Link to={linkResolver(item)}>
                  <Picture src={'/images/arrow.png'} alt={'arrow'}
                            width={40}
                            height={20}
                           />
                </Link>
              </div>
              {item.published && <span
                className={s.newsCard__titleBlock__publishedDate}>{item.published}</span>}
            </GridLayoutItem>
          </GridLayout>
        </li>
      ))}
    </ul>
  )
}
