import { useTransition, animated } from 'react-spring';

const Transition = ({ route, children }) => {
  const transitions = useTransition(route, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={{ ...props }}>
          {children}
        </animated.div>
      )
  );
};

export default Transition;
