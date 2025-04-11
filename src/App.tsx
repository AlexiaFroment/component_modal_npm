import Modal from "./index"
function App() {
  return (
    <>
      <Modal isOpen={true} onClose={() => {}}>
        Contenu du modal ...
      </Modal>
    </>
  )
}

export default App
