import { useRouter } from 'next/router';

import { Link, LinkProps } from 'components/link/Link';
import s from './NavLink.module.scss';

export const NavLink = ({ to, children, ...props }: LinkProps) => {
  const router = useRouter();
  return (
    <Link
      to={to}
      aria-current={router.pathname === to ? 'page' : undefined}
      tabIndex={0}
      {...props}
    >
      {children}
    </Link>
  );
};
