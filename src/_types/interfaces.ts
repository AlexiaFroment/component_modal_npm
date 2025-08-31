export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  overlayColor?: string
}
