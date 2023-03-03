import s from './ArticleDescription.module.scss'
import {Article} from "../../prismic-types";
import {RichText} from "../rich-text/RichText";


type ArticleDescriptionProps = {
  article: Article;
}
export const ArticleDescription = ({article}: ArticleDescriptionProps) => {
  return (
    <div className={s.descriptionSection}>
      <RichText className={s.descriptionSection__title}>{article.description}</RichText>
    </div>
  )
}
