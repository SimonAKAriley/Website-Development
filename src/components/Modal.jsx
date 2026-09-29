import { useEffect, useRef } from 'react'

/** Accessible modal: focus trap, Escape to close, restores focus on unmount. */
export default function Modal({ title, onClose, children }) {
  const panelRef = useRef(null)
  const restoreRef = useRef(null)

  useEffect(() => {
    restoreRef.current = document.activeElement
    const panel = panelRef.current
    if (panel) panel.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab' || !panel) return
      const focusables = panel.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (!focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    document.body.classList.add('modal-open')
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('modal-open')
      if (restoreRef.current && typeof restoreRef.current.focus === 'function') {
        restoreRef.current.focus()
      }
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className="modal-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose}>
          <span aria-hidden="true">&times;</span>
          <span className="sr-only">Close dialog</span>
        </button>
        {children}
      </div>
    </div>
  )
}
