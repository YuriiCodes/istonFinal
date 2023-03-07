export const frontpageFragment =  /* GraphQL */ `
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
                text,
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
        ... on FrontpageSlicesEmbed_album_section {
          variation {
            __typename
            ... on FrontpageSlicesEmbed_album_sectionDefault {
              primary {
                title
                description
                playlisturl
              }
            }
          }
        }
        ... on FrontpageSlicesInteresting_links {
          variation {
            __typename
            ... on FrontpageSlicesInteresting_linksDefault {
              primary {
                title
                description
                image
                link1 {
                  _linkType
                  ... on _ExternalLink {
                    url
                  }
                }
                link1text


                  link2 {
                  _linkType
                  ... on _ExternalLink {
                    url
                  }
                }
                link2text


                  link3 {
                  _linkType
                  ... on _ExternalLink {
                    url
                  }
                }
                link3text

                  link4 {
                  _linkType
                  ... on _ExternalLink {
                    url
                  }
                }
                link4text


              }
            }
          }
        }
        ... on FrontpageSlicesImage {
          type
          label
              variation{
            __typename
            ... on FrontpageSlicesImageDefault {
              primary {
                image
              }
            }
          }
        }
      }
    }
  }
`;
;
