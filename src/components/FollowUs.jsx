import { useEffect, useRef } from 'react';
import {
  FaXTwitter,
  FaYoutube,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa6';

const FollowUs = () => {
  const realGoodRef = useRef(null);

  useEffect(() => {
    const realGoodText = realGoodRef.current;

    const animateScroll = () => {
      if (realGoodText) {
        realGoodText.style.transform = `translateX(-100%)`;
        realGoodText.style.transition =
          'transform 30s linear'; /* Adjust speed as needed */

        realGoodText.ontransitionend = () => {
          realGoodText.style.transition = 'none';
          realGoodText.style.transform = 'translateX(0)';
          /* Timeout, but not that is optional */
          setTimeout(() => {
            animateScroll();
          }, 50);
        };
      }
    };

    animateScroll();

    return () => {
      if (realGoodText) {
        realGoodText.ontransitionend = null;
      }
    };
  }, []);

  return (
    <div className="follow-us-section">
      <div className="follow-us-content">
        <h2 className="follow-us-title">FIND US ON</h2>
        <div className="social-icons">
          <a href="#" className="social-icon">
            <FaXTwitter />
          </a>
          <a href="#" className="social-icon">
            <FaYoutube />
          </a>
          <a href="#" className="social-icon">
            <FaFacebook />
          </a>
          <a href="#" className="social-icon">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="pizza-name-background" ref={realGoodRef}>
        MAMMA&nbsp;MÍA&nbsp;MAMMA&nbsp;MÍA&nbsp;MAMMA&nbsp;MÍA
      </div>
    </div>
  );
};

export default FollowUs;
