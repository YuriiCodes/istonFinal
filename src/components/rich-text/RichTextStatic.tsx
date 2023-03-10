/* wrapper component to pass to some non-reset styles for html elements */

import classNames from 'classnames/bind';

import s from './RichText.module.scss';

const c = classNames.bind(s);

type RichTextStaticProps = {
  html?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const RichTextStatic = ({
  html,
  children,
  className,
  style,
}: RichTextStaticProps) => {
  if (!html && !children) {
    return null;
  }

  const passProps: RichTextStaticProps = {};
  passProps.className = c(s.richText, className);
  passProps.style = style;

  // prioritise children
  if (children) {
    return <div {...passProps}>{children}</div>;
  }

  return <div {...passProps} dangerouslySetInnerHTML={{ __html: html ?? '' }} />;
};
