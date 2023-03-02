import { useRef } from 'react';

import { Link } from 'components/link/Link';

import { useUiState } from 'hooks/useUiState';

import s from './Header.module.scss';
import {Picture} from "../picture/Picture";
import {useIsMainPage} from "../../hooks/useIsMainPage";

type HeaderProps = { children?: React.ReactNode };

export const Header = ({ children }: HeaderProps) => {
  const { setUIState } = useUiState();
  const isMainPage = useIsMainPage();
  console.log("isMainPage", isMainPage)

  const headerRef = useRef<HTMLElement>(null);

  return (
    <header className={s.header + " " + isMainPage ? s.headerMain : s.headerSecondary} ref={headerRef}>
      <div className={s.header__container}>
        <a tabIndex={0} className={s.header__skip} href="#main">
          Skip to content
        </a>
        <Link tabIndex={0} to="/prismic">
         <Picture src={"/images/logo.png"}
                alt="Logo"
                width={275}
                height={56}
         />
        </Link>
        <div className={s.header__nav}>{children}</div>
        <div className={s.header__controls}>
          <button onClick={() => setUIState({ isNavOpen: true })}>menu</button>
        </div>
      </div>
    </header>
  );
};
