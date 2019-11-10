import * as React from 'react'
import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group'

const timeout = 300
const getTransitionStyles: { entering: {}; entered: {}; exiting: {}; exited: {}; unmounted: {} } = {
  entering: {
    position: `absolute`,
    opacity: 0
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0
  },
  exited: {},
  unmounted: {}
}

const Transition: React.FC<{ location: { pathname: string } }> = ({ children, location }) => (
  <TransitionGroup>
    <ReactTransition
      key={location.pathname}
      timeout={{
        enter: timeout,
        exit: timeout
      }}
    >
      {status => (
        <div
          style={{
            ...getTransitionStyles[status]
          }}
        >
          {children}
        </div>
      )}
    </ReactTransition>
  </TransitionGroup>
)

export default Transition
