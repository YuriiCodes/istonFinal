import {FrontpageSlicesImage} from "../../prismic-types";
import Image from 'next/image'

import styles from './FrontPageImageSlice.module.scss'

type FrontPageImageSliceProps = {
  slice: FrontpageSlicesImage
}
export const FrontPageImageSlice = ({slice}: FrontPageImageSliceProps) => {
  return (
    <div>
      <Image src={slice.variation?.primary?.image?.url}
             width={slice.variation?.primary?.image?.dimensions?.width}
             height={slice.variation?.primary?.image?.dimensions?.height}
             alt={"img"}
      />
    </div>
  )
}
