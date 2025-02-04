import { useEffect, useState } from 'react'
import './App.css'

import Hero from './components/Hero'
import Contact from './components/Contact'
import Features from './components/Features'
import LastCTA from './components/LastCTA'
import { handleOpenContactsContext } from './hooks/contextAPI'

const App = () => {
  const [showContacts, setShowContacts] = useState(false)

  const handleOpenContact = () => {
    setShowContacts(true)
  }

  const closeContacts = () => {
    setShowContacts(false)
  }

  useEffect(() => {
    if (showContacts) document.body.classList.add('disable-scroll')
    else document.body.classList.remove('disable-scroll')
  }, [showContacts])

  return (
    <>
      <handleOpenContactsContext.Provider value={handleOpenContact}>
        <Hero />

        <Contact
          showContacts={showContacts}
          closeContacts={closeContacts}
        />

        <Features />

        <LastCTA />
      </handleOpenContactsContext.Provider>
    </>
  )
}

export default App
