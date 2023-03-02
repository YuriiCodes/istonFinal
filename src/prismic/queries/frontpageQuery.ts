export const frontpageQuery = /* GraphQL */ `
   query {
    frontpage(uid: "frontpage", lang: "is") {
      title
      slices {
        __typename
        ... on FrontpageSlicesMarketing_block {
          variation{
            __typename
            ... on FrontpageSlicesMarketing_blockDefault{
              primary {
                image,
              }
            }
          }
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
                image
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
`;
