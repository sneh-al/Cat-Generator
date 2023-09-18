import { useState, useEffect } from "react";

function useIsEndOfScreen() {
  const [isEndOfComponent, setIsEndOfComponent] = useState(false);

  useEffect(() => {
    function handleScroll() {
  const offsetHeight = document.documentElement.offsetHeight;
  const innerHeight = window.innerHeight;
  const scrollTop = document.documentElement.scrollTop;

      const hasReachedBottom = offsetHeight - (innerHeight + scrollTop) <= 10;
      setIsEndOfComponent(hasReachedBottom);
      
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isEndOfComponent;
}

export default useIsEndOfScreen;
