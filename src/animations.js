export const btnVart = {
  initial: { y: 0 },
  hover: { y: -2 },
  tap: { y: 2, scale: 0.95 },
};

export const parentVart = {
  initial: {
    y: 0,
  },
  animate: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export const navItemVart = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};
export const titleItemVart = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};
export const parentStatsVart = {
  initial: {
    y: 0,
  },
  animate: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.75,
    },
  },
};
export const statsItemVart = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.6,
    },
  },
};
export const heroTextVart = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.6,
    },
  },
};
export const heroBoxVart = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: { delay: 2 },
  },
};

export const aboutArrowVart = {
  initial: { y: -200, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { delay: 1.75 },
  },
};
export const aboutImgVart = {
  initial: { x: "100%", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};
export const aboutParentVart = {
  initial: {
    y: 0,
  },
  animate: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
      beforeChildren: true,
    },
  },
};
export const aboutItemVart = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};

export const awardParentVart = {
  initial: { y: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
      beforeChildren: true,
    },
  },
};

export const awardItemVart = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.5,
    },
  },
};
