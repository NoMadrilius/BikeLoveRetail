import { useLayoutEffect, useState } from "react";
import debounce from "lodash/debounce";

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
    const debouncedUpdate = debounce(updateSize, 250);
    window.addEventListener("resize", debouncedUpdate);

    return (): void => window.removeEventListener("resize", debouncedUpdate);
  }, []);

  return matches;
};

export default useIsMobile;
