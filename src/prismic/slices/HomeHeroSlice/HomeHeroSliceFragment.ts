type frontSlice = 'Home_hero_slice' | 'Text' | 'Marketing_block' | 'Image' | 'Slide_show';

export function frontSliceFragment(contentType: frontSlice) {
  return /* GraphQL */ `
  ...on FrontpageSlices${contentType} {
      variation {
        __typename
        ...on FrontpageSlicesMarketing_blockDefault {
          primary {
            image
          }
          ... on FrontpageSlicesSlide_show {
               variation {
            __typename
            ... on FrontpageSlicesSlide_showDefault {
              primary {
                title,

              },
              items {
                image1,
                image2,
                image3,
                image4,
                image5,
              }
            }
          }
                  ... on FrontpageSlicesHome_hero_slice {
          type
          variation {
            __typename
            ... on FrontpageSlicesHome_hero_sliceDefault {
              primary{
                title
                description
                secondatytitle
              }
            }
          }
        }
            ... on FrontpageSlicesImage {
          type
          label

        }
          }
        }
      }
    }
`;
}
