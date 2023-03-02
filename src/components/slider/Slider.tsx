import { Children, useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import { Container } from 'components/container/Container';

import { useResize } from 'hooks/useResize';
import { useUiState } from 'hooks/useUiState';

import { SliderItem } from './SliderItem';

import s from './Slider.module.scss';

const c = classNames.bind(s);

type TSliderProps = {
  children: React.ReactNode;
  controls?: boolean;
};

export const Slider = ({ children, controls }: TSliderProps) => {
  const { uiState } = useUiState();

  const childCount = Children.count(children);

  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);

  const rafID = useRef<number>();

  // slider drag values are being computed
  const [sliderActive, setSliderActive] = useState(false);
  const [isDragging, setisDragging] = useState(false);
  // disable stuff if slider doesnt need to scroll
  const [canScroll, setCanScroll] = useState(true);
  // slider is at zero
  const [atStart, setAtStart] = useState(true);
  // set starting positions for drag
  const [startX, setStartX] = useState(0);

  // set initial scroll positions to animate from
  const [scrollLeft, setScrollLeft] = useState(0);
  const xPosition = useRef<number>(0);
  const [activeItem, setActiveItem] = useState(0);
  const [sizes, setSizes] = useState<Array<number>>([0]);

  const resize = useResize();

  // used for control states (prev) and ui where scrolling shouldnt be happening
  const inactive = atStart && !canScroll;

  // check if element can scroll
  const checkScrollStatus = () => {
    if (!sliderRef.current) {
      return;
    }

    const { scrollLeft, offsetWidth, scrollWidth } = sliderRef.current;
    setCanScroll(scrollLeft + offsetWidth !== scrollWidth);
    setAtStart(scrollLeft <= 0);
  };

  // store array of item offsets to set "active" indices from
  const init = useCallback(() => {
    if (!trackRef.current) {
      return;
    }
    const childNodes = trackRef.current.childNodes;
    const sizeArray: Array<number> = [];

    const results = Array.from(childNodes.values());
    results.map((item) => sizeArray.push((item as HTMLLIElement).offsetLeft));

    setSizes(sizeArray);
    checkScrollStatus();
  }, []);

  // get an index-based scroll position from sizes array
  const getActiveIndexPosition = useCallback(
    (distance: number) => {
      // get closest value to sizes array
      return sizes.reduce((prev, current) =>
        Math.abs(current - distance) < Math.abs(prev - distance) ? current : prev
      );
    },
    [sizes]
  );

  const animateScroll = () => {
    if (!sliderRef.current || !xPosition.current || uiState.prefersReducedMotion) {
      return;
    }

    if (
      sliderRef.current.scrollLeft + document.body.clientWidth >=
      sliderRef.current.scrollWidth
    ) {
      return;
    }

    xPosition.current *= 0.7;
    sliderRef.current.scrollLeft += xPosition.current;

    if (Math.abs(xPosition.current) > 0.5) {
      rafID.current = requestAnimationFrame(animateScroll);
    }
  };

  const cancelScrollAnimation = () => {
    if (!rafID.current) {
      return;
    }
    cancelAnimationFrame(rafID.current);
  };

  const startScrollAnimation = () => {
    cancelScrollAnimation();
    rafID.current = requestAnimationFrame(animateScroll);
  };

  // click events: use smooth scroll to animate to [distance] scroll position
  const scrollToPosition = (distance: number) => {
    if (!sliderRef.current) {
      return;
    }

    // scroll position of first element
    const offset = sizes[0];

    sliderRef.current.scrollTo({
      // left: distance - offset,
      left: distance - offset,
      behavior: uiState.prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  useEffect(() => {
    init();
  }, [init, resize.width]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current || inactive) {
      return;
    }
    setSliderActive(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    cancelScrollAnimation();
  };

  const handleMouseLeave = () => {
    setSliderActive(false);
  };

  // begin animation once "drag" has finished
  const handleMouseUp = () => {
    setSliderActive(false);
    setisDragging(false);
    startScrollAnimation();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sliderActive || !sliderRef.current) {
      return;
    }

    setisDragging(true);

    e.preventDefault();

    // get position of cursor
    const x = e.pageX - sliderRef.current.offsetLeft;

    // get distance dragged
    const distance = x - startX;

    // store scrollLeft of slider
    const prevScrollLeft = sliderRef.current.scrollLeft;

    // drag slider scrollLeft from original position to new position
    sliderRef.current.scrollLeft = scrollLeft - distance;

    // store x distance of drag
    xPosition.current = sliderRef.current.scrollLeft - distance - prevScrollLeft;
  };

  const handleScroll = useCallback(() => {
    if (!sliderRef.current || !trackRef.current) {
      return;
    }
    const target = sliderRef.current.scrollLeft + trackRef.current.offsetLeft;
    const distance = getActiveIndexPosition(target);
    const index = sizes.indexOf(distance);
    setActiveItem(index);
    checkScrollStatus();
  }, [getActiveIndexPosition, sizes]);

  // button click
  const handleNext = () => {
    scrollToPosition(getActiveIndexPosition(sizes[activeItem + 1]));
  };

  // button click
  const handlePrev = () => {
    scrollToPosition(getActiveIndexPosition(sizes[activeItem - 1]));
  };

  useEffect(() => {
    // use passive event listener instead of onScroll
    const slider = sliderRef.current;
    slider?.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      slider?.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  if (!childCount) {
    return null;
  }

  return (
    <>
      <div
        className={c(s.slider, { active: sliderActive, inactive, isDragging })}
        onMouseLeave={handleMouseLeave}
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseUp={handleMouseUp}
        onMouseMove={(e) => handleMouseMove(e)}
        onWheel={cancelScrollAnimation}
        ref={sliderRef}
      >
        <ul className={c(s.slider__track)} ref={trackRef}>
          {Children.map(children, (child, i) => (
            <SliderItem key={i} active={i === activeItem}>
              {child}
            </SliderItem>
          ))}
        </ul>
      </div>

      {/* basic example for slider controls */}
      {controls && (
        <Container>
          <div style={{ visibility: inactive ? 'hidden' : 'visible' }}>
            <button disabled={atStart} onClick={handlePrev}>
              &larr; Prev
            </button>{' '}
            <button
              disabled={activeItem === childCount - 1 || !canScroll}
              onClick={handleNext}
            >
              Next &rarr;
            </button>
          </div>
        </Container>
      )}
    </>
  );
};
