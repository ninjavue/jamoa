import React, { useRef, useEffect } from 'react'

/**
 * Simple Draggable wrapper
 * Usage:
 * <Draggable defaultPosition={{x:10,y:20}}>
 *   <div>Drag me</div>
 * </Draggable>
 */
const Draggable = ({ children, defaultPosition = { x: 0, y: 0 }, onStop }) => {
  const nodeRef = useRef(null)
  const dragging = useRef(false)
  const pointerOffset = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: defaultPosition.x || 0, y: defaultPosition.y || 0 })

  // apply initial transform
  useEffect(() => {
    const node = nodeRef.current
    if (node) {
      node.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
    }
  }, [])

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return
      e.preventDefault()
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const clientY = e.touches ? e.touches[0].clientY : e.clientY
      moveTo(clientX, clientY)
    }

    const onUp = () => {
      if (!dragging.current) return
      dragging.current = false
      if (onStop) onStop({ ...pos.current })
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onMove, { passive: false })
    window.addEventListener('touchend', onUp)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
    }
  }, [onStop])

  const moveTo = (clientX, clientY) => {
    const node = nodeRef.current
    if (!node) return
    const parent = node.parentElement || document.body
    const parentRect = parent.getBoundingClientRect()
    // compute new top-left relative to parent, subtract pointer offset
    const newX = clientX - parentRect.left - pointerOffset.current.x
    const newY = clientY - parentRect.top - pointerOffset.current.y
    pos.current.x = Math.round(newX)
    pos.current.y = Math.round(newY)
    node.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
  }

  const startDrag = (e) => {
    e.preventDefault()
    const node = nodeRef.current
    if (!node) return
    dragging.current = true
    const rect = node.getBoundingClientRect()
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    // pointer offset inside element so it doesn't jump
    pointerOffset.current.x = clientX - rect.left
    pointerOffset.current.y = clientY - rect.top
  }

  return (
    <div
      ref={nodeRef}
      onMouseDown={startDrag}
      onTouchStart={startDrag}
      style={{ position: 'absolute', touchAction: 'none', cursor: 'move' }}
      className="draggable"
    >
      {children}
    </div>
  )
}

export default Draggable
