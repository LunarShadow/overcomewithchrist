import { createContext, useState } from 'react'

export const HeaderContext = createContext()

export const HeaderProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <HeaderContext.Provider value={{ isOpen, setIsOpen }} >
      {children}
    </HeaderContext.Provider>
  )
}