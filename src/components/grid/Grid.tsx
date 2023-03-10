// used to make an evenly-sized set of Grid columns.
// for laying out items on the grid at different sizes, use <GridLayout /> and <GridLayoutItem />
import classNames from 'classnames/bind';

import { HTMLElementList } from 'types/html-types';
import { UIBreakpoints } from 'types/ui';

import s from './Grid.module.scss';

const c = classNames.bind(s);

export type GridBreakpoints = {
  mobile?: number;
  tablet?: number;
  desktop?: number;
  limit?: number;
};

type GridProps = {
  as?: HTMLElementList;
  columns?: UIBreakpoints;
  children: React.ReactNode;
  className?: string;
  container?: boolean;
};

export const Grid = ({
  children,
  columns,
  as,
  className,
  container = true,
}: GridProps) => {
  const Wrapper = as ?? 'div';

  let gridStyle = {} as React.CSSProperties;

  columns &&
    Object.entries(columns).forEach(([k, v]) => {
      const entry = { [`--cols-${k}`]: v };
      gridStyle = { ...gridStyle, ...entry };
    });


  return (
    // @ts-ignore
    <Wrapper className={c(s.grid, className, { container })} style={gridStyle}>
      {children}
    </Wrapper>
  );
};
