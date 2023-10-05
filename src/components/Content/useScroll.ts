import { useCallback, useEffect, useRef, useState } from 'react'

export function useScroll <E extends HTMLElement> () {
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const elementRef = useRef<E>(null)

  useEffect(() => {
    if (!elementRef.current) {
      return
    }
    const memberList = elementRef.current

    function handleArrowVisibility () {
      setShowLeftArrow(memberList.scrollLeft > 0)
      setShowRightArrow(memberList.scrollLeft < memberList.scrollWidth - memberList.clientWidth - 10)
    }

    memberList.addEventListener('scroll', handleArrowVisibility)

    return () => {
      memberList.removeEventListener('scroll', handleArrowVisibility)
    }
  }, [])

  const handleScroll = useCallback((direction: 'left' | 'right') => {
    const element = elementRef.current

    if (!element) {
      return
    }

    const { scrollLeft } = element
    const { offsetWidth } = element.firstElementChild as HTMLElement

    if (direction === 'left') {
      element.scrollTo({
        left: scrollLeft - (offsetWidth + 80) * 3,
        behavior: 'smooth',
      })
    }

    if (direction === 'right') {
      element.scrollTo({
        left: scrollLeft + (offsetWidth + 80) * 3,
        behavior: 'smooth',
      })
    }
  }, [])

  return {
    elementRef,
    showLeftArrow,
    showRightArrow,
    handleScroll,
  }
}
