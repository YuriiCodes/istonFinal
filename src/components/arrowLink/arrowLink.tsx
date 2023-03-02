import {linkResolver} from "../../prismic/linkResolver";
import {Picture} from "../picture/Picture";
import {Link} from "../link/Link";

type ArrowLinkProps = {
  to: string;
}
export const ArrowLink = ({to}: ArrowLinkProps) => {
  return (
    <Link to={to}>
      <Picture src={'/images/arrow.png'} alt={'arrow'}
               width={40}
               height={20}
      />
    </Link>
  )
}
