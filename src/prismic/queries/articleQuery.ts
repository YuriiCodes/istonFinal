import { articleFragment } from 'prismic/fragments/articleFragment';
import { articleSlices } from 'prismic/fragments/articleSlicesFragment';
import { metaFragment } from 'prismic/fragments/metaFragment';

export const articleQuery = /* GraphQL */ `
  query article($uid: String!, $lang: String!) {
    article(uid: $uid, lang: $lang) {
      ...article
      slices {
        ...articleSlices
      }
    }
    allArticles(lang: $lang, first: 4) {
      edges {
        node {
          ...article
        }
      }
    }
  }
  ${articleFragment}
  ${metaFragment}
  ${articleSlices}
`;
