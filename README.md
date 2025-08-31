# React Modal Component

Un composant **Modal React** prêt à l'emploi avec **TypeScript**, facile à intégrer dans ton projet. Le style est injecté automatiquement via `style-inject`, mais tu peux le **personnaliser** via des props.

---

## 1️⃣ Installation du component

Installe le package avec pnpm ou npm :

```bash
pnpm add @aloasdev/react-modal
```

ou avec npm :

```bash
npm install @aloasdev/react-modal
```

## 2️⃣ Importer le composant

```tsx
import Modal from "@aloasdev/react-modal"
```

## 3️⃣ Exemple d'utilisation simple

```tsx
import { useState } from "react"
import Modal from "@aloasdev/react-modal"

export default function Example() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>Hello, this is a modal!</p>
      </Modal>
    </>
  )
}
```

## 4️⃣ Personnaliser le style

### Couleur de l'overlay

Tu peux changer la couleur de fond de l'overlay via la prop `overlayColor` :

```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  overlayColor='rgba(0, 0, 255, 0.5)'>
  <p>Hello World 🚀</p>
</Modal>
```

## 5️⃣ Props disponibles

isOpen: boolean
onClose: () => void
children: React.ReactNode
overlayColor?: string

## 6️⃣ Fermeture

Le composant se ferme :

- Au clic sur le bouton X
- Au clic sur l'overlay (hors du contenu de la modal)

Le clic à l'intérieur de la modal ne ferme pas la fenêtre grâce à `stopPropagation()`.

## 7️⃣ Exemple complet avec customisation

```tsx
<Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  overlayColor='rgba(255, 0, 0, 0.5)'>
  <p>{`${currentEmployee.firstname} created with success 🎉`}</p>
</Modal>
```
