export const scrollToTop = (top = 0) => {
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };