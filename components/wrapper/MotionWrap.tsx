import React, { ComponentType, ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface MotionWrapProps {
  classNames: string;
}

const MotionWrap = <P extends object>(
  Component: ComponentType<P>,
): React.FC<P & HTMLMotionProps<'div'> & MotionWrapProps> => function HOC(props) {
  const { classNames, ...restProps } = props;

  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={`${classNames} app__flex`}
    >
      <Component {...restProps as P} />
    </motion.div>
  );
};

export default MotionWrap;
