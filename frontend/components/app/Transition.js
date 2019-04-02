import { useTransition, animated } from 'react-spring';

const Transition = ({ children }) => {
  const transitions = useTransition(null, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return transitions.map(({ item, key, props }) => (
    <animated.div key={key} style={props}>
      {children}
    </animated.div>
  ));
};

export default Transition;
