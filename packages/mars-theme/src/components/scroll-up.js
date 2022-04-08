import React, { useEffect, useState } from 'react'
import { styled } from 'frontity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const ScrollUp = () => {
  const [screenPosition, setScreenPosition] = useState(0)
  const iconSize = 'sm'
  let eventTimeout

  useEffect(() => {
    window?.addEventListener('scroll', setCurrentPosition)
    return () => window?.removeEventListener('scroll', setCurrentPosition)
  }, [])

  const scrollToTop = () => {
    window?.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  const setCurrentPosition = () => {
    if (!eventTimeout) {
      eventTimeout = setTimeout(() => {
        eventTimeout = null
        setScreenPosition(window?.scrollY)
      }, 300)
    }
  }

  return (
    screenPosition > 1080 && <ScrollUpContainer onClick={scrollToTop}><FontAwesomeIcon icon={faArrowUp} size={iconSize} /></ScrollUpContainer>
  )
}

export default ScrollUp

const ScrollUpContainer = styled.div`
    position: fixed;
    right: 20px;
    bottom: 20px;
    padding: 1rem;
    background-color: var(--blue);
    color: var(--text-background);
    border-radius: 4px;
`
