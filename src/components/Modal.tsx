import { ModalProps } from "../_types/interfaces"
import "../styles/modal.css"

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
