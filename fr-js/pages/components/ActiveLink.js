import { withRouter } from "next/router";
import PropTypes from "prop-types";
import React from "react";

const ActiveLink = ({ router, href, isLeftSideBar = false, children }) => {
  const isCurrentPath = router.pathname === href || router.asPath === href;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  (function prefetchPages() {
    if (typeof window !== "undefined") router.prefetch(router.pathname);
  })();

  return (
    <a
      href={href}
      onClick={handleClick}
      className={
        isCurrentPath
          ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
          : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      }
    >
      {children}
    </a>
  );
};

ActiveLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default withRouter(ActiveLink);
