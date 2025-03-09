import { useEffect, useRef } from 'react';

const ScrollingText = () => {
  const textContainerRef = useRef(null);

  useEffect(() => {
    const textContainer = textContainerRef.current;

    const animateScroll = () => {
      if (textContainer) {
        textContainer.style.transform = `translateX(-100%)`;
        textContainer.style.transition =
          'transform 30s linear'; /* Adjust speed as needed */

        textContainer.ontransitionend = () => {
          textContainer.style.transition = 'none';
          textContainer.style.transform = 'translateX(0)';
          /* Timeout, but not that is optional */
          setTimeout(() => {
            animateScroll();
          }, 50);
        };
      }
    };

    animateScroll();

    return () => {
      if (textContainer) {
        textContainer.ontransitionend = null;
      }
    };
  }, []);

  return (
    <div className="scrolling-text-container" id="scrollingText">
      <div className="scrolling-text" ref={textContainerRef}>
        <h3>
          Pizzeria Mamma Mia! - Las mejores pizzas que podrás encontrar! -
          Ordena Ahora! - Deliciosas pizzas para todos los gustos!
        </h3>
      </div>
    </div>
  );
};

export default ScrollingText;
