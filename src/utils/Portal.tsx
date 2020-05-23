import React from 'react'
import ReactDOM from 'react-dom'

interface IPortalProps {
  children: React.ReactNode
  className?: string
  el?: 'div' | 'section'
}

const Portal: React.FC<IPortalProps> = ({ children, className = 'root-portal', el = 'div' }) => {
  const [container] = React.useState(document.createElement(el))

  container.classList.add(className)

  React.useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return ReactDOM.createPortal(children, container)
}

export default Portal
