import { textSliceFragment } from 'prismic/slices/Text/textSliceFragment';

const type = 'Frontpage';

export const frontpageSlices = `
  fragment pageSlices on PageSlices {
    __typename
    ${textSliceFragment(type)}
  }
`;


