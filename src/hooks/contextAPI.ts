import { createContext, useContext } from 'react'

export const handleOpenContactsContext = createContext<any>(null)

export function useHandleOpenContactsContext() {
  return useContext(handleOpenContactsContext)
}
