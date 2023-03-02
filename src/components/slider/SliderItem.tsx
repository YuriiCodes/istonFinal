import s from './SliderItem.module.scss';

export type TSliderItemProps = {
  children?: React.ReactNode;
  active?: boolean;
};

export const SliderItem = ({ children }: TSliderItemProps) => {
  return <li className={s.sliderItem}>{children}</li>;
};
