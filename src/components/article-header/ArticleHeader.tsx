import {H1} from "../heading/Heading";
import {asText} from "../rich-text/RichText";
import {Article} from "../../prismic-types";
import s from "./ArticleHeader.module.scss"
import {Picture} from "../picture/Picture";

type ArticleHeaderProps = {
  article: Article;
}
export const ArticleHeader = ({article}: ArticleHeaderProps) => {
  return (
    <div className={s.articleHeader}>
      <div className={s.articleHeader__textData}>
        <div>
          <span>{article.published}</span>
          <div>Share</div>
        </div>
        <H1>{asText(article.title)}</H1>
      </div>
      <Picture src={article.image.url} alt={"article pic"}
               width={article.image.dimensions.width}
               height={article.image.dimensions.height}
               className={s.articleHeader__image}
      />
    </div>
  )
};
