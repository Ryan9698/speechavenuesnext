// Hooks for scroll position and Helper function for the StaffMember component

import { useRef, useState, useCallback } from 'react';

export const useScrollPosition = () => {
  // Initial state set to closed
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollPosition = useRef(0);

  //   Saves the position in the window when the toggle is clicked
  const saveScrollPosition = useCallback(() => {
    scrollPosition.current = window.scrollY;
  }, []);

  //   Restores the position in the window when the toggle is clicked again
  const restoreScrollPosition = useCallback(() => {
    window.scrollTo(0, scrollPosition.current);
  }, []);

  //   Function to toggle the states
  const expandBio = useCallback(() => {
    if (isExpanded) {
      restoreScrollPosition();
    } else {
      saveScrollPosition();
    }
    setIsExpanded((prevState) => !prevState);
  }, [isExpanded, saveScrollPosition, restoreScrollPosition]);

  return { isExpanded, expandBio };
};
