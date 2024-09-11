// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useLayoutEffect } from "react";

// const Wrapper = ({ children }) => {
//   const location = useLocation();
//   useLayoutEffect(() => {
//     document.documentElement.scrollTo(0, 0);
//   }, [location.pathname]);
//   return children;
// };

// const ScrollToTop = () => {
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, ["/"]);

//   return location;
// };

// const location = useLocation();
// const [scrollPosition, setScrollPosition] = useState();

// const handleScroll = (event) => {
//   setScrollPosition(event.target.scrollTop);
// };

// const {} = useLocation();

// const { pathname } = useLocation();

// // const { pathname } = useLocation();

// useEffect(() => {
//   window.scrollTo(0, 0);
// }, [pathname]);

// export { Wrapper, ScrollToTop };
import { useEffect, useState } from "react";

const useScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollTop;
};

export default useScrollTop;
