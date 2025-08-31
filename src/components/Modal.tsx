import { ModalProps } from "../_types/interfaces"
import styleInject from "style-inject"
import css from "../styles/modal.css?inline"

styleInject(css)

export default function Modal({
  isOpen,
  onClose,
  children,
  overlayColor = "rgba(0, 0, 0, 0.75)",
}: ModalProps) {
  return (
    isOpen && (
      <div
        className='overlay'
        style={{ backgroundColor: overlayColor }}
        onClick={onClose}>
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
          {" "}
          {children}
          <button className='closeBtn' onClick={onClose}>
            X
          </button>
        </div>
      </div>
    )
  )
}
