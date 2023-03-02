// a hook that returns true if the current page is /prismic and false if /prismic/articles, etc:
import {useRouter} from "next/router";

export const useIsMainPage = () => {
  const router = useRouter();
  return router.pathname === '/prismic';
}
