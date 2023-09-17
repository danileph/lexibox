import { useState, useEffect, RefObject } from "react";

export function useScrollVisibility(ref: RefObject<HTMLDivElement>): boolean {
  const [isScrollVisible, setIsScrollVisible] = useState<boolean>(false);

  useEffect(() => {
    const checkScrollVisibility = () => {
      if (ref.current) {
        const { scrollHeight, clientHeight } = ref.current;
        setIsScrollVisible(scrollHeight > clientHeight);
      }
    };

    // Initial check
    checkScrollVisibility();

    // Listen for scroll changes
    const handleScroll = () => {
      checkScrollVisibility();
    };

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("resize", handleScroll);
    };
  }, [ref]);

  return isScrollVisible;
}
