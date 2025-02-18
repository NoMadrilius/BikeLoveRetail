import { useLayoutEffect, useState } from "react";

const useIsMobile = (): boolean => {
  const [matches, setMatches] = useState(false);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      const width = window.innerWidth;
      const isMatch =
        (width >= 345 && width <= 734) || (width >= 1024 && width <= 1270);
      setMatches(isMatch);
    };

    updateSize();
  }, []);

  return matches;
};

export default useIsMobile;
