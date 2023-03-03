type SlideShowContentType = 'Frontpage' | 'Article';

export function slideShowFragment(contentType: SlideShowContentType) {
  return /* GraphQL */ `
  ...on ${contentType}SlicesSlide_show {
      type
      label
      variation {
        __typename
        ...on ${contentType}SlicesSlide_showDefault {
          primary {
            title
          }
           items {
          image1
          image2
          image3
          image4
          image5
        }
        }
      }
    }
`;
}
