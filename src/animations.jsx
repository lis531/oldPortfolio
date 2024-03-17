import { useEffect } from 'react';

const animations = (refs, options = {}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { ...options, once: true });

    refs.current.forEach(ref => observer.observe(ref));

    return () => {
      refs.current.forEach(ref => observer.unobserve(ref));
    };
  }, [refs, options]);

  const addScrollAnimation = () => {
    let timeout = null;
    document.addEventListener('scroll', () => {
      if(window.scrollX == '0') {
        document.documentElement.classList.add('scrollbar-visible');
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          document.documentElement.classList.remove('scrollbar-visible');
        }, 1000);
      }
    });
  };
  addScrollAnimation();

  const addHoverAnimation = (className) => {
    const elements = document.querySelectorAll('.' + className);

    elements.forEach((element) => {
      element.addEventListener("mouseenter", function () {
        element.classList.add("play-animation");
      });

      element.addEventListener("mouseleave", function () {
        setTimeout(() => {
          element.classList.remove("play-animation");
        }, 600);
      });
    });
  };
  return addHoverAnimation;
};

export default animations;