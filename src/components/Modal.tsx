import { ModalProps } from "../_types/interfaces"
import styleInject from "style-inject"
import css from "../styles/modal.css?inline"

styleInject(css)

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    isOpen && (
      <div className='overlay'>
        <div className='modal-content'>
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
